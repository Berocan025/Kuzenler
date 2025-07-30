/*
 * KUZENLER MT2 - Interactive Gaming Experience
 * Developed with Excellence by RIO CH
 * All Rights Reserved © 2024 RIO CH
 * Professional Metin2 Gaming JavaScript
 */

// RIO CH Developer Console Signature
console.log(`
🚀 KUZENLER MT2 - RIO CH GAMING MASTERPIECE 🚀
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓                                                ▓
▓        🎮 ULTIMATE METIN2 EXPERIENCE 🎮        ▓
▓                                                ▓
▓    Developer: RIO CH                           ▓
▓    Project: KUZENLER MT2                       ▓
▓    Year: 2024                                  ▓
▓    Status: PROTECTED & SECURED                 ▓
▓                                                ▓
▓    Features:                                   ▓
▓    ✅ Advanced Code Protection                 ▓
▓    ✅ Battle Animations                        ▓
▓    ✅ Interactive UI/UX                        ▓
▓    ✅ Mobile Responsive                        ▓
▓    ✅ Gaming Aesthetics                        ▓
▓                                                ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

🛡️ This code is protected by RIO CH Security Systems
⚡ Optimized for Maximum Gaming Performance
🎯 Crafted with Passion and Excellence
`);

// RIO CH Protection System Class
class RiochSecuritySystem {
    constructor() {
        this.protectionActive = true;
        this.riochSignature = "RIO CH - Gaming Excellence Since 2024";
        this.warningMessages = [
            "RIO CH YERMİ BU NUMARALARI :)",
            "🛡️ RIO CH koruması aktif! Kod incelemek yasak!",
            "🔒 Bu site RIO CH tarafından korunmaktadır!",
            "⚡ RIO CH'nin eseri dokunulmaz!",
            "🎮 Oyunun tadını çıkar, kodu karıştırma!",
            "🚀 RIO CH teknolojisi ile korunuyor!",
            "💻 Geliştirici araçlarını kapat ve oyna!"
        ];
        this.init();
    }

    init() {
        this.disableDevTools();
        this.preventInspection();
        this.blockShortcuts();
        this.addWatermarks();
        this.monitorConsole();
        this.setupEventListeners();
    }

    disableDevTools() {
        // RIO CH Anti-DevTools
        document.addEventListener('keydown', (e) => {
            // F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) ||
                (e.ctrlKey && e.key === 'u') ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                e.stopPropagation();
                this.showProtectionModal();
                return false;
            }
        });

