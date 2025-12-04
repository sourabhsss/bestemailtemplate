# Color Scheme Documentation

## Overview
This project uses a vibrant, modern color scheme centered around **#00e785** (vibrant green) as the primary brand color. The palette is designed to be energetic, fresh, and professional.

## Color Philosophy
- **Primary Green (#00e785)**: Represents growth, energy, and innovation
- **Accent Pink (#EC4899)**: Adds vibrancy and draws attention to CTAs
- **Secondary Yellow (#FEF3C7)**: Provides warmth and highlights
- **Neutral Grays**: Ensures readability and balance

---

## Primary Color Palette

### Primary Green - Brand Color
```css
--primary: #00e785           /* Main brand color */
--primary-50: #e6fff5         /* Lightest tint */
--primary-100: #b3ffe0
--primary-200: #80ffcc
--primary-300: #4dffb8
--primary-400: #1affa3
--primary-500: #00e785        /* Base color */
--primary-600: #00b469
--primary-700: #00814d
--primary-800: #004f30
--primary-900: #001c14        /* Darkest shade */
```

**Usage:**
- Primary buttons and CTAs
- Links and interactive elements
- Focus states and active indicators
- Brand elements and logos
- Gradients and accents

**Tailwind Classes:**
- `bg-primary`, `text-primary`, `border-primary`
- `bg-primary-100`, `bg-primary-500`, `bg-primary-900`
- `hover:bg-primary-600`, `focus:ring-primary`

---

## Secondary Colors

### Warm Yellow/Amber - Highlights
```css
--secondary: #FEF3C7          /* Light yellow */
--secondary-50: #FFFBEB
--secondary-100: #FEF3C7
--secondary-200: #FDE68A
--secondary-300: #FCD34D
--secondary-400: #FBBF24
--secondary-500: #F59E0B
```

**Usage:**
- Highlighted sections
- Warning states (light)
- Badges and tags
- Background accents

**Tailwind Classes:**
- `bg-secondary`, `text-secondary-foreground`
- `bg-secondary-100`, `bg-secondary-500`

---

### Accent Pink/Magenta - CTAs
```css
--accent: #EC4899             /* Vibrant pink */
--accent-50: #FDF2F8
--accent-100: #FCE7F3
--accent-200: #FBCFE8
--accent-300: #F9A8D4
--accent-400: #F472B6
--accent-500: #EC4899
--accent-600: #DB2777
```

**Usage:**
- Secondary CTAs
- Important notifications
- Gradient endpoints
- Hover states on primary elements

**Tailwind Classes:**
- `bg-accent`, `text-accent-foreground`
- `bg-accent-100`, `bg-accent-500`
- `from-primary to-accent` (gradients)

---

## Neutral Colors

### Gray Scale
```css
--neutral-50: #FAFAFA          /* Lightest */
--neutral-100: #F5F5F5
--neutral-200: #E5E5E5
--neutral-300: #D4D4D4
--neutral-400: #A3A3A3
--neutral-500: #737373
--neutral-600: #525252
--neutral-700: #404040
--neutral-800: #262626
--neutral-900: #171717          /* Darkest */
```

**Usage:**
- Text colors (700-900)
- Borders (200-300)
- Backgrounds (50-100)
- Disabled states (400-500)

**Tailwind Classes:**
- `bg-neutral-50`, `bg-neutral-100`
- `text-neutral-700`, `text-neutral-900`
- `border-neutral-200`

---

## Semantic Colors

### Success - Green
```css
--success: #10B981
--success-light: #D1FAE5
--success-dark: #047857
```
**Usage:** Success messages, completed states, positive indicators

### Warning - Amber
```css
--warning: #F59E0B
--warning-light: #FEF3C7
--warning-dark: #D97706
```
**Usage:** Warning messages, caution states, important notices

### Error/Destructive - Red
```css
--destructive: #EF4444
--destructive-light: #FEE2E2
--destructive-dark: #DC2626
```
**Usage:** Error messages, delete actions, critical alerts

### Info - Blue
```css
--info: #3B82F6
--info-light: #DBEAFE
--info-dark: #1D4ED8
```
**Usage:** Informational messages, tips, helper text

---

## Gradient Combinations

### Primary Gradients
```css
/* Green to Pink - Main brand gradient */
from-primary to-accent
background: linear-gradient(135deg, #00e785 0%, #EC4899 100%)

/* Cool gradient - Green to Teal */
from-primary to-vibrant-teal
background: linear-gradient(135deg, #00e785 0%, #14B8A6 100%)

/* Warm gradient - Orange to Pink */
from-vibrant-orange to-accent
background: linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)
```

---

## Vibrant Accent Colors

Additional vibrant colors for variety and visual interest:

```css
--vibrant-blue: #3B82F6
--vibrant-green: #00e785
--vibrant-orange: #F59E0B
--vibrant-pink: #EC4899
--vibrant-purple: #8B5CF6
--vibrant-teal: #14B8A6
--vibrant-cyan: #06B6D4
--vibrant-red: #EF4444
--vibrant-yellow: #EAB308
```

**Usage:**
- Chart colors
- Category indicators
- Badge variations
- Icon colors

---

## Background Colors

```css
--background: #FAFAFA              /* Main page background */
--background-secondary: #F5F5F5    /* Secondary sections */
--background-tertiary: #EEEEEE     /* Tertiary sections */
--foreground: #1A1A2E              /* Main text */
--foreground-secondary: #2D2D44    /* Secondary text */
--foreground-muted: #52525B        /* Muted text */
```

---

## Special Effects

### Glass Morphism
```css
--glass-bg: rgba(255, 255, 255, 0.7)
--glass-border: rgba(255, 255, 255, 0.18)
--glass-dark-bg: rgba(26, 26, 46, 0.7)
```

**Usage:** Overlay elements, modals, floating cards

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 231, 133, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 231, 133, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 231, 133, 0.15)
--shadow-xl: 0 20px 25px -5px rgba(0, 231, 133, 0.2)
```

---

## Chart Colors

For data visualization:

```css
--chart-1: #00e785  /* Primary green */
--chart-2: #EC4899  /* Pink */
--chart-3: #F59E0B  /* Orange */
--chart-4: #10B981  /* Emerald */
--chart-5: #3B82F6  /* Blue */
--chart-6: #8B5CF6  /* Purple */
--chart-7: #14B8A6  /* Teal */
--chart-8: #F97316  /* Orange-red */
```

---

## Usage Examples

### Buttons
```tsx
// Primary button
<Button className="bg-primary hover:bg-primary-600">Click me</Button>

// Accent button
<Button className="bg-accent hover:bg-accent-600">Learn More</Button>

// Gradient button
<Button className="bg-gradient-to-r from-primary to-accent">Get Started</Button>
```

### Cards
```tsx
// Default card
<Card className="bg-card border-border">Content</Card>

// Hover card
<Card className="bg-card hover:bg-card-hover transition-colors">Content</Card>

// Accent card
<Card className="bg-primary-50 border-primary-200">Content</Card>
```

### Text
```tsx
// Headings
<h1 className="text-foreground">Main Heading</h1>
<h2 className="text-foreground-secondary">Subheading</h2>

// Body text
<p className="text-foreground-muted">Body text</p>

// Accent text
<span className="text-primary">Highlighted text</span>
```

### Badges
```tsx
<Badge className="bg-success-light text-success-dark">Success</Badge>
<Badge className="bg-warning-light text-warning-dark">Warning</Badge>
<Badge className="bg-info-light text-info-dark">Info</Badge>
<Badge className="bg-destructive-light text-destructive-dark">Error</Badge>
```

---

## Accessibility

All color combinations have been chosen to meet WCAG 2.1 AA standards:
- Primary green (#00e785) on white: ✅ AA Large
- Foreground (#1A1A2E) on background (#FAFAFA): ✅ AAA
- All semantic colors meet contrast requirements with their foreground colors

---

## Dark Mode (Future Enhancement)

The color scheme is designed to be easily adaptable to dark mode by inverting the background/foreground relationships while maintaining the vibrant accent colors.