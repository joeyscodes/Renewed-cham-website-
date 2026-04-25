// Cham - Premium Website
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() { window.scrollY > 50 ? nav.classList.add('nav-scrolled') : nav.classList.remove('nav-scrolled'); });

    const mobileBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) { mobileBtn.addEventListener('click', () => navLinks.classList.toggle('active')); }
    document.querySelectorAll('.nav-links a').forEach(link => { link.addEventListener('click', () => navLinks.classList.remove('active')); });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function(e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if(target) target.scrollIntoView({ behavior: 'smooth' }); }); });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => { if(link.getAttribute('href') === currentPage) link.classList.add('active'); });

    const form = document.querySelector('#reservation-form');
    if(form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn ? btn.textContent : 'Book';
            if(btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
            setTimeout(() => {
                const toast = document.createElement('div');
                toast.className = 'toast-message';
                toast.textContent = '✅ Reservation confirmed! We\'ll call you within 24 hours.';
                document.body.appendChild(toast);
                setTimeout(() => toast.classList.add('show'), 10);
                setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 4000);
                form.reset();
                if(btn) { btn.textContent = originalText; btn.disabled = false; }
            }, 800);
        });
    }
});