        // RIO CH DevTools Size Detection
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > 200 || 
                window.outerWidth - window.innerWidth > 200) {
                this.showProtectionModal();
            }
        }, 1000);
    }

    preventInspection() {
        // RIO CH Right-click Protection
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showProtectionModal();
        });

        // RIO CH Selection Protection
        document.addEventListener('selectstart', (e) => {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        });

        // RIO CH Drag Protection
        document.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    }

    blockShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Block Ctrl+S, Ctrl+A, Ctrl+P, Ctrl+Shift+J
            if (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'p' ||
                (e.shiftKey && e.key === 'J'))) {
                e.preventDefault();
                this.showProtectionModal();
            }
        });
    }

    addWatermarks() {
        // RIO CH Floating Watermark
        const watermark = document.createElement('div');
        watermark.className = 'rioch-floating-watermark';
        watermark.innerHTML = '🔒 RIO CH Protected';
        watermark.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 9998;
            opacity: 0.7;
            pointer-events: none;
            font-family: 'Orbitron', monospace;
            animation: riochGlow 3s infinite;
        `;
        document.body.appendChild(watermark);
    }

    monitorConsole() {
        // RIO CH Console Protection
        const originalLog = console.log;
        console.log = (...args) => {
            originalLog.apply(console, [`🛡️ RIO CH: `, ...args]);
        };

        // Clear console periodically
        setInterval(() => {
            console.clear();
            console.log(this.riochSignature);
        }, 10000);
    }

    showProtectionModal() {
        const modal = document.getElementById('rioch-protection-modal');
        if (modal) {
            const randomMessage = this.warningMessages[Math.floor(Math.random() * this.warningMessages.length)];
            const modalBody = modal.querySelector('.rioch-modal-body p');
            if (modalBody) {
                modalBody.innerHTML = `<strong>${randomMessage}</strong>`;
            }
            modal.style.display = 'block';
        }
    }

    setupEventListeners() {
        window.riochCloseModal = () => {
            const modal = document.getElementById('rioch-protection-modal');
            if (modal) {
                modal.style.display = 'none';
            }
        };
    }
}

// RIO CH Loading System
class RiochLoadingSystem {
    constructor() {
        this.loadingScreen = null;
        this.progressBar = null;
        this.loadingText = null;
        this.init();
    }

    init() {
        this.createLoadingScreen();
        this.startLoading();
    }

    createLoadingScreen() {
        this.loadingScreen = document.getElementById('rioch-loading-screen');
        this.progressBar = document.querySelector('.rioch-loading-progress');
        this.loadingText = document.querySelector('.rioch-loading-text');
    }

    startLoading() {
        const loadingTexts = [
            "Ejderhalar Uyanıyor...",
            "RIO CH Sistemleri Yükleniyor...",
            "Savaş Arenası Hazırlanıyor...",
            "Yang Hazineleri Keşfediliyor...",
            "Lonca Savaşları Başlıyor...",
            "Metin Taşları Aktivleşiyor...",
            "KUZENLER MT2 Açılıyor..."
        ];

        let currentText = 0;
        let progress = 0;

        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                setTimeout(() => this.hideLoading(), 500);
            }

            this.progressBar.style.width = `${progress}%`;
            
            if (Math.random() > 0.7 && currentText < loadingTexts.length - 1) {
                currentText++;
                this.loadingText.textContent = loadingTexts[currentText];
            }
        }, 200);
    }

    hideLoading() {
        this.loadingScreen.style.opacity = '0';
        setTimeout(() => {
            this.loadingScreen.style.display = 'none';
            document.body.classList.add('rioch-loaded');
        }, 500);
    }
}

// RIO CH Animation Controller
class RiochAnimationController {
    constructor() {
        this.observers = [];
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParticleSystem();
        this.setupTypingEffect();
        this.setupCounterAnimations();
        this.setupBattleAnimations();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('rioch-fadeIn');
                    entry.target.style.opacity = '1';
                    
                    // Trigger counter animations
                    if (entry.target.classList.contains('rioch-server-stat')) {
                        this.animateCounter(entry.target.querySelector('.rioch-stat-number'));
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll(`
            .rioch-feature-card,
            .rioch-character-card,
            .rioch-server-card,
            .rioch-guild-card,
            .rioch-section-header,
            .rioch-server-stat
        `);

        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });

        this.observers.push(observer);
    }

    setupHoverEffects() {
        // RIO CH Enhanced Button Effects
        const buttons = document.querySelectorAll('.rioch-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-3px) scale(1.05)';
                this.createButtonParticles(btn);
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
            });

            btn.addEventListener('click', () => {
                this.createClickEffect(btn);
            });
        });

        // RIO CH Card Hover Effects
        const cards = document.querySelectorAll('.rioch-feature-card, .rioch-character-card, .rioch-server-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) rotateX(5deg)';
                this.addGlowEffect(card);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                this.removeGlowEffect(card);
            });
        });
    }

    setupParticleSystem() {
        // RIO CH Hero Particles
        const hero = document.querySelector('.rioch-hero');
        if (hero) {
            this.createFloatingParticles(hero, 30);
        }

        // RIO CH Section Particles
        const sections = document.querySelectorAll('.rioch-features, .rioch-characters');
        sections.forEach(section => {
            this.createFloatingParticles(section, 15);
        });
    }

    createFloatingParticles(container, count) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'rioch-floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${2 + Math.random() * 4}px;
                height: ${2 + Math.random() * 4}px;
                background: #ff6b35;
                border-radius: 50%;
                pointer-events: none;
                opacity: ${0.3 + Math.random() * 0.4};
                animation: riochParticleFloat ${3 + Math.random() * 4}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
                z-index: 1;
            `;
            container.appendChild(particle);
        }

        // Add particle animation styles
        if (!document.getElementById('rioch-particle-styles')) {
            const style = document.createElement('style');
            style.id = 'rioch-particle-styles';
            style.textContent = `
                @keyframes riochParticleFloat {
                    0% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(-50px) translateX(${-20 + Math.random() * 40}px) rotate(180deg);
                    }
                    100% {
                        transform: translateY(-100px) translateX(${-40 + Math.random() * 80}px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupTypingEffect() {
        const heroTitle = document.querySelector('.rioch-title-main');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            let index = 0;

            const typeWriter = () => {
                if (index < text.length) {
                    heroTitle.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 100);
                } else {
                    heroTitle.classList.add('rioch-glow-effect');
                }
            };

            setTimeout(typeWriter, 1500);
        }
    }

    setupCounterAnimations() {
        // Auto-animate numbers when visible
        const counters = document.querySelectorAll('[data-target]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            counter.textContent = '0';
            counter.setAttribute('data-current', '0');
        });
    }

    animateCounter(element) {
        if (!element || element.hasAttribute('data-animated')) return;
        
        const target = parseInt(element.getAttribute('data-target'));
        if (!target) return;

        element.setAttribute('data-animated', 'true');
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, stepTime);
    }

    setupBattleAnimations() {
        // RIO CH Battle Scene Animations
        const battleElements = document.querySelectorAll('.rioch-battle-scene *');
        battleElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });

        // Damage number animations
        this.animateDamageNumbers();
    }

    animateDamageNumbers() {
        const damageNumbers = document.querySelectorAll('.rioch-dmg, .rioch-heal, .rioch-miss, .rioch-block');
        damageNumbers.forEach((dmg, index) => {
            dmg.style.animationDelay = `${index * 0.5}s`;
            
            // Restart animation every 3 seconds
            setInterval(() => {
                dmg.style.animation = 'none';
                dmg.offsetHeight; // Trigger reflow
                dmg.style.animation = 'riochDamageFloat 2s infinite';
                dmg.style.animationDelay = `${index * 0.5}s`;
            }, 3000 + index * 500);
        });
    }

    createButtonParticles(button) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #ffd700;
                border-radius: 50%;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: riochButtonParticle 1s ease-out forwards;
                z-index: 1000;
            `;
            button.style.position = 'relative';
            button.appendChild(particle);

            setTimeout(() => particle.remove(), 1000);
        }

        // Add button particle animation
        if (!document.getElementById('rioch-button-particle-styles')) {
            const style = document.createElement('style');
            style.id = 'rioch-button-particle-styles';
            style.textContent = `
                @keyframes riochButtonParticle {
                    0% {
                        transform: scale(0) translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1) translateY(-20px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    createClickEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            width: 100px;
            height: 100px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: riochRipple 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

        // Add ripple animation
        if (!document.getElementById('rioch-ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'rioch-ripple-styles';
            style.textContent = `
                @keyframes riochRipple {
                    to {
                        transform: translate(-50%, -50%) scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    addGlowEffect(element) {
        element.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.6)';
    }

    removeGlowEffect(element) {
        element.style.boxShadow = '';
    }
}

// RIO CH Navigation Controller
class RiochNavigationController {
    constructor() {
        this.navbar = null;
        this.hamburger = null;
        this.navMenu = null;
        this.init();
    }

    init() {
        this.navbar = document.querySelector('.rioch-navbar');
        this.hamburger = document.querySelector('.rioch-hamburger');
        this.navMenu = document.querySelector('.rioch-nav-menu');
        
        this.setupSmoothScroll();
        this.setupMobileNavigation();
        this.setupScrollBehavior();
    }

    setupSmoothScroll() {
        const navLinks = document.querySelectorAll('.rioch-nav-menu a[href^="#"]');
        const scrollIndicator = document.querySelector('.rioch-scroll-indicator');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                this.scrollToSection(targetId);
            });
        });

        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                this.scrollToSection('features');
            });
        }
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (this.navMenu.classList.contains('rioch-mobile-active')) {
                this.toggleMobileMenu();
            }
        }
    }

    setupMobileNavigation() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
    }

    toggleMobileMenu() {
        const spans = this.hamburger.querySelectorAll('span');
        
        if (this.navMenu.classList.contains('rioch-mobile-active')) {
            // Close menu
            this.navMenu.classList.remove('rioch-mobile-active');
            this.navMenu.style.display = 'none';
            
            // Reset hamburger
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        } else {
            // Open menu
            this.navMenu.classList.add('rioch-mobile-active');
            this.navMenu.style.cssText = `
                display: flex !important;
                position: fixed;
                top: 70px;
                left: 0;
                width: 100%;
                height: calc(100vh - 70px);
                background: rgba(15, 20, 25, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                z-index: 999;
                animation: riochSlideUp 0.3s ease-out;
            `;
            
            // Animate hamburger
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        }
    }

    setupScrollBehavior() {
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Navbar hide/show on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            // Add background blur when scrolled
            if (currentScrollY > 50) {
                this.navbar.style.background = 'rgba(15, 20, 25, 0.98)';
            } else {
                this.navbar.style.background = 'rgba(15, 20, 25, 0.95)';
            }
            
            lastScrollY = currentScrollY;
        });
    }
}

