/**
 * KUZENLER MT2 - Professional Metin2 Private Server
 * Advanced JavaScript System by RIO CH
 * All Rights Reserved © 2024 RIO CH
 * Professional Gaming Experience JavaScript
 */

// ===== RIO CH SECURITY SYSTEM =====
class RiochSecuritySystem {
    constructor() {
        this.protectionActive = true;
        this.warningMessages = [
            'RIO CH YERMİ BU NUMARALARI :)',
            'Bu site RIO CH tarafından korunmaktadır!',
            'Developer tools detected! Site koruması aktif.',
            'Profesyonel geliştirici tarafından güvence altında.',
            'RIO CH Security Shield activated!'
        ];
        this.init();
    }

    init() {
        this.disableDevTools();
        this.disableRightClick();
        this.disableKeyboardShortcuts();
        this.disableTextSelection();
        this.disableDragDrop();
        this.monitorConsole();
        this.createFloatingWatermarks();
        this.protectSourceCode();
    }

    disableDevTools() {
        // F12 tuşunu devre dışı bırak
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                this.showWarningModal();
                return false;
            }
        });

        // DevTools açık mı kontrol et
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > 200 || 
                window.outerWidth - window.innerWidth > 200) {
                this.showWarningModal();
                // Sayfayı blur yap
                document.body.style.filter = 'blur(5px)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
            }
        }, 1000);
    }

    disableRightClick() {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.showWarningModal();
            return false;
        });
    }

    disableKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+A, Ctrl+S, Ctrl+P, vb. devre dışı
            if (e.ctrlKey && ['a', 's', 'p', 'o', 'f'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                this.showWarningModal();
                return false;
            }
        });
    }

    disableTextSelection() {
        document.addEventListener('selectstart', (e) => {
            e.preventDefault();
            return false;
        });

        document.onselectstart = () => false;
        document.onmousedown = () => false;
    }

    disableDragDrop() {
        document.addEventListener('dragstart', (e) => {
            e.preventDefault();
            return false;
        });
    }

    monitorConsole() {
        // Console'u monitör et
        const originalLog = console.log;
        console.log = (...args) => {
            this.showWarningModal();
            originalLog.apply(console, args);
        };

        // Console clear'ı engelle
        console.clear = () => {
            this.showWarningModal();
        };
    }

    createFloatingWatermarks() {
        setInterval(() => {
            const watermark = document.createElement('div');
            watermark.innerHTML = '💻 RIO CH PROTECTED 🛡️';
            watermark.style.cssText = `
                position: fixed;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                color: rgba(233, 69, 96, 0.3);
                font-size: 12px;
                font-weight: bold;
                z-index: 9998;
                pointer-events: none;
                animation: riochFadeOut 3s ease-out forwards;
                font-family: 'Orbitron', monospace;
            `;
            document.body.appendChild(watermark);
            
            setTimeout(() => {
                if (watermark.parentNode) {
                    watermark.parentNode.removeChild(watermark);
                }
            }, 3000);
        }, 5000);
    }

    protectSourceCode() {
        // Objeleri dondur
        Object.freeze(document);
        Object.freeze(window);
        
        // Anti-tampering
        const originalStringify = JSON.stringify;
        JSON.stringify = function(...args) {
            if (args[0] && typeof args[0] === 'object') {
                riochSecurity.showWarningModal();
            }
            return originalStringify.apply(this, args);
        };
    }

    showWarningModal() {
        if (!this.protectionActive) return;
        
        const modal = document.getElementById('rioch-protection-modal');
        if (modal) {
            modal.style.display = 'block';
            
            // Random mesaj göster
            const randomMessage = this.warningMessages[Math.floor(Math.random() * this.warningMessages.length)];
            const messageElement = modal.querySelector('.rioch-warning-message');
            if (messageElement) {
                messageElement.textContent = randomMessage;
            }
        }
    }
}

// ===== RIO CH LOADING SYSTEM =====
class RiochLoadingSystem {
    constructor() {
        this.loadingScreen = document.getElementById('rioch-loading-screen');
        this.progressBar = document.querySelector('.rioch-loading-progress');
        this.percentage = document.querySelector('.rioch-loading-percentage');
        this.status = document.querySelector('.rioch-loading-status');
        this.currentProgress = 0;
        this.targetProgress = 0;
        this.loadingSteps = [
            'Ejderhalar uyanıyor...',
            'Savaş alanı hazırlanıyor...',
            'Karakterler yükleniyor...',
            'Loncalar organize oluyor...',
            'Yang ekonomisi başlatılıyor...',
            'PvP sistemi aktifleştiriliyor...',
            'Metin taşları yerleştiriliyor...',
            'Boss raidleri hazırlanıyor...',
            'RIO CH imzası ekleniyor...',
            'Metin2 Universe Loading...'
        ];
        this.currentStep = 0;
        this.init();
    }

