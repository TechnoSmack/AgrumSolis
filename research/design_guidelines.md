# Agrum Solis Website Design Guidelines

## Brand Identity and Visual Direction

### Project Overview
Agrum Solis is an agricultural company based in Brindisi, Puglia, specializing in sustainable farming of citrus fruits and various trees across 30 acres. The website design should reflect Mediterranean agricultural heritage, sustainability values, and regional authenticity.

## Color Palette

### Primary Colors
```css
/* Earth Tones - Primary Palette */
--cream-white: #F5F5DC;      /* Backgrounds, text areas */
--golden-yellow: #DAA520;    /* Accent highlights, CTAs */
--terracotta: #E2725B;       /* Headers, important elements */
--deep-brown: #8B4513;       /* Text, navigation */
--warm-beige: #F5DEB3;       /* Secondary backgrounds */
```

### Secondary Colors
```css
/* Natural Accents - Secondary Palette */
--ocean-blue: #4682B4;       /* Links, interactive elements */
--soft-green: #9ACD32;       /* Success states, nature accents */
--muted-gray: #A9A9A9;       /* Subtle text, borders */
--olive-tone: #808000;       /* Agricultural theme accents */
```

### Color Usage Guidelines
- **Backgrounds**: Use cream-white and warm-beige for main content areas
- **Headers**: Terracotta for main headings, deep-brown for subheadings
- **Accents**: Golden-yellow for call-to-action buttons and highlights
- **Links**: Ocean-blue for navigation and interactive elements
- **Success/Nature**: Soft-green for sustainability messaging

## Typography

### Font Recommendations
**Primary Options** (Google Fonts):
1. **Lora** - Elegant serif for headings and body text
2. **Merriweather** - Readable serif with character
3. **Poppins** - Modern sans-serif for clean, contemporary look

### Typography Hierarchy
```css
/* Heading Styles */
h1 { 
  font-size: 2.5rem; 
  color: var(--terracotta);
  font-weight: 700;
}

h2 { 
  font-size: 2rem; 
  color: var(--deep-brown);
  font-weight: 600;
}

h3 { 
  font-size: 1.5rem; 
  color: var(--deep-brown);
  font-weight: 500;
}

/* Body Text */
body { 
  font-size: 1rem; 
  color: var(--deep-brown);
  line-height: 1.6;
}

/* Accent Text */
.accent { 
  color: var(--golden-yellow);
  font-weight: 600;
}
```

## Layout and Structure

### Responsive Design Principles
- **Mobile-First Approach**: Design for mobile devices first, then scale up
- **Flexible Grid System**: Use CSS Grid and Flexbox for responsive layouts
- **Breakpoints**:
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+

### Page Structure Template
```html
<header>
  <nav><!-- Navigation menu --></nav>
</header>

<main>
  <section class="hero"><!-- Hero section with background image --></section>
  <section class="content"><!-- Main content area --></section>
  <section class="features"><!-- Key features or services --></section>
</main>

<footer>
  <!-- Contact information and links -->
</footer>
```

## Visual Design Elements

### Image Treatment
- **Style**: Natural, authentic agricultural photography
- **Lighting**: Warm, golden hour lighting preferred
- **Composition**: Wide landscapes, detailed close-ups of produce
- **Color Harmony**: Images should complement the earth-tone palette

### Button Styles
```css
.btn-primary {
  background-color: var(--golden-yellow);
  color: var(--deep-brown);
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
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

## Page-Specific Guidelines

### Homepage
- **Hero Section**: Large background image of Puglia landscape
- **Color Scheme**: Full primary palette with golden-yellow accents
- **Content Focus**: Company introduction, key services, regional context

### Our Land Page
- **Visual Focus**: Agricultural landscapes and citrus groves
- **Color Emphasis**: Earth tones with soft-green accents
- **Content**: Regional information, farming practices, land characteristics

### Sustainability Page
- **Theme**: Eco-friendly practices and environmental responsibility
- **Color Focus**: Soft-green primary with earth-tone support
- **Visual Elements**: Sustainable farming images, certification badges

### Gallery Page
- **Layout**: Grid-based image gallery
- **Interaction**: Lightbox or modal for image viewing
- **Organization**: Categories (landscapes, citrus, harvesting, architecture)

### Contact Page
- **Background**: Subtle masseria architecture image
- **Form Styling**: Clean, accessible form design
- **Color Scheme**: Neutral with ocean-blue accents for form elements

## Interactive Elements

### Navigation
- **Style**: Horizontal navigation bar
- **Mobile**: Hamburger menu for mobile devices
- **Active States**: Golden-yellow highlighting for current page
- **Hover Effects**: Subtle color transitions

### Forms
- **Input Styling**: Clean borders with focus states
- **Validation**: Soft-green for success, terracotta for errors
- **Accessibility**: Proper labels and contrast ratios

### Weather Widget (Optional)
- **Integration**: Subtle placement, doesn't dominate design
- **Styling**: Consistent with overall color palette
- **Information**: Local weather relevant to agricultural context

## Accessibility Standards

### Color Contrast
- Ensure WCAG 2.1 AA compliance for all text/background combinations
- Test color combinations for accessibility
- Provide alternative indicators beyond color alone

### Typography
- Minimum font size: 16px for body text
- Sufficient line spacing (1.6 line-height minimum)
- Clear hierarchy with proper heading structure

### Images
- Descriptive alt text for all images
- Decorative images marked appropriately
- Consider users with visual impairments

## Technical Specifications

### CSS Framework
- **Approach**: Custom CSS with modern techniques
- **Grid System**: CSS Grid and Flexbox
- **Preprocessor**: Optional Sass/SCSS for organization

### Performance
- **Image Optimization**: WebP format where supported, JPEG fallback
- **CSS Optimization**: Minified CSS for production
- **Loading Strategy**: Critical CSS inline, non-critical CSS deferred

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Graceful Degradation**: Ensure basic functionality in older browsers

## Brand Voice and Messaging

### Tone
- **Authentic**: Genuine agricultural heritage
- **Sustainable**: Environmental responsibility
- **Professional**: Quality and expertise
- **Welcoming**: Approachable and educational

### Key Messages
- Centuries of agricultural tradition in Puglia
- Commitment to sustainable farming practices
- High-quality citrus and agricultural products
- Educational and tourism opportunities
- Regional pride and authenticity

---

*These design guidelines provide a comprehensive framework for creating a cohesive, professional, and authentic website for Agrum Solis that reflects the company's agricultural heritage and commitment to sustainability.*