// RIO CH Interactive Elements
class RiochInteractiveElements {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonInteractions();
        this.setupFormValidation();
        this.setupTooltips();
        this.setupModalSystem();
    }

    setupButtonInteractions() {
        // Download button
        const downloadBtns = document.querySelectorAll('.rioch-btn-download, .rioch-btn-mega');
        downloadBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.showDownloadMessage();
            });
        });

        // Discord button
        const discordBtns = document.querySelectorAll('.rioch-btn-discord, .rioch-social-discord');
        discordBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.openDiscord();
            });
        });

        // YouTube/Trailer button
        const youtubeBtns = document.querySelectorAll('.rioch-btn-trailer, .rioch-social-youtube');
        youtubeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.openYouTube();
            });
        });
    }

    showDownloadMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #2ecc71, #27ae60);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            font-family: 'Orbitron', monospace;
            font-weight: 600;
            z-index: 10001;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            animation: riochSlideUp 0.3s ease-out;
        `;
        message.innerHTML = `
            <h3>🎮 KUZENLER MT2 İndirme</h3>
            <p>Oyun dosyaları hazırlanıyor...</p>
            <p><small>RIO CH tarafından geliştirildi</small></p>
        `;
        document.body.appendChild(message);

        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    openDiscord() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #7289da, #5865f2);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            font-family: 'Orbitron', monospace;
            font-weight: 600;
            z-index: 10001;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            animation: riochSlideUp 0.3s ease-out;
        `;
        message.innerHTML = `
            <h3>📢 KUZENLER MT2 Discord</h3>
            <p>Discord sunucumuz yakında aktif olacak!</p>
            <p><small>RIO CH Community</small></p>
        `;
        document.body.appendChild(message);

        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    openYouTube() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff0000, #cc0000);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            font-family: 'Orbitron', monospace;
            font-weight: 600;
            z-index: 10001;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            animation: riochSlideUp 0.3s ease-out;
        `;
        message.innerHTML = `
            <h3>🎬 KUZENLER MT2 Trailer</h3>
            <p>Oyun videoları çok yakında!</p>
            <p><small>RIO CH Productions</small></p>
        `;
        document.body.appendChild(message);

        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    setupFormValidation() {
        // Future form implementations
    }

    setupTooltips() {
        // Add tooltips to interactive elements
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            this.addTooltip(element);
        });
    }

    addTooltip(element) {
        const tooltipText = element.getAttribute('data-tooltip');
        
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'rioch-tooltip';
            tooltip.textContent = tooltipText;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.8rem;
                z-index: 10000;
                pointer-events: none;
                white-space: nowrap;
            `;
            document.body.appendChild(tooltip);
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });

        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.rioch-tooltip');
            if (tooltip) tooltip.remove();
        });
    }

    setupModalSystem() {
        // Modal system is handled by protection system
    }
}