    init() {
        this.simulateLoading();
    }

    simulateLoading() {
        const loadingInterval = setInterval(() => {
            this.targetProgress += Math.random() * 15 + 5;
            
            if (this.targetProgress >= 100) {
                this.targetProgress = 100;
                clearInterval(loadingInterval);
                
                setTimeout(() => {
                    this.hideLoading();
                }, 1000);
            }
            
            this.updateProgress();
            this.updateStatus();
        }, 300);
    }

    updateProgress() {
        const progressInterval = setInterval(() => {
            if (this.currentProgress < this.targetProgress) {
                this.currentProgress += 2;
                this.progressBar.style.width = this.currentProgress + '%';
                this.percentage.textContent = Math.floor(this.currentProgress) + '%';
            } else {
                clearInterval(progressInterval);
            }
        }, 50);
    }

    updateStatus() {
        if (this.currentStep < this.loadingSteps.length - 1) {
            this.currentStep++;
            this.status.textContent = this.loadingSteps[this.currentStep];
        }
    }

    hideLoading() {
        this.loadingScreen.classList.add('rioch-hidden');
        document.body.style.overflow = 'auto';
        
        setTimeout(() => {
            this.loadingScreen.style.display = 'none';
            riochAnimations.initScrollAnimations();
        }, 800);
    }
}

