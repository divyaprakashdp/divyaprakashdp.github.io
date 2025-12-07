# Project Structure Guide

This document outlines the professional folder structure and organization of this project.

## Directory Structure

```
src/
├── components/
│   ├── common/                    # Reusable UI components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx        # Navigation component
│   │   │   └── Navbar.module.css (optional)
│   │   ├── SocialLinks/
│   │   │   └── SocialLinks.jsx   # Social media links component
│   │   ├── ScrollToTop/
│   │   │   └── ScrollToTop.jsx   # Scroll to top button
│   │   └── index.js              # Barrel export
│   │
│   ├── sections/                  # Page section components
│   │   ├── Home/
│   │   │   ├── Home.jsx          # Hero section
│   │   │   └── Home.module.css (optional)
│   │   ├── Skills/
│   │   │   ├── Skills.jsx        # Skills showcase
│   │   │   └── Skills.module.css (optional)
│   │   ├── Projects/
│   │   │   ├── Projects.jsx      # Portfolio projects
│   │   │   └── Projects.module.css (optional)
│   │   ├── Experience/
│   │   │   ├── Experience.jsx    # Work experience timeline
│   │   │   └── Experience.module.css (optional)
│   │   ├── Contact/
│   │   │   ├── Contact.jsx       # Contact form
│   │   │   └── Contact.module.css (optional)
│   │   ├── Resume/
│   │   │   ├── Resume.jsx        # Resume component
│   │   │   └── ResumeForm.jsx    # Resume builder form
│   │   └── index.js              # Barrel export
│   │
│   └── (old files remain for backward compatibility)
│
├── hooks/                         # Custom React hooks
│   ├── useScroll.js              # Scroll tracking hook
│   ├── useForm.js                # Form state management hook
│   └── index.js                  # Barrel export
│
├── utils/                         # Utility functions
│   ├── constants.js              # App constants & configuration
│   ├── helpers.js                # Helper functions
│   ├── validators.js             # Form validators
│   └── index.js                  # Barrel export
│
├── services/                      # External service integrations
│   ├── emailService.js           # EmailJS integration
│   ├── resumeService.js          # PDF generation
│   └── index.js                  # Barrel export
│
├── styles/                        # Global styles
│   ├── index.css                 # Main styles
│   └── variables.css (optional)  # CSS custom properties
│
├── assets/                        # Static files
│   ├── images/
│   │   ├── projects/             # Project screenshots
│   │   ├── experience/           # Company logos
│   │   └── profile/              # Profile images
│   └── (other assets)
│
├── App.jsx                        # Root component
├── main.jsx                       # Application entry point
└── index.css                      # Global styles
```

## Importing Components

### Using Barrel Exports (Recommended)

```jsx
import { Navbar, SocialLinks, ScrollToTop } from "./components/common";
import { Home, Skills, Projects } from "./components/sections";
import { useForm, useScroll } from "./hooks";
import { NAV_LINKS, TECH_SKILLS } from "./utils";
import { sendEmail, downloadResumePDF } from "./services";
```

### Direct Imports

```jsx
import Navbar from "./components/common/Navbar/Navbar";
import { useForm } from "./hooks/useForm";
```

## Key Files & Their Purpose

### Constants (`utils/constants.js`)

- Navigation links
- Social media links
- Tech stack data
- Configuration values
- Breakpoints and thresholds

### Helpers (`utils/helpers.js`)

- `getScrollVisibility()` - Check scroll position
- `isMobile()` - Detect mobile devices
- `smoothScrollToTop()` - Smooth scroll animation
- `debounce()` - Debounce function

### Validators (`utils/validators.js`)

- `isValidEmail()` - Email validation
- `isRequired()` - Required field check
- `validateForm()` - Form validation

### Custom Hooks

- `useScroll()` - Track scroll position
- `useNavbarVisibility()` - Navbar visibility logic
- `useForm()` - Form state management

### Services

- `emailService.js` - Send emails via EmailJS
- `resumeService.js` - Generate PDF resumes

## Best Practices

1. **Component Organization**

   - Keep related files in same directory
   - Use index.js for barrel exports
   - Organize by feature/section

2. **Imports**

   - Use barrel exports for cleaner imports
   - Relative imports within components
   - Absolute imports from utils/services

3. **Hooks**

   - Extract complex logic into custom hooks
   - Keep hooks focused and reusable
   - Use meaningful names prefixed with "use"

4. **Constants**

   - Centralize all configuration
   - Use UPPER_SNAKE_CASE for constants
   - Group related constants together

5. **Services**
   - Isolate external API calls
   - Handle errors gracefully
   - Return consistent response format

## Next Steps

1. **Extract More Logic**

   - Create utility hooks for common patterns
   - Move inline styles to CSS modules

2. **Add CSS Modules**

   - Create `Component.module.css` files
   - Avoid global class name conflicts

3. **Add Tests**

   - Create `Component.test.jsx` files
   - Test hooks and utility functions

4. **Environment Configuration**

   - Create `.env.example` file
   - Document environment variables
   - Use `.env.local` for secrets

5. **Documentation**
   - Add JSDoc comments to functions
   - Create component prop types
   - Document API integrations

## Troubleshooting

### Import Issues

- Check barrel export files are properly exporting
- Verify relative path navigation
- Ensure file extensions are correct

### Component Not Rendering

- Check App.jsx imports are correct
- Verify component export statements
- Check console for errors

### Styling Issues

- Check CSS module imports
- Verify Tailwind classes applied
- Check specificity conflicts

---

For more information, see individual component files.