// RIO CH Performance Monitor
class RiochPerformanceMonitor {
    constructor() {
        this.metrics = {
            loadTime: 0,
            renderTime: 0,
            memoryUsage: 0
        };
        this.init();
    }

    init() {
        this.measureLoadTime();
        this.monitorPerformance();
        this.optimizeAnimations();
    }

    measureLoadTime() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            this.metrics.loadTime = loadTime;
            console.log(`🚀 RIO CH Performance: ${Math.round(loadTime)}ms load time`);
        });
    }

    monitorPerformance() {
        // Monitor FPS and performance
        let frames = 0;
        let lastTime = performance.now();

        const countFPS = () => {
            frames++;
            const currentTime = performance.now();
            
            if (currentTime >= lastTime + 1000) {
                const fps = Math.round((frames * 1000) / (currentTime - lastTime));
                console.log(`⚡ RIO CH FPS: ${fps}`);
                frames = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(countFPS);
        };

        requestAnimationFrame(countFPS);
    }

    optimizeAnimations() {
        // Reduce animations on low-performance devices
        if (navigator.hardwareConcurrency < 4) {
            document.body.classList.add('rioch-low-performance');
            console.log('🔧 RIO CH: Optimizing for low-performance device');
        }
    }
}

// RIO CH System Initialization
class RiochGameSystem {
    constructor() {
        this.systems = {};
        this.initialized = false;
        this.init();
    }

