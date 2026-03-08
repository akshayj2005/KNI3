// Common functionality for KNI Global Tours

document.addEventListener('DOMContentLoaded', () => {
    // Header scroll background
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 20, 25, 0.98)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(15, 20, 25, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Active nav link based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPath.includes(href) || (currentPath === '/' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });

    // Update seasonal label based on current month
    updateSeasonalLabel();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    
    const icon = document.getElementById('menu-icon');
    if (menu.classList.contains('hidden')) {
        icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
        icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
}

// Package detail modal
function showPackageDetail(packageId) {
    if (typeof packageDetails === 'undefined') return;
    
    const pkg = packageDetails[packageId];
    if (!pkg) return;
    
    const modal = document.getElementById('package-modal');
    if (!modal) return;
    
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div class="h-64 sm:h-80 relative overflow-hidden" style="background: ${pkg.gradient};">
            <img src="${pkg.image || ''}" alt="${pkg.title}" class="w-full h-full object-cover opacity-60">
            <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-8xl opacity-30">${pkg.destination === 'Japan' ? '🇯🇵' : '🇮🇳'}</span>
            </div>
            ${pkg.discount ? `<div class="absolute top-4 right-4"><span class="px-4 py-2 rounded-full font-bold shadow-lg" style="background: var(--color-primary); color: #0f1419;">${pkg.discount}</span></div>` : ''}
        </div>
        <div class="p-6 sm:p-10">
            <div class="flex flex-wrap items-center gap-4 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase" style="background: rgba(212, 165, 116, 0.2); color: var(--color-primary);">${pkg.destination}</span>
                <span class="text-sm opacity-60"><span class="mr-1">🕒</span>${pkg.duration}</span>
            </div>
            <h2 class="font-display text-3xl sm:text-4xl font-bold mb-4">${pkg.title}</h2>
            <p class="text-lg opacity-80 mb-8 leading-relaxed">${pkg.description}</p>
            
            <div class="flex items-baseline gap-4 mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div class="flex flex-col">
                    <span class="text-xs opacity-50 uppercase tracking-widest mb-1">Starting from</span>
                    <span class="text-4xl font-bold text-primary">${pkg.price}</span>
                </div>
                ${pkg.originalPrice ? `<div class="flex flex-col"><span class="text-xs opacity-50 uppercase tracking-widest mb-1">Original</span><span class="text-xl opacity-50 line-through">${pkg.originalPrice}</span></div>` : ''}
                <span class="opacity-50 text-sm">per person</span>
            </div>
            
            <div class="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                    <h3 class="font-display text-2xl font-semibold mb-6 pb-2 border-b border-white/10">Tour Highlights</h3>
                    <ul class="space-y-4">
                        ${pkg.highlights.map(h => `<li class="flex items-start gap-3"><span class="text-primary mt-1">✦</span><span class="opacity-80">${h}</span></li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3 class="font-display text-2xl font-semibold mb-6 pb-2 border-b border-white/10">What's Included</h3>
                    <ul class="space-y-4">
                        ${pkg.includes.map(i => `<li class="flex items-start gap-3"><span class="text-primary mt-1">✦</span><span class="opacity-80">${i}</span></li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                <a href="contact.html?package=${packageId}" class="flex-1 py-4 rounded-xl font-bold text-lg text-center transition-all hover:scale-105 active:scale-95 shadow-xl" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); color: #0f1419;">
                    Book This Journey
                </a>
                <button onclick="closePackageModal()" class="flex-1 py-4 rounded-xl font-bold text-lg border-2 transition-all hover:bg-white/5 active:scale-95" style="border-color: var(--color-primary); color: var(--color-primary);">
                    Explore More
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePackageModal() {
    const modal = document.getElementById('package-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Search functionality
function searchPackages() {
    const from = document.getElementById('search-from').value;
    const dest = document.getElementById('search-destination').value;
    const theme = document.getElementById('search-theme').value;
    const month = document.getElementById('search-month').value;
    const budget = document.getElementById('search-budget').value;
    
    const params = new URLSearchParams({
        from, dest, theme, month, budget
    });
    
    window.location.href = `packages.html?${params.toString()}`;
}

// Contact form handling
function handleContactSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    
    // Simulate loading
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending Inquiry...';
    btn.disabled = true;
    
    setTimeout(() => {
        form.classList.add('hidden');
        success.classList.remove('hidden');
        window.scrollTo({ top: success.offsetTop - 100, behavior: 'smooth' });
    }, 1500);
}

// Seasonal update
function updateSeasonalLabel() {
    const label = document.getElementById('current-season-label');
    if (!label) return;
    
    const month = new Date().getMonth();
    let season = 'Spring Specials';
    let icon = '🌸';
    
    if (month >= 2 && month <= 4) {
        season = 'Spring Specials';
        icon = '🌸';
    } else if (month >= 5 && month <= 7) {
        season = 'Summer Escapes';
        icon = '☀️';
    } else if (month >= 8 && month <= 10) {
        season = 'Autumn Adventures';
        icon = '🍁';
    } else {
        season = 'Winter Wonderland';
        icon = '❄️';
    }
    
    label.innerHTML = `${icon} <span>${season}</span>`;
}

// Package filtering on packages page
function filterPackages(destination) {
    const cards = document.querySelectorAll('.package-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-dark');
        btn.style.background = 'transparent';
        btn.style.color = 'var(--color-text)';
        btn.style.borderColor = 'rgba(212, 165, 116, 0.3)';
    });
    
    // Find clicked button or all button
    const activeBtn = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick').includes(`'${destination}'`)
    );
    
    if (activeBtn) {
        activeBtn.style.background = 'var(--color-primary)';
        activeBtn.style.color = '#0f1419';
        activeBtn.style.borderColor = 'var(--color-primary)';
    }
    
    cards.forEach(card => {
        if (destination === 'all' || card.dataset.destination === destination) {
            card.classList.remove('hidden');
            card.style.display = 'block';
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });
}
