# Agrum Solis Website Technical Implementation Guidelines

## Overview
This document provides comprehensive technical requirements for implementing the Agrum Solis website based on verified research findings. All specifications are derived from authenticated data about Mediterranean agricultural design, Puglia regional aesthetics, and sustainable farming practices.

---

## Project Structure Requirements

### Directory Structure
```
final/
├── index.html              # Homepage
├── our-land.html           # Our Land page
├── sustainability.html     # Sustainability page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet with responsive design
├── js/
│   └── main.js             # Interactive functionality
└── images/                 # Optimized web images (copied from ../assets/)
```

### File Organization Principles
- **Semantic HTML5**: Use proper semantic elements for accessibility and SEO
- **Modular CSS**: Organized stylesheet with clear sections and comments
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile-First**: Design and code for mobile devices first

---

## HTML5 Semantic Structure

### Base HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Page-specific description]">
    <title>[Page Title] - Agrum Solis | Sustainable Agriculture in Puglia</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <header class="site-header">
        <nav class="main-navigation" role="navigation" aria-label="Main navigation">
            <!-- Navigation content -->
        </nav>
    </header>

    <main class="main-content">
        <!-- Page-specific content sections -->
    </main>

    <footer class="site-footer">
        <!-- Footer content -->
    </footer>

    <script src="./js/main.js"></script>
</body>
</html>
```

### Page-Specific HTML Structures

#### Homepage (index.html)
```html
<main class="main-content">
    <section class="hero-section" role="banner">
        <div class="hero-content">
            <h1>Agrum Solis - Sustainable Agriculture in Puglia</h1>
            <p class="hero-subtitle">30 acres of citrus groves and sustainable farming in Brindisi, Puglia</p>
            <a href="./our-land.html" class="btn btn-primary">Discover Our Land</a>
        </div>
        <img src="./images/puglia_olive_groves.jpg" alt="Traditional Puglia olive groves in countryside setting" class="hero-background">
    </section>

    <section class="intro-section">
        <div class="container">
            <h2>Agricultural Heritage in Brindisi</h2>
            <!-- Content based on research findings -->
        </div>
    </section>

    <section class="regional-context-section">
        <div class="container grid-2">
            <div class="content-column">
                <h3>Mediterranean Climate Excellence</h3>
                <!-- Research-based content -->
            </div>
            <div class="image-column">
                <img src="./images/citrus_cultivation_mediterranean.jpg" alt="Mediterranean citrus cultivation showing mature citrus trees" class="content-image">
            </div>
        </div>
    </section>

    <section class="commitment-section">
        <div class="container">
            <h2>Our Commitment to Quality</h2>
            <img src="./images/mediterranean_citrus_variety.jpg" alt="Variety of Mediterranean citrus fruits including oranges, lemons, and limes" class="featured-image">
            <!-- Research-based content -->
        </div>
    </section>
</main>
```

#### Navigation Component
```html
<nav class="main-navigation" role="navigation" aria-label="Main navigation">
    <div class="container">
        <div class="nav-brand">
            <a href="./index.html" class="brand-link">Agrum Solis</a>
        </div>
        <button class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
        <ul class="nav-menu" role="menubar">
            <li class="nav-item" role="none">
                <a href="./index.html" class="nav-link" role="menuitem">Home</a>
            </li>
            <li class="nav-item" role="none">
                <a href="./our-land.html" class="nav-link" role="menuitem">Our Land</a>
            </li>
            <li class="nav-item" role="none">
                <a href="./sustainability.html" class="nav-link" role="menuitem">Sustainability</a>
            </li>
            <li class="nav-item" role="none">
                <a href="./gallery.html" class="nav-link" role="menuitem">Gallery</a>
            </li>
            <li class="nav-item" role="none">
                <a href="./contact.html" class="nav-link" role="menuitem">Contact</a>
            </li>
        </ul>
    </div>
</nav>
```

---

## CSS Organization and Structure

### CSS File Structure (style.css)
```css
/* ==========================================================================
   Agrum Solis Website Styles
   Based on Mediterranean agricultural design research
   ========================================================================== */

/* 1. CSS Reset and Normalize */
/* 2. CSS Custom Properties (Design System Variables) */
/* 3. Base Styles (Typography, Layout) */
/* 4. Component Styles (Buttons, Cards, Forms) */
/* 5. Layout Styles (Header, Navigation, Footer) */
/* 6. Page-Specific Styles */
/* 7. Media Queries (Mobile-First Responsive) */
/* 8. Utility Classes */

