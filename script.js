const toggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

// 1. Check for saved user preference
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    root.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggle.checked = true;
    }
} else {
    // Fallback to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        root.setAttribute('data-theme', 'dark');
        toggle.checked = true;
    }
}

// 2. Event Listener for manual toggle
toggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});