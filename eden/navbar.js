// eden/navbar.js
function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="navbar-inner" style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 15px 20px;">
            <a href="invent_index.html" class="brand" style="text-decoration: none; font-weight: 900; color: var(--text); letter-spacing: 1px;">PANDUAN TEKNIS - Regional 2026</a>
            
            <button id="themeBtn" style="background: var(--card); border: 1px solid var(--line); color: var(--text); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s;">
                <i class="fas fa-moon" id="themeIcon"></i>
            </button>
        </div>
    </nav>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        setupThemeLogic();
    }
}

function setupThemeLogic() {
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light');
        themeIcon.className = 'fas fa-sun';
    }

    themeBtn.onclick = function() {
        body.classList.toggle('light');
        const isLight = body.classList.contains('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    };
}

loadNavbar();
