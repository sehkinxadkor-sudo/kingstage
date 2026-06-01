const DEFAULT_ADMIN_PASSWORD = "korali2026";

const defaultContent = KoraliVault.readPublic() || { /* твоя строчка */ };
  settings: {
    siteTitle: "лох Сцены",
    heroImage: "",
    deliveryTarget: "Bitrix24 / hr@example.com",
    hrEmail: "hr@example.com",
    heroEyebrow: "Набор в команду",
    heroTitle: "Стань частью постановки. «Короли Сцены» собирают команду",
    heroCopy: "Это не биржа вакансий, а приглашение в живой театральный проект: на сцену, за кулисы, в продакшн и в творческую мастерскую.",
    aboutEyebrow: "О проекте",
    aboutTitle: "Мы собираем людей, которым хочется прожить постановку изнутри",
    aboutCards: [
      {
        title: "Творчество",
        text: "Актеры, музыканты, художники, организаторы и люди с неожиданными талантами здесь одинаково важны."
      },
      {
        title: "Порядок",
        text: "Репетиции, задачи и встречи должны быть понятными, чтобы энергия уходила в работу, а не в хаос."
      },
      {
        title: "Рост",
        text: "Нам интересны не только готовые резюме, но и живые истории: чем вы горите и где хотите раскрыться."
      }
    ],
    applyTitle: "Расскажите о себе свободно, как на первой творческой встрече",
    applyText: "Не нужно писать сухое резюме. Расскажите о своем опыте, талантах, голосе, движении, сцене, организации или просто о желании участвовать."
  },
  about: {
    eyebrow: "О проекте",
    title: "Мы собираем людей, которым хочется прожить постановку изнутри",
    cards: [
      {
        title: "Творчество",
        text: "Актеры, музыканты, художники, организаторы и люди с неожиданными талантами здесь одинаково важны."
      },
      {
        title: "Порядок",
        text: "Репетиции, задачи и встречи должны быть понятными, чтобы энергия уходила в работу, а не в хаос."
      },
      {
        title: "Рост",
        text: "Нам интересны не только готовые резюме, но и живые истории: чем вы горите и где хотите раскрыться."
      }
    ],
    linksLabel: "Мы в сети",
    links: []
  },
  timeline: {
    eyebrow: "Тайм-лайн набора",
    title: "Что будет после отправки заявки",
    steps: [
      {
        title: "Получение заявки",
        text: "Мы читаем резюме, портфолио и короткий рассказ о вас."
      },
      {
        title: "Интервью",
        text: "Знакомимся, обсуждаем опыт, ожидания и формат работы."
      },
      {
        title: "Тестовое",
        text: "Даем небольшую задачу, если для роли важно увидеть практику."
      },
      {
        title: "Добро пожаловать",
        text: "Согласуем условия и мягко вводим в командные процессы."
      }
    ]
  },
  announcements: [
    {
      title: "Открываем набор в постановку",
      text: "Ищем актеров, помощников режиссера, координаторов, художников и людей с неожиданными сценическими талантами.",
      date: "1 июня 2026",
      image: "assets/news-1.svg"
    },
    {
      title: "Готовим первые встречи",
      text: "После сбора анкет пригласим участников на знакомство, разговор о проекте и короткие творческие пробы.",
      date: "1 июня 2026",
      image: "assets/news-2.svg"
    },
    {
      title: "Нужна команда за кулисами",
      text: "В постановке важны не только исполнители: нужны люди для света, реквизита, коммуникаций и организации репетиций.",
      date: "1 июня 2026",
      image: "assets/news-3.svg"
    }
  ],
  roles: [
    {
      title: "Участник сцены",
      status: "active",
      summary: "Для тех, кто хочет играть, двигаться, звучать и пробовать себя в живом театральном процессе.",
      tags: ["Сцена", "Прослушивание", "Творчество"],
      requirements: ["Интерес к театру и работе в группе", "Готовность приходить на репетиции", "Открытость к пробам и обратной связи"],
      duties: ["Участвовать в репетициях", "Готовить сценические фрагменты", "Работать с голосом, телом и партнером"]
    },
    {
      title: "Помощник постановки",
      status: "active",
      summary: "Для людей, которым близки организация, репетиционный процесс и аккуратная работа за кулисами.",
      tags: ["За кулисами", "Организация", "Гибко"],
      requirements: ["Внимательность к деталям", "Умение договариваться и фиксировать задачи", "Спокойная коммуникация с командой"],
      duties: ["Помогать на репетициях", "Следить за расписанием и реквизитом", "Собирать статусы и передавать команде"]
    },
    {
      title: "Художник / медиа",
      status: "active",
      summary: "Для тех, кто хочет помогать визуальному миру постановки: афиши, соцсети, фото, видео, реквизит.",
      tags: ["Визуал", "Контент", "Проектно"],
      requirements: ["Насмотренность и вкус", "Портфолио или примеры работ по желанию", "Готовность работать в общей стилистике"],
      duties: ["Делать визуальные материалы", "Помогать с образом проекта", "Упаковывать анонсы, фото и закулисье"]
    }
  ],
  applications: [],
  tasks: [
    {
      title: "Собрать список участников для первой встречи",
      owner: "Админ",
      status: "Новая",
      due: "2026-06-05"
    },
    {
      title: "Подготовить план знакомства и прослушивания",
      owner: "Режиссерская группа",
      status: "В обработке",
      due: "2026-06-07"
    }
  ],
  footer: {
    brandTitle: "",
    legalName: "",
    legalDetails: "",
    about: "Театральный проект «Корали Сцены». Открытый набор в творческую команду постановки.",
    creators: "",
    copyright: "© 2026 Корали Сцены",
    extraLines: [],
    links: [
      { label: "Анонсы", href: "#announcements" },
      { label: "Роли", href: "#jobs" },
      { label: "Оставить заявку", href: "#apply" }
    ],
    showAdminLink: true
  }
};

