// eden/navbar.js

function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="navbar-inner">
            <a href="invent_index.html" class="brand">PANDUAN TEKNIS - Regional 2026</a>
            <div style="display: flex; align-items: center; gap: 20px;">
                <ul class="nav-links" style="display: flex; gap: 15px; list-style: none; margin: 0; padding: 0;">
                    <li><a href="invent_index.html" style="text-decoration:none; color:var(--text); font-weight:700; font-size:13px;">HOME</a></li>
                </ul>
                <button class="theme-toggle" id="themeBtn">🌙 Dark</button>
            </div>
        </div>
    </nav>
    <div class="container" style="margin-top: 30px; padding: 0 20px;">
        <h1 style="font-size: 42px; font-weight: 900; margin: 0; line-height: 1;">PANDUAN TEKNIS</h1>
        <p style="opacity: 0.6; margin-top: 10px; margin-bottom: 30px;">Audio • Video • Podium • IT</p>
    </div>
    `;

    // Masukkan ke dalam elemen dengan ID 'navbar-placeholder'
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        
        // Inisialisasi ulang tombol tema setelah navbar dimuat
        if (typeof initTheme === 'function') {
            initTheme(); 
        }
    }
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadNavbar);