// ===== RIO CH ANIMATION CONTROLLER =====
class RiochAnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.observerOptions);
        this.particleCount = 0;
        this.maxParticles = 50;
        this.init();
    }

    init() {
        this.initScrollAnimations();
        this.initHoverEffects();
        this.initParticleSystem();
        this.initTypingEffect();
        this.initCounters();
        this.initBattleAnimations();
    }

    initScrollAnimations() {
        const elements = document.querySelectorAll('.rioch-feature-card, .rioch-character-card, .rioch-gallery-item, .rioch-guild-item, .rioch-benefit-card');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            this.observer.observe(el);
        });

        // Character stat bars
        const characterCards = document.querySelectorAll('.rioch-character-card');
        characterCards.forEach(card => {
            this.observer.observe(card);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Character stats animation
                if (element.classList.contains('rioch-character-card')) {
                    element.classList.add('rioch-visible');
                    this.animateCharacterStats(element);
                }
                
                this.observer.unobserve(element);
            }
        });
    }

    animateCharacterStats(card) {
        const statBars = card.querySelectorAll('.rioch-stat-fill');
        statBars.forEach((bar, index) => {
            setTimeout(() => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            }, index * 200);
        });
    }

    initHoverEffects() {
        // Button hover effects
        const buttons = document.querySelectorAll('.rioch-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                this.createButtonParticles(e.target);
                this.addRippleEffect(e);
            });
            
            btn.addEventListener('click', (e) => {
                this.addRippleEffect(e);
            });
        });

        // Card hover effects
        const cards = document.querySelectorAll('.rioch-feature-card, .rioch-character-card, .rioch-gallery-item');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addCardGlow(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.removeCardGlow(card);
            });
        });
    }

    createButtonParticles(button) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                pointer-events: none;
                animation: riochButtonParticle 1s ease-out forwards;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                z-index: 10;
            `;
            
            button.style.position = 'relative';
            button.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }
    }

    addRippleEffect(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: riochRipple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }

    addCardGlow(card) {
        card.style.boxShadow = '0 0 30px rgba(233, 69, 96, 0.5), 0 20px 40px rgba(0, 0, 0, 0.3)';
        card.style.transform = 'translateY(-10px) scale(1.02)';
    }

    removeCardGlow(card) {
        card.style.boxShadow = '';
        card.style.transform = '';
    }

    initParticleSystem() {
        this.createFloatingParticles();
        setInterval(() => {
            this.createFloatingParticles();
        }, 3000);
    }

    createFloatingParticles() {
        if (this.particleCount >= this.maxParticles) return;
        
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: linear-gradient(45deg, #e94560, #ffd700);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                animation: riochFloatUp ${5 + Math.random() * 5}s linear forwards;
                opacity: 0.7;
            `;
            
            document.body.appendChild(particle);
            this.particleCount++;
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    this.particleCount--;
                }
            }, 10000);
        }
    }

    initTypingEffect() {
        const typingElements = document.querySelectorAll('.rioch-hero-description p');
        typingElements.forEach((element, index) => {
            const text = element.textContent;
            element.textContent = '';
            
            setTimeout(() => {
                this.typeText(element, text, 50);
            }, 2000 + (index * 1000));
        });
    }

    typeText(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    initCounters() {
        const counters = document.querySelectorAll('.rioch-stat-number[data-target]');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }

    initBattleAnimations() {
        // Hero battle scene animations
        const battleLayer = document.querySelector('.rioch-battle-layer');
        if (battleLayer) {
            this.animateBattleScene();
        }
    }

    animateBattleScene() {
        // Damage numbers animation
        setInterval(() => {
            this.createRandomDamage();
        }, 2000);
        
        // Battle effects
        setInterval(() => {
            this.createBattleEffect();
        }, 3000);
    }

    createRandomDamage() {
        const damageTypes = ['critical', 'normal', 'poison'];
        const damages = ['-15,847', '-5,234', '-1,890', '+3,456', 'MISS', 'RESIST'];
        const colors = ['#ff4757', '#ffa502', '#a55eea', '#2ed573', '#747d8c', '#5352ed'];
        
        const damage = document.createElement('div');
        const randomDamage = damages[Math.floor(Math.random() * damages.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        damage.textContent = randomDamage;
        damage.style.cssText = `
            position: absolute;
            top: ${Math.random() * 80 + 10}%;
            left: ${Math.random() * 80 + 10}%;
            color: ${randomColor};
            font-size: ${1.5 + Math.random()}rem;
            font-weight: 900;
            font-family: 'Orbitron', monospace;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            pointer-events: none;
            z-index: 3;
            animation: riochDamageFloat 3s ease-out forwards;
        `;
        
        const battleLayer = document.querySelector('.rioch-battle-layer');
        if (battleLayer) {
            battleLayer.appendChild(damage);
            
            setTimeout(() => {
                if (damage.parentNode) {
                    damage.parentNode.removeChild(damage);
                }
            }, 3000);
        }
    }

    createBattleEffect() {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: absolute;
            top: ${Math.random() * 70 + 15}%;
            left: ${Math.random() * 70 + 15}%;
            width: 40px;
            height: 40px;
            background: radial-gradient(circle, #e94560, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            animation: riochExplosion 2s ease-out forwards;
        `;
        
        const battleLayer = document.querySelector('.rioch-battle-layer');
        if (battleLayer) {
            battleLayer.appendChild(effect);
            
            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 2000);
        }
    }
}

// ===== RIO CH NAVIGATION CONTROLLER =====
class RiochNavigationController {
    constructor() {
        this.navbar = document.querySelector('.rioch-navbar');
        this.hamburger = document.querySelector('.rioch-hamburger');
        this.navMenu = document.querySelector('.rioch-nav-menu');
        this.navLinks = document.querySelectorAll('.rioch-nav-menu a');
        this.lastScrollY = window.scrollY;
        this.init();
    }

    init() {
        this.initSmoothScroll();
        this.initMobileMenu();
        this.initScrollBehavior();
    }

    initSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
                
                // Mobile menü kapat
                if (window.innerWidth <= 768) {
                    this.closeMobileMenu();
                }
            });
        });
    }

    initMobileMenu() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
        
        // Dışarı tıklandığında menüyü kapat
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target) && this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        
        // Hamburger animasyonu
        const spans = this.hamburger.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.transform = this.navMenu.classList.contains('active') 
                ? `rotate(${index === 1 ? 45 : index === 2 ? -45 : 0}deg) translate(${index === 0 ? '5px, 5px' : index === 2 ? '-5px, -5px' : '0'})` 
                : 'none';
        });
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
        
        const spans = this.hamburger.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
        });
    }

    initScrollBehavior() {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Navbar hide/show
            if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            // Navbar background opacity
            if (currentScrollY > 50) {
                this.navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                this.navbar.style.backdropFilter = 'blur(20px)';
            } else {
                this.navbar.style.background = 'rgba(10, 10, 10, 0.8)';
                this.navbar.style.backdropFilter = 'blur(10px)';
            }
            
            this.lastScrollY = currentScrollY;
        });
    }
}

// ===== RIO CH INTERACTIVE ELEMENTS =====
class RiochInteractiveElements {
    constructor() {
        this.init();
    }

    init() {
        this.initButtonInteractions();
        this.initModalSystem();
        this.initImageLightbox();
    }

    initButtonInteractions() {
        // Download button
        const downloadBtns = document.querySelectorAll('.rioch-btn-download, .rioch-btn-download-main');
        downloadBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.showMessage('Game download started! RIO CH Gaming Excellence.', 'success');
            });
        });
        
        // Discord button
        const discordBtns = document.querySelectorAll('.rioch-btn-discord');
        discordBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.showMessage('Redirecting to Discord server...', 'info');
                setTimeout(() => {
                    window.open('https://discord.gg/kuzenler-mt2', '_blank');
                }, 1000);
            });
        });
        
        // YouTube button
        const youtubeBtns = document.querySelectorAll('.rioch-btn-trailer, .rioch-btn-youtube');
        youtubeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.showMessage('Opening game trailer...', 'info');
                setTimeout(() => {
                    window.open('https://youtube.com/kuzenler-mt2', '_blank');
                }, 1000);
            });
        });
    }

    initModalSystem() {
        // Protection modal close
        window.riochCloseModal = () => {
            const modal = document.getElementById('rioch-protection-modal');
            if (modal) {
                modal.style.display = 'none';
            }
        };
    }

    initImageLightbox() {
        const galleryImages = document.querySelectorAll('.rioch-gallery-image');
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                this.openLightbox(img.src, img.alt);
            });
        });
    }

    openLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 10px;
            box-shadow: 0 0 50px rgba(233, 69, 96, 0.5);
        `;
        
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    }

    showMessage(text, type = 'info') {
        const message = document.createElement('div');
        const colors = {
            success: '#2ecc71',
            error: '#e74c3c',
            info: '#3498db',
            warning: '#f39c12'
        };
        
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 600;
            z-index: 10002;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            message.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 3000);
    }
}

// ===== RIO CH PERFORMANCE MONITOR =====
class RiochPerformanceMonitor {
    constructor() {
        this.startTime = performance.now();
        this.frameCount = 0;
        this.lastTime = this.startTime;
        this.fps = 0;
        this.init();
    }

    init() {
        this.monitorLoadTime();
        this.monitorFPS();
        this.optimizeForLowEndDevices();
    }

    monitorLoadTime() {
        window.addEventListener('load', () => {
            const loadTime = performance.now() - this.startTime;
            console.log(`🚀 RIO CH - Page loaded in ${Math.round(loadTime)}ms`);
            
            if (loadTime > 3000) {
                console.warn('⚠️ RIO CH - Slow loading detected, optimizing...');
                this.optimizePerformance();
            }
        });
    }

    monitorFPS() {
        const calculateFPS = () => {
            this.frameCount++;
            const currentTime = performance.now();
            
            if (currentTime > this.lastTime + 1000) {
                this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
                this.frameCount = 0;
                this.lastTime = currentTime;
                
                if (this.fps < 30) {
                    this.optimizePerformance();
                }
            }
            
            requestAnimationFrame(calculateFPS);
        };
        
        requestAnimationFrame(calculateFPS);
    }

    optimizeForLowEndDevices() {
        const isLowEnd = navigator.hardwareConcurrency <= 2 || 
                        navigator.deviceMemory <= 2 ||
                        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isLowEnd) {
            document.documentElement.style.setProperty('--rioch-animation-duration', '0.2s');
            
            // Particle sayısını azalt
            if (riochAnimations) {
                riochAnimations.maxParticles = 10;
            }
        }
    }

    optimizePerformance() {
        // Gereksiz animasyonları durdur
        const heavyAnimations = document.querySelectorAll('.rioch-heavy-animation');
        heavyAnimations.forEach(el => {
            el.style.animation = 'none';
        });
        
        console.log('🔧 RIO CH - Performance optimizations applied');
    }
}

// ===== RIO CH MAIN SYSTEM =====
class RiochGameSystem {
    constructor() {
        this.version = '2.4.3';
        this.developer = 'RIO CH';
        this.initialized = false;
        this.init();
    }

    init() {
        if (this.initialized) return;
        
        console.log(`🎮 KUZENLER MT2 v${this.version} - Powered by ${this.developer}`);
        console.log('🛡️ Advanced security systems active');
        console.log('🚀 Professional gaming experience loading...');
        
        // Global error handling
        window.addEventListener('error', this.handleError.bind(this));
        window.addEventListener('unhandledrejection', this.handleError.bind(this));
        
        // Initialize all systems
        this.initializeSystems();
        this.registerGlobalFunctions();
        this.performIntegrityCheck();
        
        this.initialized = true;
        console.log('✅ RIO CH Gaming System fully initialized');
    }

    initializeSystems() {
        // Initialize systems in correct order
        window.riochSecurity = new RiochSecuritySystem();
        window.riochLoading = new RiochLoadingSystem();
        window.riochAnimations = new RiochAnimationController();
        window.riochNavigation = new RiochNavigationController();
        window.riochInteractive = new RiochInteractiveElements();
        window.riochPerformance = new RiochPerformanceMonitor();
    }

    registerGlobalFunctions() {
        // Global utility functions
        window.riochUtils = {
            formatNumber: (num) => num.toLocaleString(),
            createId: () => Math.random().toString(36).substr(2, 9),
            debounce: (func, wait) => {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }
        };
    }

    performIntegrityCheck() {
        // Check if critical elements exist
        const criticalElements = [
            '.rioch-navbar',
            '.rioch-hero',
            '.rioch-features',
            '.rioch-footer'
        ];
        
        let missingElements = [];
        criticalElements.forEach(selector => {
            if (!document.querySelector(selector)) {
                missingElements.push(selector);
            }
        });
        
        if (missingElements.length > 0) {
            console.warn('⚠️ RIO CH - Missing critical elements:', missingElements);
        } else {
            console.log('✅ RIO CH - All critical elements present');
        }
    }

    handleError(event) {
        console.error('🚨 RIO CH - System error:', event.error || event.reason);
        
        // Show user-friendly error message
        if (window.riochInteractive) {
            riochInteractive.showMessage('A system error occurred. RIO CH is working to fix it.', 'error');
        }
    }
}

// ===== RIO CH CSS ANIMATIONS =====
const riochCSS = `
@keyframes riochButtonParticle {
    0% { opacity: 1; transform: scale(1) translateY(0); }
    100% { opacity: 0; transform: scale(0) translateY(-50px); }
}

@keyframes riochRipple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
}

@keyframes riochFloatUp {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
    50% { opacity: 1; }
    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}

@keyframes riochFadeOut {
    0% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
    100% { opacity: 0; transform: scale(0.8); }
}
`;

// CSS'i ekle
const styleSheet = document.createElement('style');
styleSheet.textContent = riochCSS;
document.head.appendChild(styleSheet);

// ===== RIO CH SYSTEM AUTO-START =====
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all DOM elements are ready
    setTimeout(() => {
        window.riochSystem = new RiochGameSystem();
    }, 100);
});

