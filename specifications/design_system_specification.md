# Agrum Solis Website Design System Specification

## Overview
This document defines the complete design system for the Agrum Solis website based on verified research findings about Mediterranean agricultural aesthetics, Puglia regional design, and sustainable farming visual identity.

---

## Color Palette

### Primary Colors (Earth Tones)
```css
:root {
  --cream-white: #F5F5DC;      /* Backgrounds, text areas */
  --golden-yellow: #DAA520;    /* Accent highlights, CTAs */
  --terracotta: #E2725B;       /* Headers, important elements */
  --deep-brown: #8B4513;       /* Text, navigation */
  --warm-beige: #F5DEB3;       /* Secondary backgrounds */
}
```

### Secondary Colors (Natural Accents)
```css
:root {
  --ocean-blue: #4682B4;       /* Links, interactive elements */
  --soft-green: #9ACD32;       /* Success states, nature accents */
  --muted-gray: #A9A9A9;       /* Subtle text, borders */
  --olive-tone: #808000;       /* Agricultural theme accents */
}
```

### Color Usage Guidelines
- **Backgrounds**: cream-white (#F5F5DC) and warm-beige (#F5DEB3) for main content areas
- **Headers**: terracotta (#E2725B) for main headings, deep-brown (#8B4513) for subheadings
- **Accents**: golden-yellow (#DAA520) for call-to-action buttons and highlights
- **Links**: ocean-blue (#4682B4) for navigation and interactive elements
- **Success/Nature**: soft-green (#9ACD32) for sustainability messaging
- **Text**: deep-brown (#8B4513) for primary text content

---

## Typography

### Font Selection (Google Fonts)
**Primary Choice**: Lora - Elegant serif for headings and body text
**Alternative Options**: Merriweather, Poppins

### Typography Hierarchy
```css
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

h1 { 
  font-family: 'Lora', serif;
  font-size: 2.5rem; 
  color: var(--terracotta);
  font-weight: 700;
}

h2 { 
  font-family: 'Lora', serif;
  font-size: 2rem; 
  color: var(--deep-brown);
  font-weight: 600;
}

h3 { 
  font-family: 'Lora', serif;
  font-size: 1.5rem; 
  color: var(--deep-brown);
  font-weight: 500;
}

body { 
  font-family: 'Lora', serif;
  font-size: 1rem; 
  color: var(--deep-brown);
  line-height: 1.6;
}
```

---

## Layout and Structure

### Responsive Design Principles
- **Mobile-First Approach**: Design for mobile devices first, then scale up
- **Breakpoints**:
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+

### Grid System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: 1fr 1fr; }
}
```

---

## Component Design System

### Button Styles
```css
.btn-primary {
  background-color: var(--golden-yellow);
  color: var(--deep-brown);
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary {
  background-color: transparent;
  color: var(--terracotta);
  border: 2px solid var(--terracotta);
  padding: 10px 22px;
  border-radius: 6px;
}
```

### Card Components
```css
.card {
  background-color: var(--cream-white);
  border: 1px solid var(--muted-gray);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

---

## Page-Specific Design Guidelines

### Homepage Design
- **Hero Section**: Large background image (`puglia_olive_groves.jpg`) with overlay text
- **Color Scheme**: Full primary palette with golden-yellow accents
- **Content Focus**: Company introduction, key services, regional context

### Our Land Page Design
- **Visual Focus**: Agricultural landscapes and citrus groves
- **Color Emphasis**: Earth tones with soft-green accents
- **Content**: Regional information, farming practices, land characteristics

### Sustainability Page Design
- **Theme**: Eco-friendly practices and environmental responsibility
- **Color Focus**: Soft-green primary with earth-tone support
- **Visual Elements**: Sustainable farming images, certification badges

### Gallery Page Design
- **Layout**: Grid-based image gallery (1 column mobile, 2 tablet, 3 desktop)
- **Interaction**: Lightbox or modal for image viewing
- **Organization**: Categories (landscapes, citrus, harvesting, architecture)

### Contact Page Design
- **Background**: Subtle masseria architecture image (`masseria_patio_design.jpg`)
- **Form Styling**: Clean, accessible form design
- **Color Scheme**: Neutral with ocean-blue accents for form elements

---

## Interactive Elements

### Navigation
- **Style**: Horizontal navigation bar
- **Mobile**: Hamburger menu for mobile devices
- **Active States**: Golden-yellow highlighting for current page
- **Hover Effects**: Subtle color transitions

### Forms
```css
.form-input {
  width: 100%;
  padding: 12px;
  border: 2px solid var(--muted-gray);
  border-radius: 4px;
  font-family: 'Lora', serif;
  background-color: var(--cream-white);
}

.form-input:focus {
  border-color: var(--ocean-blue);
  box-shadow: 0 0 0 3px rgba(70, 130, 180, 0.1);
}
```

---

## Accessibility Standards

### Requirements
- **Color Contrast**: WCAG 2.1 AA compliance for all text/background combinations
- **Typography**: Minimum 16px font size, 1.6 line-height
- **Images**: Descriptive alt text for all images
- **Forms**: Proper labels and contrast ratios
- **Keyboard Navigation**: All interactive elements accessible via keyboard

---

## Technical Specifications

### CSS Framework
- **Approach**: Custom CSS with modern techniques (CSS Grid, Flexbox)
- **Performance**: Minified CSS for production, critical CSS inline
- **Browser Support**: Modern browsers with graceful degradation

### Image Treatment
- **Style**: Natural, authentic agricultural photography
- **Lighting**: Warm, golden hour lighting preferred
- **Color Harmony**: Images complement the earth-tone palette
- **Optimization**: WebP format with JPEG fallback

---

## Brand Voice and Visual Identity

### Design Principles
- **Authentic**: Genuine agricultural heritage
- **Sustainable**: Environmental responsibility
- **Professional**: Quality and expertise
- **Welcoming**: Approachable and educational
- **Regional**: Puglia and Mediterranean identity

### Key Visual Themes
- Sun-baked Mediterranean landscapes
- Natural agricultural environments
- Harmonious, organic visual experiences
- Colors inspired by soil, crops, and regional landscapes
- Traditional masseria architectural elements

---

*This design system specification is based entirely on verified research findings about Mediterranean agricultural aesthetics, traditional Puglia design elements, and sustainable farming visual identity.*