# AurumFlux® Landing Page

A modern, responsive landing page for AurumFlux - The Future of Gold Harvesting.

## Features

- **Modern Design**: Eye-catching design with diagonal section dividers and smooth animations
- **Custom Color Palette**:
  - Dark: #1F242B
  - Navy: #284155
  - Gold: #C39340
  - Slate: #33546D
  - Deep Blue: #0D2F44
- **Responsive Navigation**: Desktop menu with mobile-optimized tab navigation
- **Interactive Sections**:
  - Animated Hero Section with canvas background
  - Interactive Technology showcase
  - Live ROI Calculator
  - Science & Engineering validation
  - Environmental commitment
  - Security features
  - Market potential
  - Founder story
  - Investor contact form

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Adding Images

Place your images in the `public/images/` directory with the following names:

1. `aurumflux-system.jpg` - Full system diagram with labeled parts
2. `lab-photos.jpg` - Lab testing results
3. `material-testing.jpg` - Material testing snapshots
4. `modeling-results.jpg` - Modeling results
5. `field-testing.jpg` - Field testing photos
6. `closed-loop-diagram.jpg` - Environmental closed loop infographic
7. `security-features.jpg` - Security and anti-theft features
8. `world-map-deployment.jpg` - Global deployment zones map
9. `founder-photo.jpg` - Founder photograph

The site will work without images (using placeholder icons), but adding actual images will enhance the visual impact.

## Project Structure

```
aurumflux-site/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Responsive navigation
│   │   ├── Hero.tsx           # Hero section with animation
│   │   ├── Technology.tsx     # Interactive technology showcase
│   │   ├── Science.tsx        # Science & validation
│   │   ├── ROICalculator.tsx  # Interactive ROI tool
│   │   ├── Environmental.tsx  # Environmental commitment
│   │   ├── Security.tsx       # Security features
│   │   ├── MarketPotential.tsx # Market analysis
│   │   ├── About.tsx          # Founder story
│   │   └── Contact.tsx        # Investor contact form
│   ├── globals.css            # Global styles & theme
│   └── page.tsx               # Main page component
├── public/
│   └── images/                # Image assets
└── README.md
```

## Key Features

### Diagonal Section Dividers
Each section uses unique diagonal SVG dividers for a modern, flowing design.

### Mobile Navigation
- Desktop: Full horizontal navigation
- Mobile: Technology and About tabs in header + menu dropdown

### Interactive Elements
- Hover effects on technology subsystems
- Live ROI calculator with sliders
- Smooth scroll navigation
- Animated hero section

### Color Scheme
All sections use the custom AurumFlux color palette for brand consistency.

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: Custom CSS animations and Canvas API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions about this project, contact the AurumFlux team at aurum@fluxventures.com