// ===== RIO CH DEVELOPER SIGNATURE =====
console.log(`
%c🎮 KUZENLER MT2 - Professional Gaming Experience
%c🚀 Crafted with Excellence by RIO CH
%c⚡ Advanced JavaScript Gaming System v2.4.3
%c🛡️ Professional Security & Optimization
%c💎 Premium Metin2 Private Server Experience

%c© 2024 RIO CH - All Rights Reserved
%cProfessional Development • Advanced Gaming Technology
`, 
'color: #e94560; font-size: 16px; font-weight: bold;',
'color: #ffd700; font-size: 14px; font-weight: bold;',
'color: #3498db; font-size: 12px;',
'color: #2ecc71; font-size: 12px;',
'color: #9b59b6; font-size: 12px;',
'color: #e74c3c; font-size: 10px; font-weight: bold;',
'color: #95a5a6; font-size: 10px;'
);

/**
 * RIO CH GAMING EXCELLENCE - PROFESSIONAL JAVASCRIPT
 * 
 * This script is the intellectual property of RIO CH
 * Crafted with Excellence, Passion and Innovation
 * Professional Metin2 Gaming Experience
 * 
 * Developer: RIO CH
 * Year: 2024
 * Version: 2.4.3
 * 
 * All Rights Reserved © RIO CH
 * 
 * Features Implemented:
 * ✅ Advanced Security System (Anti-DevTools, Anti-Copy)
 * ✅ Professional Loading System with Progress
 * ✅ Advanced Animation Controller
 * ✅ Smooth Navigation System
 * ✅ Interactive Elements & Effects
 * ✅ Performance Monitoring & Optimization
 * ✅ Error Handling & Debugging
 * ✅ Mobile Responsive Interactions
 * ✅ Battle Scene Animations
 * ✅ Real-time Statistics & Counters
 * 
 * 🔥 DEVELOPED WITH PASSION BY RIO CH 🔥
 */