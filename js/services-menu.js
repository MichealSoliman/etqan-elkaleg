/**
 * ==============================================================================
 * القائمة المركزية المتجاوبة لخدمات ومقالات شركة إتقان الخليج (Central Responsive Navbars & Dropdowns)
 * ==============================================================================
 */

const SITE_SERVICES = [
    { title: 'تنظيف خزانات المياه بالرياض', path: 'cleaning-water-tanks/', icon: 'fa-soap' },
    { title: 'تعقيم خزانات المياه بالرياض', path: 'sterilization-of-water-tanks/', icon: 'fa-shield-virus' },
    { title: 'عزل خزانات المياه بالرياض', path: 'tank-insulation-in-riyadh/', icon: 'fa-shield-halved' },
    { title: 'كشف تسربات الخزانات بالرياض', path: 'tank-leak-detection/', icon: 'fa-magnifying-glass-location' },
    { title: 'صيانة خزانات المياه بالرياض', path: 'tank-maintenance/', icon: 'fa-wrench' },
    { title: 'تنظيف الخزانات الأرضية بالرياض', path: 'cleaning-underground-tanks/', icon: 'fa-layer-group' },
    { title: 'تنظيف الخزانات العلوية بالرياض', path: 'cleaning-overhead-tanks/', icon: 'fa-building' },
    { title: 'لحام خزانات الفيبر جلاس بالرياض', path: 'fiberglass-tank-welding-riyadh/', icon: 'fa-fill-drip' },
    { title: 'عزل خزانات حراري بالرياض', path: 'thermal-tank-insulation-riyadh/', icon: 'fa-temperature-arrow-down' },
    { title: 'عزل خزانات ايبوكسي', path: 'epoxy-tank-insulation-riyadh/', icon: 'fa-paint-roller' },
    { title: 'تنظيف خزانات بلاستيك بالرياض  ', path: 'plastic-water-tank-cleaning-riyadh/', icon: 'fa-drop' },
    { title: 'تغيير عوامة الخزان بالرياض     ', path: 'water-tank-float-valve-replacement-riyadh/', icon: 'fa-arrow-up-down' },
    { title: 'افضل شركة خزانات بالرياض     ', path: 'best-water-tank-company-in-riyadh/', icon: 'fa-arrow-up-down' },
    { title: 'فحص جودة مياه الخزانات بالرياض     ', path: 'water-tank-quality-testing-riyadh/', icon: 'fa-flask' },
    { title: 'تركيب خزانات المياه بالرياض ', path: 'water-tank-installation-riyadh/', icon: 'fa-tools' }
];