/* CSS Custom Properties - Based on Research Color Palette */
:root {
  /* Primary Colors (Earth Tones) */
  --cream-white: #F5F5DC;
  --golden-yellow: #DAA520;
  --terracotta: #E2725B;
  --deep-brown: #8B4513;
  --warm-beige: #F5DEB3;
  
  /* Secondary Colors (Natural Accents) */
  --ocean-blue: #4682B4;
  --soft-green: #9ACD32;
  --muted-gray: #A9A9A9;
  --olive-tone: #808000;
  
  /* Typography */
  --font-primary: 'Lora', serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Breakpoints */
  --mobile-max: 767px;
  --tablet-min: 768px;
  --desktop-min: 1024px;
}
```

### Responsive Design Implementation
```css
/* Mobile-First Base Styles */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

/* Grid System */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

/* Tablet Styles */
@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .grid-2 {
    grid-template-columns: 1fr 1fr;
  }
  
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .container {
    padding: 0 var(--spacing-lg);
  }
  
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Image Optimization and Implementation

### Image Processing Requirements
Based on the verified image assets catalog, all images must be:

1. **Optimized for Web Performance**
   - Convert to WebP format with JPEG fallback
   - Compress while maintaining visual quality
   - Create multiple sizes for responsive design

2. **Responsive Image Implementation**
```html
<!-- Example for hero images -->
<picture>
  <source media="(min-width: 1024px)" srcset="./images/puglia_olive_groves-large.webp" type="image/webp">
  <source media="(min-width: 1024px)" srcset="./images/puglia_olive_groves-large.jpg" type="image/jpeg">
  <source media="(min-width: 768px)" srcset="./images/puglia_olive_groves-medium.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="./images/puglia_olive_groves-medium.jpg" type="image/jpeg">
  <source srcset="./images/puglia_olive_groves-small.webp" type="image/webp">
  <img src="./images/puglia_olive_groves-small.jpg" alt="Traditional Puglia olive groves in countryside setting" class="hero-background">
</picture>
```

### Specific Image Implementations

#### Verified Images from Research (13 total):
1. `citrus_cultivation_mediterranean.jpg` - Homepage hero, Our Land page
2. `citrus_groves_italy.jpg` - Gallery, agricultural showcase
3. `italian_orange_farming.jpg` - Our Land header, sustainability
4. `amalfi_lemon_trees.jpg` - Gallery, Mediterranean context
5. `puglia_olive_plains.jpg` - Our Land, regional context
6. `puglia_olive_groves.jpg` - Homepage background, Our Land hero
7. `brindisi_ostuni_countryside.jpg` - Regional context, Our Land
8. `lemon_investment_farming.jpg` - Sustainability page, practices
9. `mediterranean_sustainable_farming.jpg` - Sustainability header
10. `amalfi_lemon_harvesting.jpg` - Gallery, seasonal activities
11. `mediterranean_citrus_variety.jpg` - Products, homepage showcase
12. `masseria_traditional_architecture.jpg` - About, heritage
13. `masseria_patio_design.jpg` - Contact background, visitor experience

### Image CSS Implementation
```css
/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

/* Hero Images */
.hero-background {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery-image:hover {
  transform: scale(1.05);
}
```

---

## Interactive Elements and JavaScript

### Required JavaScript Functionality

#### Navigation Toggle (Mobile)
```javascript
// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('nav-menu-open');
        });
    }
    
    // Gallery Lightbox Functionality
    initializeGallery();
    
    // Contact Form Validation
    initializeContactForm();
    
    // Optional Weather Widget
    if (document.querySelector('.weather-widget')) {
        initializeWeatherWidget();
    }
});
```

#### Gallery Lightbox Implementation
```javascript
function initializeGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
}

function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}" class="lightbox-image">
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close functionality
    lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
        document.body.removeChild(lightbox);
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
}
```

#### Contact Form Validation
```javascript
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const isValid = validateForm(formData);
            
            if (isValid) {
                // Form submission logic
                showSuccessMessage();
            }
        });
    }
}

function validateForm(formData) {
    let isValid = true;
    const requiredFields = ['name', 'email', 'message'];
    
    requiredFields.forEach(field => {
        const value = formData.get(field);
        const input = document.querySelector(`[name="${field}"]`);
        
        if (!value || value.trim() === '') {
            showFieldError(input, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(input);
        }
    });
    
    // Email validation
    const email = formData.get('email');
    if (email && !isValidEmail(email)) {
        const emailInput = document.querySelector('[name="email"]');
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    return isValid;
}
```

