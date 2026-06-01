const KoraliVault = (() => {
  const VAULT_KEY = "korali-vault-v1";
  const PUBLISHED_KEY = "korali-published-v1";
  const INBOX_KEY = "korali-inbox-v1";
  const LEGACY_KEY = "korali-scene-content";
  const RSA_PUBLIC_KEY = "korali-rsa-public-v1";
  const PBKDF2_ITERATIONS = 210000;

  let sessionKey = null;
  let sessionUnlocked = false;
  let cachedSecureContent = null;

  const enc = new TextEncoder();
  const dec = new TextDecoder();

  function bufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

  function base64ToBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  function randomBytes(size = 16) {
    const bytes = new Uint8Array(size);
    crypto.getRandomValues(bytes);
    return bytes;
  }

  async function hashPassword(password, salt) {
    const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
    const bits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt,
        iterations: PBKDF2_ITERATIONS,
        hash: "SHA-256"
      },
      keyMaterial,
      256
    );
    return bufferToBase64(bits);
  }

  async function deriveAesKey(password, salt) {
    const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: PBKDF2_ITERATIONS,
        hash: "SHA-256"
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"]
    );
  }

  async function encryptJson(key, payload) {
    const iv = randomBytes(12);
    const cipher = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      enc.encode(JSON.stringify(payload))
    );
    return {
      iv: bufferToBase64(iv),
      data: bufferToBase64(cipher)
    };
  }

  async function decryptJson(key, ivBase64, dataBase64) {
    const plain = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBuffer(ivBase64) },
      key,
      base64ToBuffer(dataBase64)
    );
    return JSON.parse(dec.decode(plain));
  }

  async function generateRsaKeyPair() {
    return crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
      },
      true,
      ["encrypt", "decrypt"]
    );
  }

  async function ensureRsaKeys(aesKey, vaultRecord) {
    if (vaultRecord?.privateKey && localStorage.getItem(RSA_PUBLIC_KEY)) {
      return;
    }

    const pair = await generateRsaKeyPair();
    const publicJwk = await crypto.subtle.exportKey("jwk", pair.publicKey);
    const privateJwk = await crypto.subtle.exportKey("jwk", pair.privateKey);
    const wrappedPrivate = await encryptJson(aesKey, privateJwk);

    vaultRecord.privateKey = wrappedPrivate;
    localStorage.setItem(RSA_PUBLIC_KEY, JSON.stringify(publicJwk));
  }

  async function importPublicKey() {
    const raw = localStorage.getItem(RSA_PUBLIC_KEY);
    if (!raw) return null;
    return crypto.subtle.importKey("jwk", JSON.parse(raw), { name: "RSA-OAEP", hash: "SHA-256" }, false, ["encrypt"]);
  }

  async function importPrivateKey(aesKey, vaultRecord) {
    if (!vaultRecord?.privateKey) return null;
    const privateJwk = await decryptJson(aesKey, vaultRecord.privateKey.iv, vaultRecord.privateKey.data);
    return crypto.subtle.importKey("jwk", privateJwk, { name: "RSA-OAEP", hash: "SHA-256" }, false, ["decrypt"]);
  }

  function stripSecrets(content) {
    const copy = JSON.parse(JSON.stringify(content));
    if (copy.settings) {
      delete copy.settings.adminPassword;
    }
    copy.applications = [];
    copy.tasks = [];
    return copy;
  }

  function publishPublic(content) {
    localStorage.setItem(PUBLISHED_KEY, JSON.stringify(stripSecrets(content)));
  }

  function readPublic() {
    try {
      const raw = localStorage.getItem(PUBLISHED_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function readVaultRecord() {
    try {
      const raw = localStorage.getItem(VAULT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function writeVaultRecord(record) {
    localStorage.setItem(VAULT_KEY, JSON.stringify(record));
  }

  async function writeSecureVault(content, password, previousKey = null) {
    const salt = randomBytes(16);
    const aesKey = await deriveAesKey(password, salt);
    const passwordHash = await hashPassword(password, salt);
    const record = readVaultRecord() || {};

    let existingPrivateJwk = null;
    if (record.privateKey) {
      const unwrapKey = previousKey || aesKey;
      try {
        existingPrivateJwk = await decryptJson(unwrapKey, record.privateKey.iv, record.privateKey.data);
      } catch {
        existingPrivateJwk = null;
      }
    }

    const payload = JSON.parse(JSON.stringify(content));
    if (payload.settings) {
      delete payload.settings.adminPassword;
    }

    const encrypted = await encryptJson(aesKey, payload);
    record.version = 1;
    record.salt = bufferToBase64(salt);
    record.passwordHash = passwordHash;
    record.payload = encrypted;

    if (existingPrivateJwk) {
      record.privateKey = await encryptJson(aesKey, existingPrivateJwk);
    } else {
      await ensureRsaKeys(aesKey, record);
    }

    writeVaultRecord(record);
    publishPublic(payload);
    cachedSecureContent = payload;
    return payload;
  }

  async function initFromContent(content, password) {
    await writeSecureVault(content, password);
    localStorage.removeItem(LEGACY_KEY);
  }

  async function migrateLegacy() {
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (!legacy || readVaultRecord()) return false;
    try {
      const parsed = JSON.parse(legacy);
      const password = parsed.settings?.adminPassword || "korali2026";
      await initFromContent(parsed, password);
      return true;
    } catch {
      return false;
    }
  }

  async function verifyPassword(password, record) {
    const salt = base64ToBuffer(record.salt);
    const hash = await hashPassword(password, salt);
    return hash === record.passwordHash;
  }

  async function unlock(password) {
    await migrateLegacy();

    let record = readVaultRecord();
    if (!record) {
      const seed = structuredClone(window.__koraliDefaultContent || {});
      await initFromContent(seed, password || "korali2026");
      record = readVaultRecord();
    }

    if (!(await verifyPassword(password, record))) {
      lock();
      return false;
    }

    const salt = base64ToBuffer(record.salt);
    sessionKey = await deriveAesKey(password, salt);
    sessionUnlocked = true;
    cachedSecureContent = await decryptJson(sessionKey, record.payload.iv, record.payload.data);
    await mergeInboxIntoVault();
    return true;
  }

  function lock() {
    sessionKey = null;
    sessionUnlocked = false;
    cachedSecureContent = null;
  }

  function isUnlocked() {
    return sessionUnlocked && Boolean(sessionKey);
  }

  function readSecure() {
    if (!isUnlocked()) return null;
    return cachedSecureContent;
  }

  async function saveSecure(content) {
    if (!isUnlocked()) {
      throw new Error("Данные защищены. Войдите в админку.");
    }
    const record = readVaultRecord();
    const salt = base64ToBuffer(record.salt);
    const passwordCheck = record.passwordHash;
    const aesKey = sessionKey;
    const passwordHash = passwordCheck;

    const payload = JSON.parse(JSON.stringify(content));
    if (payload.settings) {
      delete payload.settings.adminPassword;
    }

    const encrypted = await encryptJson(aesKey, payload);
    record.payload = encrypted;
    writeVaultRecord(record);
    publishPublic(payload);
    cachedSecureContent = payload;
    return payload;
  }

  async function changePassword(newPassword, content) {
    if (!isUnlocked() || !String(newPassword || "").trim()) {
      return false;
    }
    const previousKey = sessionKey;
    await writeSecureVault(content, newPassword, previousKey);
    const record = readVaultRecord();
    sessionKey = await deriveAesKey(newPassword, base64ToBuffer(record.salt));
    sessionUnlocked = true;
    return true;
  }

  function readInbox() {
    try {
      const raw = localStorage.getItem(INBOX_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function writeInbox(items) {
    localStorage.setItem(INBOX_KEY, JSON.stringify(items));
  }

  async function appendInbox(application) {
    const publicKey = await importPublicKey();
    if (!publicKey) {
      throw new Error("Ключ приёма заявок не настроен. Откройте админку один раз.");
    }
    const encoded = enc.encode(JSON.stringify(application));
    const encrypted = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, publicKey, encoded);
    const inbox = readInbox();
    inbox.push(bufferToBase64(encrypted));
    writeInbox(inbox);
  }

  async function mergeInboxIntoVault() {
    if (!isUnlocked()) return;
    const inbox = readInbox();
    if (!inbox.length) return;

    const record = readVaultRecord();
    const privateKey = await importPrivateKey(sessionKey, record);
    if (!privateKey) return;

    const content = (await readSecure()) || {};
    content.applications = content.applications || [];

    for (const item of inbox) {
      try {
        const decrypted = await crypto.subtle.decrypt(
          { name: "RSA-OAEP" },
          privateKey,
          base64ToBuffer(item)
        );
        content.applications.unshift(JSON.parse(dec.decode(decrypted)));
      } catch {
        // skip broken inbox rows
      }
    }

    await saveSecure(content);
    writeInbox([]);
  }

  async function appendApplication(application) {
    if (isUnlocked()) {
      const content = (await readSecure()) || {};
      content.applications = content.applications || [];
      content.applications.unshift(application);
      await saveSecure(content);
      return "vault";
    }
    await appendInbox(application);
    return "inbox";
  }

  function installConsoleGuard() {
    const api = Object.freeze({
      help() {
        console.info("korali.unlock('пароль') — разблокировать данные в этой вкладке.");
      },
      async unlock(password) {
        const ok = await unlock(String(password || ""));
        console.info(ok ? "Доступ открыт." : "Неверный пароль.");
        return ok;
      },
      lock() {
        lock();
        console.info("Доступ закрыт.");
      },
      status() {
        console.info(isUnlocked() ? "vault: unlocked" : "vault: locked");
      }
    });

    Object.defineProperty(window, "korali", {
      value: api,
      writable: false,
      configurable: false,
      enumerable: false
    });
  }

  installConsoleGuard();

  return {
    migrateLegacy,
    unlock,
    lock,
    isUnlocked,
    readPublic,
    readSecure,
    saveSecure,
    changePassword,
    appendApplication,
    appendInbox,
    initFromContent
  };
})();
