const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');

themeToggle?.addEventListener('click', () => {
    const isDark = root.dataset.theme === 'dark';
    if (isDark) {
        delete root.dataset.theme;
    } else {
        root.dataset.theme = 'dark';
    }
    localStorage.setItem('forj-theme', isDark ? 'light' : 'dark');
    themeToggle.setAttribute('aria-label', isDark ? '切换到深色模式' : '切换到浅色模式');
});

const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();
