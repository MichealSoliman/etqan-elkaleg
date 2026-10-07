/**
 * etqan-elkaleg.com - High-Performance Main Script
 * Optimized for Core Web Vitals, zero long tasks, zero layout thrashing, fast INP
 */

(function () {
    'use strict';

    // 1. Mobile Navbar Toggle (Null-safe)
    function initNavbar() {
        const hamBurger = document.getElementById('ham_burger') || document.getElementById('hamburger');
        const navMenu = document.getElementById('nav_Menu') || document.getElementById('navMenu');

        if (hamBurger && navMenu) {
            hamBurger.addEventListener('click', function (e) {
                e.stopPropagation();
                hamBurger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    hamBurger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            document.addEventListener('click', function (e) {
                if (!hamBurger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamBurger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }, { passive: true });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    hamBurger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }, { passive: true });
        }
    }

    // 2. High-Performance IntersectionObserver for Scroll Animations (Zero Main-Thread Blocking)
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window)) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const animationObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible', 'animate-in');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatableElements = document.querySelectorAll(
            '.scroll-animate, .service-card, .question-card, .pricing-card-new, .process-step, .testimonial-card, .stat-box'
        );

        animatableElements.forEach(function (el) {
            animationObserver.observe(el);
        });
    }

    // 3. Smooth Scroll Anchor Links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetEl = document.querySelector(targetId);
                    if (targetEl) {
                        e.preventDefault();
                        targetEl.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initNavbar();
            initScrollAnimations();
            initSmoothScroll();
        });
    } else {
        initNavbar();
        initScrollAnimations();
        initSmoothScroll();
    }
})();
