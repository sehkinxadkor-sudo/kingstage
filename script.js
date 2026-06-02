    <script>
        // Конфигурация сохранения единого файла контента
        const CONFIG = {
            saveUrl: '/api/save',
            file: 'api/content.json' // Сохраняем всё в один зашифрованный или публичный файл
        };

        // Перехватываем встроенную в твой script.js функцию сохранения
        // Теперь каждый раз, когда ты нажимаешь "Добавить", "Принять" или "Удалить",
        // данные будут улетать на GitHub!
        const originalSaveContent = window.saveContent;
        window.saveContent = async function(content) {
            // Сначала сохраняем локально, как и раньше
            if (typeof originalSaveContent === 'function') {
                await originalSaveContent(content);
            }
            
            // Затем дублируем это на GitHub через Vercel
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
                console.log('Синхронизация с GitHub успешна!');
            } catch (err) {
                console.error('Не удалось отправить бэкап на GitHub:', err);
            }
        };

        // Автоматическая подгрузка данных с GitHub при старте админки
        async function syncFromGitHub() {
            try {
                const res = await fetch(`https://raw.githubusercontent.com/sehkinxadkor-sudo/kingstage/main/${CONFIG.file}?t=${Date.now()}`);
                if (res.ok) {
                    const cloudContent = await res.json();
                    
                    // Переносим данные из GitHub в твой KoraliVault
                    localStorage.setItem('korali-published-v1', JSON.stringify(cloudContent.published || cloudContent));
                    if (cloudContent.vault) {
                        localStorage.setItem('korali-vault-v1', JSON.stringify(cloudContent.vault));
                    }
                    
                    // Перезапускаем отрисовку твоей админки, чтобы показать новые карточки
                    if (typeof renderAdmin === 'function') {
                        renderAdmin();
                    }
                }
            } catch (e) {
                console.log('Файл на GitHub ещё не создан, работаем с локальными данными.');
            }
        }

        // Запускаем синхронизацию сразу при загрузке страницы
        window.addEventListener('DOMContentLoaded', syncFromGitHub);
    </script>
