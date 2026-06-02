import { Octokit } from "@octokit/rest";

export default async function handler(req, res) {
  // Разрешаем запросы со всех доменов (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { filename, content, commitMessage } = req.body;

  if (!filename || !content) {
    return res.status(400).json({ error: 'Missing filename or content' });
  }

  // Проверяем, что токен на месте
  if (!process.env.GITHUB_TOKEN) {
    return res.status(500).json({ error: 'GitHub token is not configured in Vercel' });
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  
  // Данные твоего репозитория
  const owner = 'sehkinxadkor-sudo';
  const repo = 'kingstage';
  const branch = 'main';

  try {
    let sha;
    
    // Пытаемся узнать, существует ли уже такой файл, чтобы получить его SHA
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: filename,
        ref: branch
      });
      sha = data.sha;
    } catch (e) {
      // Если файл новый, SHA не нужен, просто идем дальше
    }

    // Записываем или обновляем файл в репозитории
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filename,
      message: commitMessage || `Update ${filename} via Admin Panel`,
      content: Buffer.from(content).toString('base64'),
      sha,
      branch
    });

    return res.status(200).json({ success: true, message: `File ${filename} saved successfully!` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to save file to GitHub', details: error.message });
  }
}