    init() {
        console.log('🎯 RIO CH: Initializing Gaming Systems...');
        
        // Initialize all systems
        this.systems.security = new RiochSecuritySystem();
        this.systems.loading = new RiochLoadingSystem();
        this.systems.animation = new RiochAnimationController();
        this.systems.navigation = new RiochNavigationController();
        this.systems.interactive = new RiochInteractiveElements();
        this.systems.performance = new RiochPerformanceMonitor();
        
        this.setupGlobalEvents();
        this.markAsInitialized();
    }

    setupGlobalEvents() {
        // Global error handling
        window.addEventListener('error', (e) => {
            console.log('🛡️ RIO CH: Error intercepted and handled');
        });

        // Prevent console access
        Object.defineProperty(window, 'console', {
            get: function() {
                return {
                    log: () => console.log('🔒 RIO CH: Console access restricted'),
                    warn: () => {},
                    error: () => {},
                    info: () => {},
                    debug: () => {}
                };
            }
        });

        // RIO CH integrity check
        setInterval(() => {
            if (!document.querySelector('.rioch-dev-watermark')) {
                console.error('🚨 RIO CH: System integrity violation!');
                location.reload();
            }
        }, 30000);
    }

    markAsInitialized() {
        this.initialized = true;
        console.log('✅ RIO CH: All systems initialized successfully!');
        console.log('🏆 KUZENLER MT2 ready - RIO CH Excellence Delivered!');
        
        // Final protection layer
        setTimeout(() => {
            delete window.console;
            console = undefined;
        }, 5000);
    }
}

// RIO CH Auto-initialization
document.addEventListener('DOMContentLoaded', () => {
    // RIO CH signature verification
    if (document.title.includes('KUZENLER MT2') && document.title.includes('RIO CH')) {
        window.riochGameSystem = new RiochGameSystem();
    } else {
        console.error('🚨 RIO CH: Unauthorized modification detected!');
    }
});

// RIO CH Final Protection
window.addEventListener('beforeunload', () => {
    console.log('👋 RIO CH: Thanks for visiting KUZENLER MT2!');
});

// RIO CH Anti-tampering
Object.freeze(RiochSecuritySystem);
Object.freeze(RiochLoadingSystem);
Object.freeze(RiochAnimationController);
Object.freeze(RiochNavigationController);
Object.freeze(RiochInteractiveElements);
Object.freeze(RiochPerformanceMonitor);
Object.freeze(RiochGameSystem);

/*
 * RIO CH GAMING EXCELLENCE - FINAL PROTECTION LAYER
 * 
 * This JavaScript is the intellectual property of RIO CH
 * Any unauthorized copying, modification, or distribution is strictly prohibited
 * © 2024 RIO CH - All Rights Reserved
 * 
 * 🛡️ Protected by RIO CH Advanced Security Systems
 * ⚡ Optimized for Maximum Gaming Performance  
 * 🎯 Crafted with Excellence, Passion and Innovation
 * 🎮 KUZENLER MT2 - The Ultimate Metin2 Experience
 * 🚀 Powered by RIO CH Technology
 * 
 * Features Implemented:
 * ✅ Advanced Code Protection & Anti-Debugging
 * ✅ Dynamic Battle Animations & Particle Systems
 * ✅ Responsive Mobile Navigation
 * ✅ Interactive UI/UX Elements
 * ✅ Performance Monitoring & Optimization
 * ✅ Security System & Watermarking
 * ✅ Loading System with Progress Tracking
 * ✅ Smooth Scroll & Section Navigation
 * ✅ Counter Animations & Visual Effects
 * ✅ Professional Gaming Aesthetics
 * 
 * 🔥 DEVELOPED WITH PASSION BY RIO CH 🔥
 */