    <script>
        const CONFIG = {
            saveUrl: '/api/save',
            file: 'api/content.json'
        };

        // Функция отправки текущего состояния localStorage на GitHub
        async function backupToGitHub() {
            try {
                // Твоя админка хранит всё в этих двух ключах
                const data = {
                    published: JSON.parse(localStorage.getItem('korali-published-v1') || '{}'),
                    vault: JSON.parse(localStorage.getItem('korali-vault-v1') || '{}')
                };

                await fetch(CONFIG.saveUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        filename: CONFIG.file,
                        content: JSON.stringify(data, null, 2),
                        commitMessage: 'Синхронизация данных админ-панели'
                    })
                });
                console.log('Данные успешно скопированы на GitHub!');
            } catch (err) {
                console.error('Ошибка бэкапа:', err);
            }
        }

        // Автоматически скачиваем данные с GitHub при входе, если они там есть
        async function loadFromGitHub() {
            try {
                const res = await fetch(`https://raw.githubusercontent.com/sehkinxadkor-sudo/kingstage/main/${CONFIG.file}?t=${Date.now()}`);
                if (res.ok) {
                    const cloud = await res.json();
                    if (cloud.published) localStorage.setItem('korali-published-v1', JSON.stringify(cloud.published));
                    if (cloud.vault) localStorage.setItem('korali-vault-v1', JSON.stringify(cloud.vault));
                    
                    // Перерисовываем интерфейс твоей админки
                    if (typeof renderAdmin === 'function') renderAdmin();
                }
            } catch (e) {
                console.log('Облачный файл еще не создан.');
            }
        }

        // Следим за любыми кликами в админке (формы, удаления, одобрения)
        window.addEventListener('DOMContentLoaded', () => {
            // При загрузке страницы — забираем данные из репозитория
            loadFromGitHub();

            // При любом сохранении или удалении (когда срабатывает submit или клик по кнопке действия)
            // ждем полсекунды, пока script.js обновит localStorage, и отправляем на сервер
            document.addEventListener('submit', () => setTimeout(backupToGitHub, 500));
            
            document.addEventListener('click', (e) => {
                if (e.target.closest('button') || e.target.hasAttribute('data-announcement-delete') || e.target.closest('[data-announcement-delete]')) {
                    setTimeout(backupToGitHub, 500);
                }
            });
        });
    </script>
