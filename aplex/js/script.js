/**
 * Aplex - Site Vitrine Landing Page
 * JavaScript pour animations et interactions
 */

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('.header');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Logo elements for dynamic loading
const logo = document.getElementById('logo');
const footerLogo = document.getElementById('footerLogo');

// ============================================
// Mobile Menu Toggle
// ============================================

function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking a link
if (mobileMenu) {
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// Header Scroll Effect
// ============================================

function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // Header background on scroll
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (scrollPosition > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink(scrollPosition);
}

// Update active navigation link based on scroll position
function updateActiveNavLink(scrollPosition) {
    const sections = document.querySelectorAll('section[id]');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// Back to Top Button
// ============================================

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

if (backToTop) {
    backToTop.addEventListener('click', scrollToTop);
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .service-card, .section-title, .lead, .contact-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
}

// ============================================
// Form Handling
// ============================================

function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        // In production, you would send the form data to a server
        // For this demo, we'll just show a success message
        
        // Hide form and show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
        }, 5000);
        
        // For production: Uncomment and configure the following
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone: document.getElementById('phone').value.trim(),
                subject,
                message
            })
        })
        .then(response => response.json())
        .then(data => {
            contactForm.reset();
            formSuccess.style.display = 'block';
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        })
        .catch(error => {
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        });
        */
    });
}

// ============================================
// Logo Loading (Placeholder until actual logo is provided)
// ============================================

function initLogo() {
    // If logo image fails to load, show company name
    if (logo) {
        logo.onerror = function() {
            this.style.display = 'none';
            const logoText = document.createElement('span');
            logoText.textContent = 'Aplex';
            logoText.className = 'logo-text';
            this.parentNode.appendChild(logoText);
        };
    }
    
    if (footerLogo) {
        footerLogo.onerror = function() {
            this.style.display = 'none';
            const logoText = document.createElement('span');
            logoText.textContent = 'Aplex';
            logoText.className = 'footer-logo-text';
            this.parentNode.appendChild(logoText);
        };
    }
}

// ============================================
// Keyboard Navigation
// ============================================

function initKeyboardNavigation() {
    // Close mobile menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            mobileMenuBtn.focus();
        }
    });
}

// ============================================
// Performance: Lazy loading images
// ============================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// ============================================
// Parallax Effect for Hero Section (Optional)
// ============================================

function initParallax() {
    const hero = document.querySelector('.hero');
    const appleDevices = document.querySelector('.apple-devices');
    
    if (hero && appleDevices) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const heroHeight = hero.offsetHeight;
            
            if (scrollPosition < heroHeight) {
                const parallaxValue = scrollPosition * 0.3;
                appleDevices.style.transform = `translateY(${parallaxValue}px)`;
            }
        });
    }
}

// ============================================
// Service Card Hover Effects
// ============================================

function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initScrollAnimations();
    initContactForm();
    initLogo();
    initKeyboardNavigation();
    initLazyLoading();
    initParallax();
    initServiceCardEffects();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for scroll position
    handleScroll();
    
    // Log initialization
    console.log('Aplex Website Initialized');
});

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance
function debounce(func, wait) {
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll handler for better performance
window.addEventListener('scroll', throttle(handleScroll, 100));

// ============================================
// Touch Support for Mobile
// ============================================

// Add touch class to body for touch devices
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}