---

## Form Implementation

### Contact Form HTML Structure
```html
<form class="contact-form" method="POST" action="#" novalidate>
    <div class="form-group">
        <label for="name" class="form-label">Name *</label>
        <input type="text" id="name" name="name" class="form-input" required aria-describedby="name-error">
        <div id="name-error" class="form-error" role="alert"></div>
    </div>
    
    <div class="form-group">
        <label for="email" class="form-label">Email *</label>
        <input type="email" id="email" name="email" class="form-input" required aria-describedby="email-error">
        <div id="email-error" class="form-error" role="alert"></div>
    </div>
    
    <div class="form-group">
        <label for="phone" class="form-label">Phone</label>
        <input type="tel" id="phone" name="phone" class="form-input">
    </div>
    
    <div class="form-group">
        <label for="subject" class="form-label">Subject</label>
        <select id="subject" name="subject" class="form-select">
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="visit">Farm Visit</option>
            <option value="sustainability">Sustainability Practices</option>
            <option value="tourism">Agricultural Tourism</option>
            <option value="other">Other</option>
        </select>
    </div>
    
    <div class="form-group">
        <label for="message" class="form-label">Message *</label>
        <textarea id="message" name="message" class="form-textarea" rows="5" required aria-describedby="message-error"></textarea>
        <div id="message-error" class="form-error" role="alert"></div>
    </div>
    
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

---

## Performance Optimization

### Critical CSS Strategy
1. **Inline Critical CSS**: Above-the-fold styles in `<head>`
2. **Deferred CSS**: Non-critical styles loaded asynchronously
3. **Font Loading**: Optimized Google Fonts with `display=swap`

### Image Optimization Checklist
- [ ] Convert all images to WebP with JPEG fallback
- [ ] Create responsive image sizes (small: 480px, medium: 768px, large: 1200px)
- [ ] Compress images while maintaining quality
- [ ] Add proper alt text for accessibility
- [ ] Implement lazy loading for below-the-fold images

### JavaScript Optimization
- [ ] Minify JavaScript for production
- [ ] Use event delegation for better performance
- [ ] Implement progressive enhancement
- [ ] Add error handling for all interactive features

---

## Accessibility Implementation

### WCAG 2.1 AA Compliance Requirements

#### Color and Contrast
- All text/background combinations meet 4.5:1 contrast ratio
- Interactive elements have clear focus indicators
- Information conveyed through color has alternative indicators

#### Keyboard Navigation
```css
/* Focus Indicators */
.btn:focus,
.nav-link:focus,
.form-input:focus {
    outline: 2px solid var(--ocean-blue);
    outline-offset: 2px;
}

/* Skip Link */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--deep-brown);
    color: var(--cream-white);
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
}

.skip-link:focus {
    top: 6px;
}
```

#### Screen Reader Support
- Proper heading hierarchy (H1 → H2 → H3)
- Descriptive alt text for all images
- ARIA labels for interactive elements
- Form labels properly associated with inputs

---

## Browser Support and Testing

### Target Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: Basic functionality in older browsers

### Testing Checklist
- [ ] Cross-browser compatibility testing
- [ ] Mobile device testing (iOS/Android)
- [ ] Accessibility testing with screen readers
- [ ] Performance testing (PageSpeed Insights)
- [ ] Form functionality testing
- [ ] Image loading and optimization testing

---

## Deployment Requirements

### Pre-Deployment Checklist
- [ ] All images optimized and properly sized
- [ ] CSS minified and optimized
- [ ] JavaScript minified and error-free
- [ ] All links working correctly
- [ ] Forms properly configured
- [ ] Accessibility standards met
- [ ] Performance benchmarks achieved
- [ ] Cross-browser testing completed

### File Structure Validation
Ensure all files match the required structure:
```
final/
├── index.html ✓
├── our-land.html ✓
├── sustainability.html ✓
├── gallery.html ✓
├── contact.html ✓
├── css/style.css ✓
├── js/main.js ✓
└── images/ (13 optimized images) ✓
```

---

*These technical implementation guidelines are based entirely on verified research findings about Mediterranean agricultural design, Puglia regional aesthetics, sustainable farming practices, and modern web development standards. All specifications ensure authentic representation of Agrum Solis's agricultural heritage and commitment to sustainability.*