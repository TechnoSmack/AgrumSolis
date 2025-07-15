/**
 * Agrum Solis Website Interactive Functionality
 * Based on Mediterranean agricultural design research
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initializeNavigation();
    initializeGallery();
    initializeContactForm();
    initializeActiveNavigation();
});

/**
 * Mobile Navigation Toggle
 */
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('nav-menu-open');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('nav-menu-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('nav-menu-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Gallery Lightbox Functionality
 */
function initializeGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
        
        // Keyboard accessibility for gallery images
        image.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(this.src, this.alt);
            }
        });
    });
}

function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-label', 'Image lightbox');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}" class="lightbox-image">
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus management
    const closeButton = lightbox.querySelector('.lightbox-close');
    closeButton.focus();
    
    // Close functionality
    closeButton.addEventListener('click', function() {
        closeLightbox(lightbox);
    });
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox(lightbox);
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeLightbox(lightbox);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function closeLightbox(lightbox) {
    document.body.removeChild(lightbox);
    document.body.style.overflow = ''; // Restore scrolling
}

/**
 * Contact Form Validation and Handling
 */
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const isValid = validateForm(formData);
            
            if (isValid) {
                showSuccessMessage();
                this.reset(); // Clear form after successful submission
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateForm(formData) {
    let isValid = true;
    const requiredFields = ['name', 'email', 'message'];
    
    // Clear all previous errors
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });
    
    // Validate required fields
    requiredFields.forEach(field => {
        const value = formData.get(field);
        const input = document.querySelector(`[name="${field}"]`);
        
        if (!value || value.trim() === '') {
            showFieldError(input, 'This field is required');
            isValid = false;
        }
    });
    
    // Email validation
    const email = formData.get('email');
    if (email && !isValidEmail(email)) {
        const emailInput = document.querySelector('[name="email"]');
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (if provided)
    const phone = formData.get('phone');
    if (phone && phone.trim() !== '' && !isValidPhone(phone)) {
        const phoneInput = document.querySelector('[name="phone"]');
        showFieldError(phoneInput, 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.name;
    
    // Clear previous error
    clearFieldError(input);
    
    // Required field validation
    if (input.hasAttribute('required') && value === '') {
        showFieldError(input, 'This field is required');
        return false;
    }
    
    // Email validation
    if (fieldName === 'email' && value !== '' && !isValidEmail(value)) {
        showFieldError(input, 'Please enter a valid email address');
        return false;
    }
    
    // Phone validation
    if (fieldName === 'phone' && value !== '' && !isValidPhone(value)) {
        showFieldError(input, 'Please enter a valid phone number');
        return false;
    }
    
    return true;
}

function showFieldError(input, message) {
    const errorElement = input.parentNode.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    input.setAttribute('aria-invalid', 'true');
    input.style.borderColor = 'var(--terracotta)';
}

function clearFieldError(input) {
    const errorElement = input.parentNode.querySelector('.form-error');
    if (errorElement) {
        errorElement.classList.remove('show');
        errorElement.textContent = '';
    }
    input.removeAttribute('aria-invalid');
    input.style.borderColor = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Basic phone validation - accepts various formats
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-().]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 7;
}

function showSuccessMessage() {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--soft-green);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        font-family: var(--font-primary);
    `;
    successDiv.textContent = 'Thank you! Your message has been sent successfully.';
    
    document.body.appendChild(successDiv);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        if (document.body.contains(successDiv)) {
            document.body.removeChild(successDiv);
        }
    }, 5000);
}

/**
 * Active Navigation Highlighting
 */
function initializeActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').replace('./', '');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Image Loading Optimization
 */
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Accessibility Enhancements
 */
function initializeAccessibility() {
    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('#main-content') || document.querySelector('main');
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }
    
    // Keyboard navigation for gallery
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
    });
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeLazyLoading();
    initializeAccessibility();
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.remove('nav-menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Could add fallback image logic here if needed
    }
}, true);