(function () {
    'use strict';

    function getPrefix() {
        const script = document.currentScript || document.querySelector('script[src*="services-menu.js"]');
        if (script) {
            const src = script.getAttribute('src');
            if (src.startsWith('../../')) return '../../';
            if (src.startsWith('../')) return '../';
            if (src.startsWith('./')) return './';
            if (!src.includes('/')) return './';
        }

        const path = window.location.pathname.replace(/\\/g, '/');
        if (path.includes('/blogs/') && !path.endsWith('/blogs/') && !path.endsWith('/blogs/index.html')) {
            return '../../';
        }
        if (path.includes('/about/') || path.includes('/services/') || path.includes('/blogs/') ||
            path.includes('/cleaning-') || path.includes('/sterilization-') || path.includes('/tank-') ||
            path.includes('/epoxy-') || path.includes('/fiberglass-') || path.includes('/thermal-')) {
            return '../';
        }
        return './';
    }

    function injectDropdownStyles() {
        if (document.getElementById('etqan-dropdown-styles')) return;
        const style = document.createElement('style');
        style.id = 'etqan-dropdown-styles';
        style.innerHTML = `
            /* Desktop Dropdown Styles */
            @media screen and (min-width: 769px) {
                .services-dropdown-container {
                    position: relative;
                    display: inline-block;
                }
                .services-dropdown-container .dropdown-panel {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    width: 320px;
                    background: #ffffff;
                    border-radius: 16px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05);
                    border: 1px solid #eef2f6;
                    padding: 12px 0;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(12px);
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 9999;
                }
                .services-dropdown-container:hover .dropdown-panel {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .services-dropdown-container:hover > a i.chevron-icon {
                    transform: rotate(180deg);
                }
                .dropdown-panel-scroll {
                    max-height: 380px;
                    overflow-y: auto;
                    padding: 0 6px;
                }
                .dropdown-panel-scroll::-webkit-scrollbar {
                    width: 5px;
                }
                .dropdown-panel-scroll::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }
                .dropdown-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 14px;
                    margin: 2px 0;
                    color: #334155;
                    font-size: 13.5px;
                    font-weight: 600;
                    border-radius: 10px;
                    text-decoration: none !important;
                    transition: all 0.2s ease;
                }
                .dropdown-item:hover {
                    background: #f0f9ff;
                    color: #00aeed;
                    padding-right: 18px;
                }
                .dropdown-item i.item-icon {
                    font-size: 12px;
                    color: #00aeed;
                    margin-left: 8px;
                    opacity: 0.8;
                }
                .dropdown-header {
                    padding: 8px 16px 10px 16px;
                    margin-bottom: 6px;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 12px;
                    font-weight: 700;
                    color: #0f172a;
                }
                .dropdown-header a {
                    color: #00aeed;
                    font-size: 11px;
                    text-decoration: underline;
                }
            }

            /* Mobile Menu Accordion Styles */
            @media screen and (max-width: 768px) {
                .services-dropdown-container {
                    width: 100%;
                }
                .mobile-accordion-header {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    width: 100% !important;
                    padding: 14px 20px !important;
                    color: #333333 !important;
                    font-size: 16px !important;
                    font-weight: 600 !important;
                    border-bottom: 1px solid #f0f0f0 !important;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }
                .mobile-accordion-toggle {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #f1f5f9;
                    color: #00aeed;
                    transition: transform 0.25s ease, background 0.25s ease;
                }
                .mobile-accordion-toggle.active {
                    transform: rotate(180deg);
                    background: #e0f2fe;
                }
                .mobile-accordion-content {
                    display: none;
                    background: #f8fafc;
                    padding: 8px;
                    border-right: 3px solid #00aeed;
                    margin: 6px 12px 12px 12px;
                    border-radius: 12px;
                }
                .mobile-accordion-content.open {
                    display: block !important;
                }
                .mobile-dropdown-item {
                    display: flex !important;
                    align-items: center !important;
                    padding: 10px 12px !important;
                    color: #334155 !important;
                    font-size: 13px !important;
                    font-weight: 500 !important;
                    border-bottom: 1px solid #edf2f7 !important;
                    text-decoration: none !important;
                    border-radius: 6px;
                }
                .mobile-dropdown-item:last-child {
                    border-bottom: none !important;
                }
                .mobile-dropdown-item:hover, .mobile-dropdown-item:active {
                    color: #00aeed !important;
                    background: #ffffff !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function setupDropdowns() {
        injectDropdownStyles();
        const prefix = getPrefix();
        const servicesMainUrl = `${prefix}services/`;


        const isMobile = window.innerWidth <= 768;
        const navMenu = document.getElementById('nav_Menu') || document.querySelector('.nav-menu') || document.querySelector('nav');

        if (!navMenu) return;

        // Find "خدماتنا" or "الخدمات" link inside navbar
        const allLinks = Array.from(navMenu.querySelectorAll('a'));

        allLinks.forEach(link => {
            const text = link.textContent.trim();
            const href = link.getAttribute('href') || '';

            if (text === 'خدماتنا' || text === 'الخدمات' || (href.includes('services') && !href.endsWith('.js'))) {
                const parentLi = link.closest('li');

                if (parentLi) {
                    if (parentLi.classList.contains('services-processed')) return;
                    parentLi.classList.add('services-processed', 'services-dropdown-container');

                    if (!isMobile) {
                        // Desktop Render
                        parentLi.innerHTML = `
                            <a href="${servicesMainUrl}" class="active" style="display: inline-flex; align-items: center; gap: 6px;">
                                <span>${text}</span>
                                <i class="fas fa-chevron-down chevron-icon" style="font-size: 10px; transition: transform 0.25s ease;"></i>
                            </a>
                            <div class="dropdown-panel">
                                <div class="dropdown-header">
                                    <span>خدمات شركة إتقان الخليج</span>
                                    <a href="${servicesMainUrl}">عرض جميع الخدمات</a>
                                </div>
                                <div class="dropdown-panel-scroll">
                                    ${SITE_SERVICES.map(service => `
                                        <a href="${prefix}${service.path}" class="dropdown-item">
                                            <span><i class="fas ${service.icon} item-icon"></i> ${service.title}</span>
                                            <i class="fas fa-arrow-left" style="font-size: 10px; opacity: 0.6;"></i>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    } else {
                        // Mobile Accordion Render
                        parentLi.innerHTML = `
                            <div class="mobile-accordion-header">
                                <a href="${servicesMainUrl}" style="color: inherit; text-decoration: none; flex-grow: 1; text-align: right;">${text}</a>
                                <span class="mobile-accordion-toggle">
                                    <i class="fas fa-chevron-down" style="font-size: 12px;"></i>
                                </span>
                            </div>
                            <div class="mobile-accordion-content">
                                ${SITE_SERVICES.map(service => `
                                    <a href="${prefix}${service.path}" class="mobile-dropdown-item">
                                        <i class="fas ${service.icon}" style="color: #00aeed; margin-left: 8px; font-size: 11px;"></i>
                                        <span>${service.title}</span>
                                    </a>
                                `).join('')}
                            </div>
                        `;

                        const toggleIcon = parentLi.querySelector('.mobile-accordion-toggle');
                        const contentBox = parentLi.querySelector('.mobile-accordion-content');

                        if (toggleIcon && contentBox) {
                            toggleIcon.addEventListener('click', function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleIcon.classList.toggle('active');
                                contentBox.classList.toggle('open');
                            });
                        }
                    }
                } else {
                    if (link.classList.contains('services-processed')) return;

                    const wrapper = document.createElement('div');
                    wrapper.className = 'services-processed services-dropdown-container';

                    if (!isMobile) {
                        wrapper.innerHTML = `
                            <a href="${servicesMainUrl}" class="active hover:text-[#00aeed] transition" style="display: inline-flex; align-items: center; gap: 6px;">
                                <span>${text}</span>
                                <i class="fas fa-chevron-down chevron-icon" style="font-size: 10px; transition: transform 0.25s ease;"></i>
                            </a>
                            <div class="dropdown-panel">
                                <div class="dropdown-header">
                                    <span>خدمات شركة إتقان الخليج</span>
                                    <a href="${servicesMainUrl}">عرض جميع الخدمات</a>
                                </div>
                                <div class="dropdown-panel-scroll">
                                    ${SITE_SERVICES.map(service => `
                                        <a href="${prefix}${service.path}" class="dropdown-item">
                                            <span><i class="fas ${service.icon} item-icon"></i> ${service.title}</span>
                                            <i class="fas fa-arrow-left" style="font-size: 10px; opacity: 0.6;"></i>
                                        </a>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    } else {
                        wrapper.innerHTML = `
                            <div class="mobile-accordion-header" style="background: transparent;">
                                <a href="${servicesMainUrl}" style="color: inherit; text-decoration: none; flex-grow: 1; text-align: right;">${text}</a>
                                <span class="mobile-accordion-toggle">
                                    <i class="fas fa-chevron-down" style="font-size: 12px;"></i>
                                </span>
                            </div>
                            <div class="mobile-accordion-content">
                                ${SITE_SERVICES.map(service => `
                                    <a href="${prefix}${service.path}" class="mobile-dropdown-item">
                                        <i class="fas ${service.icon}" style="color: #00aeed; margin-left: 8px; font-size: 11px;"></i>
                                        <span>${service.title}</span>
                                    </a>
                                `).join('')}
                            </div>
                        `;

                        const toggleIcon = wrapper.querySelector('.mobile-accordion-toggle');
                        const contentBox = wrapper.querySelector('.mobile-accordion-content');

                        if (toggleIcon && contentBox) {
                            toggleIcon.addEventListener('click', function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleIcon.classList.toggle('active');
                                contentBox.classList.toggle('open');
                            });
                        }
                    }
                    link.replaceWith(wrapper);
                }
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupDropdowns);
    } else {
        setupDropdowns();
    }

    // Re-evaluate on window resize
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            document.querySelectorAll('.services-processed').forEach(el => el.classList.remove('services-processed'));
            setupDropdowns();
        }, 200);
    });
})();
