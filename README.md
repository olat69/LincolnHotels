# Lincoln Hotels - Luxury Hotel Website

A modern, luxury hotel website built with React, TypeScript, and cutting-edge web technologies. This project showcases premium hotel services with elegant animations, responsive design, and sophisticated user experience.

## 🏨 Project Overview

Lincoln Hotels is a high-end hotel website featuring:

- **Luxurious Design**: Premium UI with elegant color schemes and typography
- **Smooth Animations**: Framer Motion and GSAP for engaging user interactions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern Tech Stack**: Built with the latest React ecosystem tools
- **Comprehensive Features**: Room reservations, services showcase, contact forms, and more

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: Material-UI (MUI) for components and theming
- **Animations**: Framer Motion for page transitions, GSAP for complex animations
- **Routing**: React Router for single-page application navigation
- **Date/Time**: MUI Date Pickers with date-fns for reservations
- **Build Tool**: Vite for fast development and optimized builds
- **Fonts**: Google Fonts (Playfair Display, Montserrat)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation with animations
│   └── Footer.tsx      # Footer with social links
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── About.tsx       # Hotel information
│   ├── Services.tsx    # Hotel services showcase
│   ├── Reservations.tsx # Room booking system
│   ├── Chauffeur.tsx   # Luxury transport services
│   ├── Contact.tsx     # Contact form and information
│   ├── Login.tsx       # User authentication
│   └── Signup.tsx      # User registration
├── theme/              # Material-UI theme configuration
│   └── index.ts        # Custom luxury theme
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## ✨ Features

### 🏠 **Home Page**

- Hero section with parallax effects
- Featured rooms carousel
- Service highlights
- Customer testimonials
- Call-to-action sections

### 🏛️ **About Page**

- Hotel history and values
- Luxury amenities showcase
- Awards and recognition
- Team introduction

### 🛎️ **Services Page**

- Comprehensive service listings
- Elegant service cards with animations
- Premium amenities details
- Service booking options

### 🛏️ **Reservations Page**

- Interactive room booking form
- Date and time pickers
- Guest selection options
- Special requests handling
- Form validation

### 🚗 **Chauffeur Services**

- Luxury transportation options
- Vehicle showcase
- Service area coverage
- Booking system integration

### 📞 **Contact Page**

- Contact form with validation
- Hotel location and details
- Interactive elements
- Multiple contact methods

### 👤 **Authentication**

- Login and signup forms
- Form validation
- User-friendly interfaces
- Secure design patterns

## 🎨 Design Features

- **Color Scheme**: Deep navy, gold accents, and elegant neutrals
- **Typography**: Playfair Display for headings, Montserrat for body text
- **Animations**: Smooth page transitions, hover effects, and scroll animations
- **Responsive**: Mobile-first design with Material-UI breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Development

### Prerequisites

- Node.js (v18 or later)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd LincolnHotels

# Install dependencies
npm install

```

### Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

### Environment Setup

The development server will start on `http://localhost:5173` by default. The application supports hot module replacement for fast development.

## 📦 Dependencies

### Core Dependencies

- `react` & `react-dom` - React framework
- `react-router-dom` - Client-side routing
- `@mui/material` - Material-UI components
- `@mui/icons-material` - Material-UI icons
- `@emotion/react` & `@emotion/styled` - CSS-in-JS styling
- `framer-motion` - Animation library
- `gsap` - Advanced animations
- `@mui/x-date-pickers` - Date/time picker components
- `date-fns` - Date utility library

### Development Dependencies

- `typescript` - Type safety
- `@vitejs/plugin-react` - Vite React plugin
- `eslint` - Code linting
- `vite` - Build tool and dev server

## 🌟 Key Features Implementation

### Animation System

- **Framer Motion**: Used for page transitions, component animations, and gesture handling
- **GSAP**: Implemented for complex scroll-triggered animations and timeline controls
- **CSS Transitions**: Material-UI theme integration for consistent micro-interactions

### Form Handling

- **Validation**: Client-side form validation with TypeScript interfaces
- **Date Pickers**: Integrated MUI date/time pickers for reservations
- **User Feedback**: Loading states, error handling, and success notifications

### Responsive Design

- **Mobile-First**: Designed primarily for mobile devices, then scaled up
- **Breakpoints**: Material-UI responsive breakpoints system
- **Flexible Layout**: CSS Grid and Flexbox for complex layouts

## 🔧 Customization

### Theme Customization

The Material-UI theme can be customized in `src/theme/index.ts`:

- Color palette
- Typography scales
- Component overrides
- Spacing and breakpoints

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Animation Customization

- Framer Motion variants in component files
- GSAP timelines in useEffect hooks
- Theme-based transition durations

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `npm run build` then upload `dist/` folder
- **Netlify**: Connect repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload build files to S3 bucket with CloudFront

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- Framer Motion for smooth animations
- GSAP for advanced animation capabilities
- React team for the amazing framework