window.__koraliDefaultContent = defaultContent;

function readContent() {
  try {
    if (document.querySelector("[data-admin]") && KoraliVault.isUnlocked()) {
      const secure = KoraliVault.readSecure();
      if (secure) {
        return normalizeContent(secure);
      }
    }
    const published = KoraliVault.readPublic();
    return normalizeContent(published || defaultContent);
  } catch {
    return normalizeContent(defaultContent);
  }
}

function readSecureContent() {
  const secure = KoraliVault.readSecure();
  return normalizeContent(secure || KoraliVault.readPublic() || defaultContent);
}

function normalizeContent(content) {
  if (!content.schemaVersion || content.schemaVersion < 3) {
    return cloneDefaultContent();
  }

  const settings = { ...defaultContent.settings, ...(content.settings || {}) };
  if (!settings.hrEmail) {
    settings.hrEmail = extractHrEmail(settings.deliveryTarget) || defaultContent.settings.hrEmail;
  }
  delete settings.adminPassword;

  return {
    ...defaultContent,
    ...content,
    schemaVersion: defaultContent.schemaVersion,
    settings,
    timeline: {
      ...defaultContent.timeline,
      ...(content.timeline || {}),
      steps: content.timeline?.steps || defaultContent.timeline.steps
    },
    announcements: content.announcements || defaultContent.announcements,
    roles: content.roles || defaultContent.roles,
    applications: content.applications || [],
    tasks: content.tasks || defaultContent.tasks,
    about: normalizeAbout(content),
    footer: {
      ...defaultContent.footer,
      ...(content.footer || {}),
      extraLines: content.footer?.extraLines || defaultContent.footer.extraLines,
      links: Array.isArray(content.footer?.links) ? content.footer.links : defaultContent.footer.links
    }
  };
}

function normalizeAbout(content) {
  const fromAbout = content.about || {};
  const settings = content.settings || {};
  return {
    ...defaultContent.about,
    ...fromAbout,
    eyebrow: fromAbout.eyebrow || settings.aboutEyebrow || defaultContent.about.eyebrow,
    title: fromAbout.title || settings.aboutTitle || defaultContent.about.title,
    cards: fromAbout.cards || settings.aboutCards || defaultContent.about.cards,
    linksLabel: fromAbout.linksLabel || defaultContent.about.linksLabel,
    links: Array.isArray(fromAbout.links) ? fromAbout.links : defaultContent.about.links
  };
}

