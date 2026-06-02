    <script>
        const CONFIG = {
            saveUrl: '/api/save',
            file: 'api/content.json'
        };

        // Функция синхронизации данных С GitHub в localStorage
        async function syncFromGitHub() {
            try {
                const res = await fetch(`https://raw.githubusercontent.com/sehkinxadkor-sudo/kingstage/main/${CONFIG.file}?t=${Date.now()}`);
                if (res.ok) {
                    const cloudContent = await res.json();
                    
                    // Записываем скачанные данные в хранилище браузера
                    if (cloudContent.published) {
                        localStorage.setItem('korali-published-v1', JSON.stringify(cloudContent.published));
                    } else {
                        localStorage.setItem('korali-published-v1', JSON.stringify(cloudContent));
                    }
                    
                    if (cloudContent.vault) {
                        localStorage.setItem('korali-vault-v1', JSON.stringify(cloudContent.vault));
                    }

                    // Перерисовываем админку, чтобы карточки сразу появились на экране
                    if (typeof renderAdmin === 'function') {
                        renderAdmin();
                    }
                }
            } catch (e) {
                console.log('Файл на GitHub еще не создан, используем локальные данные.');
            }
        }

        // Функция отправки обновлений НА GitHub
        async function pushToGitHub(content) {
            try {
                await fetch(CONFIG.saveUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        filename: CONFIG.file,
                        content: JSON.stringify(content, null, 2),
                        commitMessage: 'Обновление контента через админ-панель'
                    })
                });
                console.log('GitHub синхронизирован успешно!');
            } catch (err) {
                console.error('Ошибка отправки на GitHub:', err);
            }
        }

        // Ждем, пока пользователь введет пароль и разблокирует систему
        const originalUnlock = KoraliVault.unlock;
        KoraliVault.unlock = async function(password) {
            const success = await originalUnlock(password);
            
            if (success) {
                console.log('Доступ открыт! Начинаем синхронизацию с GitHub...');
                
                // 1. Сначала скачиваем актуальный контент из облака
                await syncFromGitHub();
                
                // 2. Подменяем функцию сохранения, чтобы новые изменения улетали на сервер
                if (typeof window.saveContent === 'function') {
                    const originalSaveContent = window.saveContent;
                    window.saveContent = async function(content) {
                        await originalSaveContent(content); // Сохраняем локально
                        await pushToGitHub(content);       // Отправляем на GitHub
                    };
                }
            }
            return success;
        };
    </script>
