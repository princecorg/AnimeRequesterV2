export function setupThemeToggle() {
    const btn = document.getElementById('themeToggle');
    const icon = btn.querySelector('span');

    // Récupérer le thème depuis le sessionStorage au chargement
    const savedTheme = sessionStorage.getItem('theme') || 'light';
    applyTheme(savedTheme, icon);

    btn.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme, icon);

        // Stocker le choix du thème
        sessionStorage.setItem('theme', newTheme);
    });
}

function applyTheme(theme, icon) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        icon.className = 'fa-solid fa-sun';
    } else {
        document.body.classList.remove('dark-theme');
        icon.className = 'fa-solid fa-moon';
    }
}

