import nodemailer from "nodemailer";

const requiredEnv = ["HR_EMAIL", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "SMTP_FROM"];

function assertEnv() {
  const missing = requiredEnv.filter((name) => !process.env[name]);
  if (missing.length) {
    throw new Error(`Missing env variables: ${missing.join(", ")}`);
  }
}

function buildHtml(data) {
  return `
    <div style="font-family:Arial,sans-serif;color:#2e211b;line-height:1.55">
      <h1 style="color:#a4482d;margin:0 0 16px">Новая анкета участника "Корали Сцены"</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px">
        <tr><td><b>Имя</b></td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td><b>Email</b></td><td>${escapeHtml(data.email || "Не указан")}</td></tr>
        <tr><td><b>Телефон</b></td><td>${escapeHtml(data.phone || "Не указан")}</td></tr>
        <tr><td><b>Роль</b></td><td>${escapeHtml(data.position)}</td></tr>
        <tr><td><b>Портфолио</b></td><td>${escapeHtml(data.portfolio || "Не указано")}</td></tr>
      </table>
      <h2 style="margin-top:24px;color:#6d432e">Расскажи о себе</h2>
      <p>${escapeHtml(data.story || data.about || "").replaceAll("\n", "<br>")}</p>
    </div>
  `;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function parseRequestBody(request) {
  const contentType = request.headers?.["content-type"] || request.headers?.get?.("content-type") || "";

  if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
    const formData = await request.formData?.();
    if (formData) {
      const data = {};
      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") {
          data[key] = value;
        } else if (value?.name) {
          data.resumeName = value.name;
        }
      }
      return data;
    }
  }

  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }

  return request.body || {};
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    assertEnv();
    const data = await parseRequestBody(request);
    const recipient = String(data.hrEmail || process.env.HR_EMAIL || "").trim();
    if (!recipient) {
      throw new Error("Missing recipient email");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: recipient,
      replyTo: data.email || process.env.SMTP_FROM,
      subject: `Анкета участника: ${data.position}`,
      html: buildHtml(data)
    });

    if (data.deliveryMode !== "email" && process.env.BITRIX24_WEBHOOK_URL) {
      await fetch(`${process.env.BITRIX24_WEBHOOK_URL}/crm.lead.add.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: `Анкета участника: ${data.position}`,
            NAME: data.name,
            EMAIL: data.email ? [{ VALUE: data.email, VALUE_TYPE: "WORK" }] : [],
            PHONE: data.phone ? [{ VALUE: data.phone, VALUE_TYPE: "WORK" }] : [],
            COMMENTS: `Портфолио: ${data.portfolio || "Не указано"}\n\n${data.story || data.about || ""}`
          }
        })
      });
    }

    if (data.deliveryMode !== "email" && process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          parse_mode: "HTML",
          text: [
            "<b>Новая анкета участника</b>",
            `Имя: ${escapeHtml(data.name)}`,
            `Email: ${escapeHtml(data.email || "Не указан")}`,
            `Телефон: ${escapeHtml(data.phone || "Не указан")}`,
            `Роль: ${escapeHtml(data.position)}`,
            `Портфолио: ${escapeHtml(data.portfolio || "Не указано")}`,
            "",
            escapeHtml(data.story || data.about || "")
          ].join("\n")
        })
      });
    }

    response.status(200).json({ ok: true });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
