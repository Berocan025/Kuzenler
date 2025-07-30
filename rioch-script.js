/*
 * RIO CH - KUZENLER MT2 Interactive Scripts
 * Developed by RIO CH with Excellence and Passion
 * All Rights Reserved © 2024 RIO CH
 * Protected and Secured Code
 */

// RIO CH Developer Signature
console.log(`
🚀 KUZENLER MT2 - Powered by RIO CH 🚀
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓                                      ▓
▓    Crafted with Excellence by:       ▓
▓           🎯 RIO CH 🎯               ▓
▓                                      ▓
▓    KUZENLER MT2 - Gaming Revolution  ▓
▓                                      ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

🛡️ This code is protected by RIO CH
⚡ All animations and effects by RIO CH
🔒 Secure and Professional Development
`);

// RIO CH Protection System
class RiochProtection {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.protectConsole();
    }

    init() {
        // RIO CH signature
        document.addEventListener('DOMContentLoaded', () => {
            this.addRiochWatermark();
            this.preventInspection();
            this.disableShortcuts();
        });
    }

    addRiochWatermark() {
        const watermark = document.createElement('div');
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            left: 10px;
            background: linear-gradient(135deg, #ff6b6b, #ffd93d);
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 10px;
            z-index: 9998;
            font-family: 'Orbitron', monospace;
            font-weight: bold;
            opacity: 0.8;
        `;
        watermark.textContent = '🔒 RIO CH Protected';
        document.body.appendChild(watermark);
    }

    preventInspection() {
        // RIO CH anti-inspection
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.key === 'u')) {
                e.preventDefault();
                this.showProtectionModal();
            }
        });

        // RIO CH right-click protection
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showProtectionModal();
        });

        // RIO CH dev tools detection
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > 200 || 
                window.outerWidth - window.innerWidth > 200) {
                this.showProtectionModal();
            }
        }, 1000);
    }

    disableShortcuts() {
        // RIO CH shortcut protection
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'p')) {
                e.preventDefault();
                this.showProtectionModal();
            }
        });
    }

    protectConsole() {
        // RIO CH console protection
        const noop = () => {};
        const methods = ['log', 'warn', 'error', 'info', 'debug'];
        
        methods.forEach(method => {
            if (typeof console[method] === 'function') {
                console[method] = noop;
            }
        });
    }

    showProtectionModal() {
        const modal = document.getElementById('rioch-protection-modal');
        if (modal) {
            modal.style.display = 'block';
            // RIO CH random protection messages
            const messages = [
                'RIO CH YERMİ BU NUMARALARI :)',
                'RIO CH koruması aktif! 🛡️',
                'Kod incelemek yasak! - RIO CH',
                'RIO CH\'nin eseri dokunulmaz! 🔒',
                'Hacker mı olmaya çalışıyorsun? 😄'
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            const modalBody = modal.querySelector('.rioch-modal-body p');
            if (modalBody) {
                modalBody.innerHTML = `🛡️ <strong>${randomMessage}</strong>`;
            }
        }
    }

    setupEventListeners() {
        // RIO CH modal close
        window.riochCloseModal = () => {
            const modal = document.getElementById('rioch-protection-modal');
            if (modal) {
                modal.style.display = 'none';
            }
        };
    }
}

// RIO CH Animation System
class RiochAnimations {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupScrollAnimations();
            this.setupHoverEffects();
            this.setupParticleSystem();
            this.setupTypingEffect();
            this.setupSmoothScroll();
        });
    }

    setupScrollAnimations() {
        // RIO CH scroll reveal
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('rioch-slide-up');
                    entry.target.style.opacity = '1';
                }
            });
        }, observerOptions);

        // RIO CH observe elements
        const elementsToAnimate = document.querySelectorAll(`
            .rioch-feature-card,
            .rioch-character-card,
            .rioch-screenshot-item,
            .rioch-section-header
        `);

        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    setupHoverEffects() {
        // RIO CH button effects
        const buttons = document.querySelectorAll('.rioch-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
            });
        });

        // RIO CH card effects
        const cards = document.querySelectorAll('.rioch-feature-card, .rioch-character-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) rotateX(5deg)';
                card.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.3)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.boxShadow = 'none';
            });
        });
    }

    setupParticleSystem() {
        // RIO CH particle effects
        const hero = document.querySelector('.rioch-hero');
        if (hero) {
            this.createParticles(hero, 50);
        }
    }

    createParticles(container, count) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'rioch-particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #ff6b6b;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.6;
                animation: riochParticleFloat ${3 + Math.random() * 4}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            container.appendChild(particle);
        }

        // RIO CH particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes riochParticleFloat {
                0% {
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0.6;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupTypingEffect() {
        // RIO CH typing effect for hero
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
                }
            };

            setTimeout(typeWriter, 1000);
        }
    }

    setupSmoothScroll() {
        // RIO CH smooth scrolling
        const navLinks = document.querySelectorAll('.rioch-nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // RIO CH scroll indicator
        const scrollIndicator = document.querySelector('.rioch-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                    featuresSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }
}

// RIO CH Mobile Navigation
class RiochMobileNav {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMobileMenu();
        });
    }

    setupMobileMenu() {
        const hamburger = document.querySelector('.rioch-hamburger');
        const navMenu = document.querySelector('.rioch-nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                this.toggleMobileMenu(hamburger, navMenu);
            });
        }
    }

    toggleMobileMenu(hamburger, navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // RIO CH hamburger animation
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            
            // RIO CH show mobile menu
            navMenu.style.cssText = `
                display: flex !important;
                position: fixed;
                top: 70px;
                left: 0;
                width: 100%;
                height: calc(100vh - 70px);
                background: rgba(26, 26, 46, 0.98);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                backdrop-filter: blur(10px);
                z-index: 999;
            `;
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            
            // RIO CH hide mobile menu
            navMenu.style.display = 'none';
        }
    }
}

// RIO CH Counter Animation
class RiochCounters {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupCounters();
        });
    }

    setupCounters() {
        const counters = document.querySelectorAll('.rioch-stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const target = element.textContent;
        const isNumber = target.match(/\d+/);
        
        if (isNumber) {
            const number = parseInt(isNumber[0]);
            const suffix = target.replace(number.toString(), '');
            let current = 0;
            const increment = number / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + suffix;
            }, 40);
        }
    }
}

// RIO CH Loading Screen
class RiochLoader {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.createLoader();
            this.hideLoader();
        });
    }

    createLoader() {
        const loader = document.createElement('div');
        loader.id = 'rioch-loader';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            transition: opacity 0.5s ease;
        `;

        const logo = document.createElement('div');
        logo.style.cssText = `
            font-size: 3rem;
            font-weight: bold;
            background: linear-gradient(135deg, #ff6b6b, #ffd93d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-family: 'Orbitron', monospace;
            margin-bottom: 2rem;
            animation: riochPulse 2s infinite;
        `;
        logo.textContent = 'KUZENLER MT2';

        const subtitle = document.createElement('div');
        subtitle.style.cssText = `
            color: white;
            font-size: 1rem;
            margin-bottom: 2rem;
            opacity: 0.8;
        `;
        subtitle.textContent = 'Powered by RIO CH';

        const spinner = document.createElement('div');
        spinner.className = 'rioch-loading';

        loader.appendChild(logo);
        loader.appendChild(subtitle);
        loader.appendChild(spinner);
        document.body.appendChild(loader);
    }

    hideLoader() {
        setTimeout(() => {
            const loader = document.getElementById('rioch-loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }
        }, 2000);
    }
}

// RIO CH Performance Monitor
class RiochPerformance {
    constructor() {
        this.init();
    }

    init() {
        // RIO CH performance logging
        window.addEventListener('load', () => {
            console.log('🚀 RIO CH - Site loaded successfully!');
            this.logPerformance();
        });
    }

    logPerformance() {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ RIO CH Performance: ${loadTime}ms load time`);
    }
}

// RIO CH Initialize All Systems
document.addEventListener('DOMContentLoaded', () => {
    // RIO CH system initialization
    console.log('🎯 Initializing RIO CH Systems...');
    
    new RiochProtection();
    new RiochAnimations();
    new RiochMobileNav();
    new RiochCounters();
    new RiochLoader();
    new RiochPerformance();
    
    console.log('✅ All RIO CH systems initialized successfully!');
});

// RIO CH Window Loaded Event
window.addEventListener('load', () => {
    console.log('🏆 KUZENLER MT2 fully loaded - RIO CH Excellence Delivered!');
    
    // RIO CH final protection
    delete window.console;
    
    // RIO CH success message
    setTimeout(() => {
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #2ecc71, #27ae60);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-family: 'Orbitron', monospace;
            font-weight: bold;
            z-index: 10001;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        successMsg.textContent = '🎮 RIO CH sistemi aktif! KUZENLER MT2\'ye hoş geldin!';
        document.body.appendChild(successMsg);
        
        setTimeout(() => {
            successMsg.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            successMsg.style.opacity = '0';
            setTimeout(() => {
                successMsg.remove();
            }, 300);
        }, 3000);
    }, 1000);
});

// RIO CH Anti-Cheat System
setInterval(() => {
    // RIO CH code integrity check
    if (!document.querySelector('.rioch-dev-signature')) {
        console.error('🚨 RIO CH: Code integrity violation detected!');
        location.reload();
    }
}, 5000);

/*
 * RIO CH FINAL PROTECTION LAYER
 * This code is the intellectual property of RIO CH
 * Any unauthorized copying, modification, or distribution is strictly prohibited
 * © 2024 RIO CH - All Rights Reserved
 * 
 * 🛡️ Protected by RIO CH Security Systems
 * ⚡ Optimized for Maximum Performance
 * 🎯 Crafted with Excellence and Passion
 * 🚀 KUZENLER MT2 - The Ultimate Gaming Experience
 */