function parseFooterLines(value = "") {
  return String(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseFooterLinks(value = "") {
  return parseFooterLines(value)
    .map((line) => {
      const [label, href] = line.split("|").map((part) => part.trim());
      return label && href ? { label, href } : null;
    })
    .filter(Boolean);
}

function formatFooterLinks(links = []) {
  return links.map((link) => `${link.label}|${link.href}`).join("\n");
}

function renderAboutSection(content) {
  const about = content.about || defaultContent.about;
  const aboutHeading = document.querySelector("#about .section-heading");
  if (aboutHeading) {
    aboutHeading.querySelector(".eyebrow").textContent = about.eyebrow;
    aboutHeading.querySelector("h2").textContent = about.title;
  }

  const cardsRoot = document.querySelector("[data-about-cards]");
  if (cardsRoot) {
    cardsRoot.innerHTML = (about.cards || []).map((card) => `
      <article data-reveal>
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.text)}</p>
      </article>
    `).join("");
  }

  const linksRoot = document.querySelector("[data-about-links]");
  if (!linksRoot) return;

  const links = (about.links || []).filter((item) => item.title && item.href);
  if (!links.length) {
    linksRoot.hidden = true;
    linksRoot.innerHTML = "";
    return;
  }

  linksRoot.hidden = false;
  linksRoot.innerHTML = `
    <p class="about-links-label">${escapeHtml(about.linksLabel || "Мы в сети")}</p>
    <div class="about-links-grid">
      ${links.map((link) => `
        <a class="about-link-card" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer noopener" data-reveal>
          <strong>${escapeHtml(link.title)}</strong>
          ${link.text ? `<span>${escapeHtml(link.text)}</span>` : ""}
        </a>
      `).join("")}
    </div>
  `;
}

function renderFooter(content) {
  const root = document.querySelector("[data-site-footer]");
  if (!root) return;

  const footer = content.footer || defaultContent.footer;
  const brandTitle = footer.brandTitle || content.settings.siteTitle || defaultContent.settings.siteTitle;
  const extraLines = (footer.extraLines || []).filter(Boolean);
  const links = (footer.links || []).filter((item) => item.label && item.href);

  const linksHtml = links.length
    ? `
      <div class="footer-col footer-links-col">
        <p class="footer-label">Разделы</p>
        <ul>
          ${links.map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`).join("")}
        </ul>
      </div>
    `
    : "";

  root.innerHTML = `
    <div class="footer-grid">
      <div class="footer-col footer-brand-col">
        <strong class="footer-brand">${escapeHtml(brandTitle)}</strong>
        ${footer.about ? `<p>${escapeHtml(footer.about)}</p>` : ""}
        ${footer.creators ? `<p class="footer-creators">${escapeHtml(footer.creators)}</p>` : ""}
      </div>
      ${linksHtml}
      <div class="footer-col footer-legal-col">
        ${footer.legalName ? `<p class="footer-legal-name">${escapeHtml(footer.legalName)}</p>` : ""}
        ${footer.legalDetails ? `<p>${escapeHtml(footer.legalDetails)}</p>` : ""}
        ${extraLines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
        ${footer.copyright ? `<p class="footer-copy">${escapeHtml(footer.copyright)}</p>` : ""}
      </div>
    </div>
    ${footer.showAdminLink !== false ? `<div class="footer-meta"><a href="admin.html" class="footer-admin-link">Админка</a></div>` : ""}
  `;
}

function cloneDefaultContent() {
  return JSON.parse(JSON.stringify(defaultContent));
}

function extractHrEmail(value = "") {
  const match = String(value).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : "";
}

function isAdminAuthenticated() {
  return KoraliVault.isUnlocked();
}

async function saveContent(content, options = {}) {
  if (!KoraliVault.isUnlocked()) {
    throw new Error("Данные защищены. Войдите в админку.");
  }
  const payload = JSON.parse(JSON.stringify(content));
  if (payload.settings) {
    delete payload.settings.adminPassword;
  }
  if (options.newPassword) {
    await KoraliVault.changePassword(options.newPassword, payload);
    return;
  }
  await KoraliVault.saveSecure(payload);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPublicSite() {
  const content = readContent();

  document.querySelectorAll("[data-site-title]").forEach((node) => {
    node.textContent = content.settings.siteTitle || defaultContent.settings.siteTitle;
  });

  if (content.settings.heroImage) {
    document.documentElement.style.setProperty("--hero-image", `url("${content.settings.heroImage}")`);
  }

  renderPageCopy(content);

  const announcementsRoot = document.querySelector("[data-announcements]");
  if (announcementsRoot) {
    announcementsRoot.innerHTML = content.announcements.map(renderAnnouncement).join("");
  }

  const activeRoles = content.roles.filter((role) => role.status !== "closed");
  const jobsRoot = document.querySelector("[data-jobs]");
  if (jobsRoot) {
    jobsRoot.innerHTML = activeRoles.map(renderRole).join("");
  }

  const select = document.querySelector("[data-position-select]");
  if (select) {
    select.innerHTML = activeRoles
      .map((role) => `<option value="${escapeHtml(role.title)}">${escapeHtml(role.title)}</option>`)
      .join("");
  }

  renderFooter(content);
  bindApplicationForm();
  bindHeaderBlur();
  revealOnScroll();
}

function renderPageCopy(content) {
  const heroEyebrow = document.querySelector(".hero .eyebrow");
  const heroTitle = document.querySelector("#hero-title");
  const heroCopy = document.querySelector(".hero-copy");
  if (heroEyebrow) heroEyebrow.textContent = content.settings.heroEyebrow;
  if (heroTitle) heroTitle.textContent = content.settings.heroTitle;
  if (heroCopy) heroCopy.textContent = content.settings.heroCopy;

  renderAboutSection(content);

  const applyCopy = document.querySelector(".application-copy");
  if (applyCopy) {
    applyCopy.querySelector("h2").textContent = content.settings.applyTitle;
    applyCopy.querySelector("p:last-child").textContent = content.settings.applyText;
  }

  const timelineHeading = document.querySelector("#timeline .section-heading");
  if (timelineHeading) {
    timelineHeading.querySelector(".eyebrow").textContent = content.timeline.eyebrow;
    timelineHeading.querySelector("h2").textContent = content.timeline.title;
  }

  const timelineRoot = document.querySelector("[data-timeline]");
  if (timelineRoot) {
    timelineRoot.innerHTML = content.timeline.steps.map((step, index) => `
      <li>
        <span>${index + 1}</span>
        <strong>${escapeHtml(step.title)}</strong>
        <p>${escapeHtml(step.text)}</p>
      </li>
    `).join("");
  }
}

function announcementImageSrc(value) {
  const src = value || "assets/news-1.svg";
  if (src.startsWith("data:") || src.startsWith("http://") || src.startsWith("https://") || src.startsWith("assets/") || src.startsWith("/")) {
    return escapeHtml(src);
  }
  return "assets/news-1.svg";
}

async function readImageFile(file) {
  if (!(file instanceof File) || !file.type.startsWith("image/")) {
    throw new Error("Выберите файл изображения (JPG, PNG, WEBP).");
  }
  if (file.size > 2_500_000) {
    throw new Error("Файл слишком большой. До 2,5 МБ.");
  }

  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Не удалось прочитать файл."));
    reader.readAsDataURL(file);
  });

  return compressAnnouncementImage(dataUrl);
}

function compressAnnouncementImage(dataUrl, maxWidth = 1280, quality = 0.84) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      if (image.width <= maxWidth) {
        resolve(dataUrl);
        return;
      }
      const scale = maxWidth / image.width;
      const width = maxWidth;
      const height = Math.round(image.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      ctx.drawImage(image, 0, 0, width, height);
      const output = dataUrl.startsWith("data:image/png")
        ? canvas.toDataURL("image/png")
        : canvas.toDataURL("image/jpeg", quality);
      resolve(output);
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

async function resolveAnnouncementImage(form, currentImage = "") {
  const formData = new FormData(form);
  const file = formData.get("imageFile");
  if (file instanceof File && file.size > 0) {
    return readImageFile(file);
  }
  const url = String(formData.get("imageUrl") ?? formData.get("image") ?? "").trim();
  if (url) return url;
  return currentImage || "assets/news-1.svg";
}

function renderAnnouncement(item) {
  return `
    <article class="announcement-card" data-reveal>
      <img src="${announcementImageSrc(item.image)}" alt="">
      <div>
        <time>${escapeHtml(item.date || "")}</time>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </div>
    </article>
  `;
}

function renderRole(role) {
  const tags = role.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  const requirements = role.requirements.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const duties = role.duties.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  return `
    <details class="job-card" data-reveal>
      <summary>
        <div>
          <h3 class="job-title">${escapeHtml(role.title)}</h3>
          <p class="job-summary">${escapeHtml(role.summary)}</p>
          <div class="tags">${tags}</div>
        </div>
        <span class="job-toggle">Подробнее</span>
      </summary>
      <div class="job-details">
        <div>
          <h4>Что поможет</h4>
          <ul>${requirements}</ul>
        </div>
        <div>
          <h4>Что предстоит</h4>
          <ul>${duties}</ul>
        </div>
      </div>
    </details>
  `;
}

function bindApplicationForm() {
  const form = document.querySelector("[data-application-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void handleApplicationSubmit(form);
  });

  const emailLink = form.querySelector("[data-email-only]");
  if (emailLink) {
    const primeMailtoLink = (event) => {
      if ("button" in event && event.button !== 0) return;
      const result = validateApplicationForm(form);
      if (!result.ok) {
        emailLink.href = "#";
        return;
      }
      emailLink.href = buildMailtoLink(result.hrEmail, result.payload);
    };

    emailLink.addEventListener("mousedown", primeMailtoLink);
    emailLink.addEventListener("touchstart", primeMailtoLink, { passive: true });

    emailLink.addEventListener("click", (event) => {
      const result = validateApplicationForm(form);
      if (!result.ok) {
        event.preventDefault();
        showFormStatus(form, result.message, "error");
        emailLink.href = "#";
      }
    });
  }
}

function buildApplicationPayload(formData) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toLocaleString("ru-RU"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    position: formData.get("position"),
    portfolio: formData.get("portfolio"),
    story: formData.get("story"),
    resumeName: formData.get("resume")?.name || "",
    status: "Новая"
  };
}

function validateApplicationForm(form) {
  const formData = new FormData(form);
  const payload = buildApplicationPayload(formData);
  const content = readContent();
  const hrEmail = content.settings.hrEmail?.trim() || defaultContent.settings.hrEmail;

  if (!payload.email && !payload.phone) {
    return { ok: false, message: "Укажите email или телефон." };
  }

  if (!hrEmail) {
    return { ok: false, message: "В админке не задана почта." };
  }

  return { ok: true, formData, payload, hrEmail };
}

function showFormStatus(form, message, type = "") {
  const status = form.querySelector("[data-form-status]");
  if (!status) return;
  status.textContent = message;
  status.className = type ? `form-note ${type}` : "form-note";
}

async function handleApplicationSubmit(form) {
  const result = validateApplicationForm(form);
  if (!result.ok) {
    showFormStatus(form, result.message, "error");
    return;
  }

  const { formData, payload, hrEmail } = result;
  showFormStatus(form, "Сохраняем…");

  try {
    await KoraliVault.appendApplication(payload);
  } catch (error) {
    showFormStatus(form, error?.message || "Не удалось сохранить заявку.", "error");
    return;
  }

  const sent = await sendApplicationByEmail(formData, payload, hrEmail);

  if (sent) {
    showFormStatus(form, "Готово. Анкета в админке.", "success");
    form.reset();
    return;
  }

  showFormStatus(form, "Готово. Анкета в админке.", "success");
  form.reset();
}

async function sendApplicationByEmail(formData, payload, hrEmail) {
  const outbound = new FormData();
  for (const [key, value] of formData.entries()) {
    outbound.append(key, value);
  }
  outbound.append("deliveryMode", "admin");
  outbound.append("hrEmail", hrEmail);

  try {
    const response = await fetch("/api/send-application", {
      method: "POST",
      body: outbound
    });
    return response.ok;
  } catch {
    return false;
  }
}

function buildMailtoLink(hrEmail, payload) {
  const subject = encodeURIComponent(`Анкета: ${payload.position}`);
  let plainBody = buildPlainApplication(payload);
  if (plainBody.length > 1200) {
    plainBody = `${plainBody.slice(0, 1197)}...`;
  }
  const body = encodeURIComponent(plainBody);
  return `mailto:${hrEmail}?subject=${subject}&body=${body}`;
}

function buildPlainApplication(payload) {
  return [
    `Имя: ${payload.name}`,
    `Email: ${payload.email || "Не указан"}`,
    `Телефон: ${payload.phone || "Не указан"}`,
    `Роль: ${payload.position}`,
    `Портфолио: ${payload.portfolio || "Не указано"}`,
    `Файл: ${payload.resumeName || "Не прикреплен"}`,
    "",
    "Расскажи о себе:",
    payload.story
  ].join("\n");
}

function bindHeaderBlur() {
  const header = document.querySelector(".site-header");
  if (!header || header.dataset.blurBound) return;
  header.dataset.blurBound = "1";

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function revealOnScroll() {
  const nodes = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  nodes.forEach((node) => observer.observe(node));
}

function renderAdminLogin(root) {
  root.innerHTML = `
    <section class="admin-login" data-admin-login>
      <p class="eyebrow">Доступ ограничен</p>
      <h1>Вход в админку</h1>
      <p>Введите пароль, чтобы открыть заявки, задачи и настройки сайта.</p>
      <form class="admin-login-form" data-admin-login-form>
        <label>
          Пароль
          <input type="password" name="password" autocomplete="current-password" required placeholder="Пароль администратора">
        </label>
        <button class="button button-primary wide" type="submit">Войти</button>
        <p class="form-note" data-admin-login-status role="status" aria-live="polite"></p>
      </form>
      <a class="admin-login-back" href="index.html">← На сайт</a>
    </section>
  `;

  const form = root.querySelector("[data-admin-login-form]");
  const status = root.querySelector("[data-admin-login-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = String(new FormData(form).get("password") || "");
    void (async () => {
      status.textContent = "Проверяем пароль…";
      status.className = "form-note";
      const ok = await KoraliVault.unlock(password);
      if (ok) {
        renderAdmin();
        return;
      }
      status.textContent = "Неверный пароль.";
      status.className = "form-note error";
    })();
  });
}

function renderAdmin() {
  const root = document.querySelector("[data-admin]");
  if (!root) return;

  if (!isAdminAuthenticated()) {
    renderAdminLogin(root);
    return;
  }

  renderAdminPanels(root);
}

function renderAdminPanels(root) {
  const content = readSecureContent();
  const filter = root.dataset.filter || "Все";

  root.innerHTML = `
    <section class="admin-panel admin-hero">
      <div>
        <p class="eyebrow">Консоль управления</p>
        <h1>Корали Сцены</h1>
        <p>Заявки участников, задачи постановки и контент сайта в одном спокойном рабочем пространстве.</p>
      </div>
      <div class="admin-hero-actions">
        <div class="admin-stats">
          <span><strong>${content.applications.length}</strong> анкет</span>
          <span><strong>${content.tasks.length}</strong> задач</span>
        </div>
        <button class="button button-secondary" type="button" data-admin-logout>Выйти</button>
      </div>
    </section>

    <nav class="admin-tabs" aria-label="Разделы админки">
      <a href="#applications">Заявки</a>
      <a href="#tasks">Задачи</a>
      <a href="#main-copy">Основное</a>
      <a href="#about-admin">О нас</a>
      <a href="#composition">Композиция</a>
      <a href="#announcements-admin">Анонсы</a>
      <a href="#content">Контент</a>
      <a href="#footer-admin">Подвал</a>
    </nav>

    <section class="admin-panel" id="applications">
      <div class="admin-section-title">
        <h2>Заявки</h2>
        <select data-application-filter>
          ${["Все", "Новая", "В обработке", "Принят", "Отказ"].map((item) => `<option ${item === filter ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </div>
      <div class="admin-list application-list">
        ${renderApplications(content, filter)}
      </div>
    </section>

    <section class="admin-panel" id="tasks">
      <h2>Задачи постановки</h2>
      <form class="admin-mini-form" data-task-form>
        <label>Задача<input name="title" required placeholder="Например: найти реквизит для сцены 2"></label>
        <label>Ответственный<input name="owner" placeholder="Имя или группа"></label>
        <label>Срок<input name="due" type="date"></label>
        <button class="button button-primary" type="submit">Создать задачу</button>
      </form>
      <div class="admin-list task-list">
        ${content.tasks.map(renderTask).join("")}
      </div>
    </section>

    <section class="admin-panel" id="main-copy">
      <h2>Основное</h2>
      <form class="admin-copy-form" data-main-copy-form>
        <label>Лейбл главного экрана<input name="heroEyebrow" value="${escapeHtml(content.settings.heroEyebrow)}"></label>
        <label class="wide">Заголовок главного экрана<textarea name="heroTitle" rows="2">${escapeHtml(content.settings.heroTitle)}</textarea></label>
        <label class="wide">Описание при входе<textarea name="heroCopy" rows="3">${escapeHtml(content.settings.heroCopy)}</textarea></label>
        <label class="wide">Заголовок анкеты<textarea name="applyTitle" rows="2">${escapeHtml(content.settings.applyTitle)}</textarea></label>
        <label class="wide">Описание анкеты<textarea name="applyText" rows="3">${escapeHtml(content.settings.applyText)}</textarea></label>
        <button class="button button-primary wide" type="submit">Сохранить основное</button>
      </form>
    </section>

    <section class="admin-panel" id="about-admin">
      <h2>О нас</h2>
      <form class="admin-copy-form" data-about-heading-form>
        <label>Лейбл раздела<input name="eyebrow" value="${escapeHtml(content.about.eyebrow)}"></label>
        <label class="wide">Заголовок<textarea name="title" rows="2">${escapeHtml(content.about.title)}</textarea></label>
        <label>Заголовок блока ссылок<input name="linksLabel" value="${escapeHtml(content.about.linksLabel)}" placeholder="Мы в сети"></label>
        <button class="button button-primary wide" type="submit">Сохранить заголовки</button>
      </form>

      <h3 class="admin-subtitle">Карточки</h3>
      <form class="admin-mini-form" data-about-card-form>
        <label>Название<input name="title" required placeholder="Творчество"></label>
        <label class="wide">Текст<input name="text" required placeholder="Коротко о пункте"></label>
        <button class="button button-primary" type="submit">Добавить карточку</button>
      </form>
      <div class="editable-list">
        ${content.about.cards.map(renderAboutCardEditor).join("")}
      </div>

      <h3 class="admin-subtitle">Сообщества и ссылки</h3>
      <form class="admin-announcement-form" data-about-link-form>
        <label>Название<input name="title" required placeholder="ВКонтакте"></label>
        <label class="wide">Ссылка<input name="href" required placeholder="https://vk.com/..."></label>
        <label class="wide">Подпись<input name="text" placeholder="Наше сообщество"></label>
        <button class="button button-primary" type="submit">Добавить ссылку</button>
      </form>
      <div class="editable-list">
        ${content.about.links.map(renderAboutLinkEditor).join("")}
      </div>
    </section>

    <section class="admin-panel" id="composition">
      <h2>Композиция: что будет после заявки</h2>
      <form class="admin-copy-form" data-timeline-form>
        <label>Лейбл блока<input name="timelineEyebrow" value="${escapeHtml(content.timeline.eyebrow)}"></label>
        <label class="wide">Заголовок блока<textarea name="timelineTitle" rows="2">${escapeHtml(content.timeline.title)}</textarea></label>
        ${content.timeline.steps.map((step, index) => `
          <fieldset class="admin-fieldset">
            <legend>Шаг ${index + 1}</legend>
            <label>Название<input name="stepTitle${index}" value="${escapeHtml(step.title)}"></label>
            <label>Описание<textarea name="stepText${index}" rows="3">${escapeHtml(step.text)}</textarea></label>
          </fieldset>
        `).join("")}
        <button class="button button-primary wide" type="submit">Сохранить таймлайн</button>
      </form>
    </section>

    <section class="admin-panel" id="announcements-admin">
      <h2>Анонсы</h2>
      <form class="admin-announcement-form" data-announcement-form>
        <label>Заголовок<input name="title" required></label>
        <label class="wide">Текст<input name="text" required></label>
        <label class="wide">Картинка с компьютера<input type="file" name="imageFile" accept="image/*"></label>
        <label>или путь на сайте<input name="imageUrl" placeholder="assets/news-1.svg"></label>
        <button class="button button-primary" type="submit">Добавить</button>
      </form>
      <div class="editable-list">
        ${content.announcements.map(renderAnnouncementEditor).join("")}
      </div>
    </section>

    <section class="admin-panel" id="footer-admin">
      <h2>Подвал сайта</h2>
      <form class="admin-copy-form" data-footer-form>
        <label>Название в подвале<input name="brandTitle" value="${escapeHtml(content.footer.brandTitle || "")}" placeholder="Пусто — как на сайте"></label>
        <label>Юрлицо / ООО<input name="legalName" value="${escapeHtml(content.footer.legalName || "")}" placeholder="ООО «Корали Сцены»"></label>
        <label class="wide">Реквизиты и юр. текст<textarea name="legalDetails" rows="3" placeholder="ИНН, ОГРН, адрес">${escapeHtml(content.footer.legalDetails || "")}</textarea></label>
        <label class="wide">О проекте внизу<textarea name="about" rows="3">${escapeHtml(content.footer.about || "")}</textarea></label>
        <label class="wide">Создатели, команда, благодарности<textarea name="creators" rows="3" placeholder="Создатели: ...">${escapeHtml(content.footer.creators || "")}</textarea></label>
        <label>Копирайт<input name="copyright" value="${escapeHtml(content.footer.copyright || "")}" placeholder="© 2026 ..."></label>
        <label class="wide">Дополнительные строки<textarea name="extraLines" rows="4" placeholder="Каждая строка — отдельный абзац">${escapeHtml((content.footer.extraLines || []).join("\n"))}</textarea></label>
        <label class="wide">Ссылки (каждая с новой строки: Название|адрес)<textarea name="links" rows="5" placeholder="Почта|mailto:hr@example.com">${escapeHtml(formatFooterLinks(content.footer.links || []))}</textarea></label>
        <label class="wide footer-checkbox">
          <input type="checkbox" name="showAdminLink" ${content.footer.showAdminLink !== false ? "checked" : ""}>
          Показывать ссылку «Админка»
        </label>
        <button class="button button-primary wide" type="submit">Сохранить подвал</button>
      </form>
    </section>

    <section class="admin-grid" id="content">
      <form class="admin-panel" data-settings-form>
        <h2>Настройки</h2>
        <label>Название сайта<input name="siteTitle" value="${escapeHtml(content.settings.siteTitle)}"></label>
        <label>URL фоновой картинки<input name="heroImage" value="${escapeHtml(content.settings.heroImage)}" placeholder="assets/hero-stage.svg"></label>
        <label>Почта для заявок<input name="hrEmail" type="email" value="${escapeHtml(content.settings.hrEmail)}" placeholder="hr@example.com" required></label>
        <p class="admin-hint wide">На этот адрес уходят анкеты при отправке «только на почту» и при серверной отправке.</p>
        <label>Новый пароль<input name="adminPassword" type="password" placeholder="Оставьте пустым, если не меняете" autocomplete="new-password"></label>
        <p class="admin-hint wide">Пароль хранится в зашифрованном виде.</p>
        <label>Заметка о доставке<input name="deliveryTarget" value="${escapeHtml(content.settings.deliveryTarget)}" placeholder="Bitrix24 / Telegram"></label>
        <button class="button button-primary" type="submit">Сохранить</button>
        <p class="form-note wide" data-settings-status role="status" aria-live="polite"></p>
      </form>
      <form class="admin-panel wide" data-role-form>
        <h2>Менеджер ролей</h2>
        <label>Название<input name="title" required></label>
        <label>Статус<select name="status"><option value="active">Активна</option><option value="closed">Закрыта</option></select></label>
        <label class="wide">Краткое описание<textarea name="summary" rows="3" required></textarea></label>
        <label>Теги через запятую<input name="tags" placeholder="Сцена, Прослушивание, Творчество"></label>
        <label>Что поможет через точку с запятой<textarea name="requirements" rows="4"></textarea></label>
        <label>Что предстоит через точку с запятой<textarea name="duties" rows="4"></textarea></label>
        <button class="button button-primary wide" type="submit">Добавить роль</button>
      </form>
    </section>
  `;

  bindAdminHandlers(root, content);
}

function renderApplications(content, filter) {
  const applications = filter === "Все"
    ? content.applications
    : content.applications.filter((item) => item.status === filter);

  if (!applications.length) {
    return `<p class="empty-state">Пока нет анкет в этом статусе.</p>`;
  }

  return applications.map((item) => `
    <article class="application-row">
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p>${escapeHtml(item.position)} · ${escapeHtml(item.createdAt)}</p>
        <p>${escapeHtml(item.email || "email не указан")} · ${escapeHtml(item.phone || "телефон не указан")}</p>
        <details>
          <summary>Рассказ участника</summary>
          <p>${escapeHtml(item.story)}</p>
          ${item.portfolio ? `<a href="${escapeHtml(item.portfolio)}" target="_blank" rel="noreferrer">Портфолио</a>` : ""}
        </details>
      </div>
      <select data-application-status="${escapeHtml(item.id)}">
        ${["Новая", "В обработке", "Принят", "Отказ"].map((status) => `<option ${status === item.status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
    </article>
  `).join("");
}

function renderTask(task, index) {
  return `
    <article class="task-row">
      <div>
        <strong>${escapeHtml(task.title)}</strong>
        <p>${escapeHtml(task.owner || "Без ответственного")} · ${escapeHtml(task.due || "Без срока")}</p>
      </div>
      <select data-task-status="${index}">
        ${["Новая", "В обработке", "Готово"].map((status) => `<option ${status === task.status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
    </article>
  `;
}

function renderAboutCardEditor(card, index) {
  return `
    <article class="editable-item">
      <form data-about-card-edit="${index}">
        <label>Название<input name="title" value="${escapeHtml(card.title)}"></label>
        <label class="wide">Текст<textarea name="text" rows="3">${escapeHtml(card.text)}</textarea></label>
        <div class="admin-actions wide">
          <button class="button button-primary" type="submit">Сохранить</button>
          <button class="button button-danger" type="button" data-about-card-delete="${index}">Удалить</button>
        </div>
      </form>
    </article>
  `;
}

function renderAboutLinkEditor(link, index) {
  return `
    <article class="editable-item">
      <form data-about-link-edit="${index}">
        <label>Название<input name="title" value="${escapeHtml(link.title)}"></label>
        <label class="wide">Ссылка<input name="href" value="${escapeHtml(link.href)}"></label>
        <label class="wide">Подпись<input name="text" value="${escapeHtml(link.text || "")}"></label>
        <div class="admin-actions wide">
          <button class="button button-primary" type="submit">Сохранить</button>
          <button class="button button-danger" type="button" data-about-link-delete="${index}">Удалить</button>
        </div>
      </form>
    </article>
  `;
}

function renderAnnouncementEditor(item, index) {
  const imageUrlValue = item.image && !String(item.image).startsWith("data:") ? item.image : "";
  const preview = item.image
    ? `<img class="admin-image-preview wide" src="${announcementImageSrc(item.image)}" alt="">`
    : "";

  return `
    <article class="editable-item">
      <form data-announcement-edit="${index}">
        <label>Заголовок<input name="title" value="${escapeHtml(item.title)}"></label>
        <label>Дата<input name="date" value="${escapeHtml(item.date || "")}"></label>
        <label class="wide">Текст<textarea name="text" rows="3">${escapeHtml(item.text)}</textarea></label>
        ${preview}
        <label class="wide">Новая картинка с компьютера<input type="file" name="imageFile" accept="image/*"></label>
        <label>или путь на сайте<input name="imageUrl" value="${escapeHtml(imageUrlValue)}" placeholder="assets/news-1.svg"></label>
        <div class="admin-actions wide">
          <button class="button button-primary" type="submit">Сохранить</button>
          <button class="button button-danger" type="button" data-announcement-delete="${index}">Удалить</button>
        </div>
      </form>
    </article>
  `;
}

function bindAdminHandlers(root, content) {
  root.querySelector("[data-admin-logout]")?.addEventListener("click", () => {
    KoraliVault.lock();
    renderAdmin();
  });

  root.querySelector("[data-application-filter]").addEventListener("change", (event) => {
    root.dataset.filter = event.currentTarget.value;
    renderAdminPanels(root);
  });

  root.querySelectorAll("[data-application-status]").forEach((select) => {
    select.addEventListener("change", () => {
      void (async () => {
        const application = content.applications.find((item) => item.id === select.dataset.applicationStatus);
        if (application) application.status = select.value;
        await saveContent(content);
        renderAdmin();
      })();
    });
  });

  root.querySelector("[data-task-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      content.tasks.unshift({ ...data, status: "Новая" });
      await saveContent(content);
      renderAdmin();
    })();
  });

  root.querySelectorAll("[data-task-status]").forEach((select) => {
    select.addEventListener("change", () => {
      void (async () => {
        content.tasks[Number(select.dataset.taskStatus)].status = select.value;
        await saveContent(content);
        renderAdmin();
      })();
    });
  });

  root.querySelector("[data-about-heading-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      content.about.eyebrow = data.eyebrow;
      content.about.title = data.title;
      content.about.linksLabel = data.linksLabel || "Мы в сети";
      await saveContent(content);
      renderAdmin();
    })();
  });

  root.querySelector("[data-about-card-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      content.about.cards.push({ title: data.title, text: data.text });
      await saveContent(content);
      renderAdmin();
    })();
  });

  root.querySelectorAll("[data-about-card-edit]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void (async () => {
        const index = Number(form.dataset.aboutCardEdit);
        content.about.cards[index] = Object.fromEntries(new FormData(form).entries());
        await saveContent(content);
        renderAdmin();
      })();
    });
  });

  root.querySelectorAll("[data-about-card-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      void (async () => {
        content.about.cards.splice(Number(button.dataset.aboutCardDelete), 1);
        await saveContent(content);
        renderAdmin();
      })();
    });
  });

  root.querySelector("[data-about-link-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      content.about.links.push({ title: data.title, href: data.href, text: data.text || "" });
      await saveContent(content);
      renderAdmin();
    })();
  });

  root.querySelectorAll("[data-about-link-edit]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void (async () => {
        const index = Number(form.dataset.aboutLinkEdit);
        content.about.links[index] = Object.fromEntries(new FormData(form).entries());
        await saveContent(content);
        renderAdmin();
      })();
    });
  });

  root.querySelectorAll("[data-about-link-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      void (async () => {
        content.about.links.splice(Number(button.dataset.aboutLinkDelete), 1);
        await saveContent(content);
        renderAdmin();
      })();
    });
  });

  root.querySelector("[data-footer-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      content.footer = {
        brandTitle: data.brandTitle || "",
        legalName: data.legalName || "",
        legalDetails: data.legalDetails || "",
        about: data.about || "",
        creators: data.creators || "",
        copyright: data.copyright || "",
        extraLines: parseFooterLines(data.extraLines),
        links: parseFooterLinks(data.links),
        showAdminLink: Boolean(data.showAdminLink)
      };
      await saveContent(content);
      renderAdmin();
    })();
  });

  root.querySelector("[data-settings-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = root.querySelector("[data-settings-status]");
    void (async () => {
      try {
        const data = Object.fromEntries(new FormData(form).entries());
        const newPassword = String(data.adminPassword || "").trim();
        delete data.adminPassword;
        content.settings = { ...content.settings, ...data };

        if (newPassword) {
          await saveContent(content, { newPassword });
          KoraliVault.lock();
          renderAdmin();
          const loginStatus = document.querySelector("[data-admin-login-status]");
          if (loginStatus) {
            loginStatus.textContent = "Пароль изменён. Войдите с новым паролем.";
            loginStatus.className = "form-note success";
          }
          return;
        }

        await saveContent(content);
        if (status) {
          status.textContent = "Настройки сохранены.";
          status.className = "form-note success wide";
        }
        form.querySelector('[name="adminPassword"]').value = "";
        renderAdmin();
      } catch (error) {
        if (status) {
          status.textContent = error.message || "Не удалось сохранить.";
          status.className = "form-note error wide";
        }
      }
    })();
  });

  root.querySelector("[data-main-copy-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      Object.assign(content.settings, data);
      await saveContent(content);
      renderAdmin();
    })();
  });

  root.querySelector("[data-timeline-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      content.timeline.eyebrow = data.timelineEyebrow;
      content.timeline.title = data.timelineTitle;
      content.timeline.steps = content.timeline.steps.map((step, index) => ({
        title: data[`stepTitle${index}`] || step.title,
        text: data[`stepText${index}`] || step.text
      }));
      await saveContent(content);
      renderAdmin();
    })();
  });

  root.querySelector("[data-announcement-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    void (async () => {
      try {
        const data = Object.fromEntries(new FormData(form).entries());
        const image = await resolveAnnouncementImage(form);
        content.announcements.unshift({
          title: data.title,
          text: data.text,
          image,
          date: new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
        });
        await saveContent(content);
        renderAdmin();
      } catch (error) {
        alert(error.message || "Не удалось добавить картинку.");
      }
    })();
  });

  root.querySelectorAll("[data-announcement-edit]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void (async () => {
        try {
          const index = Number(form.dataset.announcementEdit);
          const current = content.announcements[index];
          const data = Object.fromEntries(new FormData(form).entries());
          const image = await resolveAnnouncementImage(form, current.image);
          content.announcements[index] = {
            title: data.title,
            date: data.date,
            text: data.text,
            image
          };
          await saveContent(content);
          renderAdmin();
        } catch (error) {
          alert(error.message || "Не удалось сохранить картинку.");
        }
      })();
    });
  });

  root.querySelectorAll("[data-announcement-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      void (async () => {
        content.announcements.splice(Number(button.dataset.announcementDelete), 1);
        await saveContent(content);
        renderAdmin();
      })();
    });
  });

  root.querySelector("[data-role-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    void (async () => {
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      content.roles.unshift({
        title: data.title,
        status: data.status,
        summary: data.summary,
        tags: splitList(data.tags),
        requirements: splitList(data.requirements, ";"),
        duties: splitList(data.duties, ";")
      });
      await saveContent(content);
      renderAdmin();
    })();
  });
}

function splitList(value = "", separator = ",") {
  return value.split(separator).map((item) => item.trim()).filter(Boolean);
}

void KoraliVault.migrateLegacy();

bindHeaderBlur();

if (document.querySelector("[data-admin]")) {
  renderAdmin();
} else {
  renderPublicSite();
}
