// eden/navbar.js
function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="navbar-inner" style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
            <a href="invent_index.html" class="brand" style="text-decoration: none; font-weight: 900; color: var(--text);">PANDUAN TEKNIS - Regional 2026</a>
            
            <button id="themeBtn" style="background: var(--card); border: 1px solid var(--line); color: var(--text); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s;">
                <i class="fas fa-moon" id="themeIcon"></i>
            </button>
        </div>
    </nav>
    <div class="header-content" style="padding: 30px 20px 0; max-width: 1200px; margin: 0 auto;">
        <h1 style="font-size: 42px; font-weight: 900; margin: 0; line-height: 1;">PANDUAN TEKNIS</h1>
        <p style="opacity: 0.6; margin-top: 10px; margin-bottom: 30px;">Daftar perlengkapan teknis regional.</p>
    </div>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        
        // JALANKAN LOGIKA TEMA LANGSUNG DI SINI
        setupThemeLogic();
    }
}

function setupThemeLogic() {
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // 1. Cek simpanan tema sebelumnya
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        body.classList.add('light');
        themeIcon.className = 'fas fa-sun'; // Jadi Matahari
    }

    // 2. Logika klik tombol
    themeBtn.onclick = function() {
        body.classList.toggle('light');
        
        if (body.classList.contains('light')) {
            localStorage.setItem('theme', 'light');
            themeIcon.className = 'fas fa-sun';
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.className = 'fas fa-moon';
        }
    };
}

// Jalankan loadNavbar
loadNavbar();
