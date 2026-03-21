function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="navbar-inner">
            <a href="invent_index.html" class="brand">PANDUAN TEKNIS - Regional 2026</a>
            <button class="theme-toggle" id="themeBtn">🌙 Dark</button>
        </div>
    </nav>
    <div class="header-content" style="margin-top: 30px; padding: 0 20px; max-width: 1200px; margin-left: auto; margin-right: auto;">
        <h1 style="font-size: 42px; font-weight: 900; margin: 0; line-height: 1;">PANDUAN TEKNIS</h1>
        <p style="opacity: 0.6; margin-top: 10px; margin-bottom: 30px;">Daftar perlengkapan teknis regional.</p>
    </div>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        // Inisialisasi ulang tombol tema
        const btn = document.getElementById('themeBtn');
        if (btn && typeof setupThemeToggle === 'function') { setupThemeToggle(); }
    }
}
document.addEventListener('DOMContentLoaded', loadNavbar);
