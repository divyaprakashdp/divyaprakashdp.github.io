# Professional Portfolio

A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with React, Vite, and Tailwind CSS for optimal performance and user experience.

🔗 **[View Live Demo](https://dpfolio.tech)**

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

✨ **Modern Design** - Clean, responsive UI built with Tailwind CSS  
⚡ **Fast Performance** - Optimized with Vite for rapid development and production builds  
📱 **Mobile-First** - Fully responsive across all device sizes  
🎨 **Interactive Elements** - Smooth scrolling, animations, and visual effects using Vanta.js  
📧 **Contact Form** - Integrated email functionality powered by EmailJS  
📄 **Resume Download** - Export resume as PDF with jsPDF  
🎯 **Smooth Navigation** - React Scroll for seamless page navigation  
🔗 **Social Links** - Easy access to social profiles  

---

## Tech Stack

- **Frontend Framework:** React 18.2
- **Build Tool:** Vite 5+
- **Styling:** Tailwind CSS + PostCSS
- **Icons:** React Icons
- **Animations:** Vanta.js
- **Email Service:** EmailJS
- **PDF Generation:** jsPDF
- **Navigation:** React Scroll
- **Linting:** ESLint

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/divyaprakashdp/divyaprakashdp.github.io.git
cd divyaprakashdp.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (if needed):
   - Update any API keys or configuration in relevant component files

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## Project Structure

```
src/
├── App.jsx              # Main application component
├── Navbar.jsx           # Navigation bar
├── Home.jsx             # Hero/landing section
├── Skills.jsx           # Skills showcase
├── Projects.jsx         # Portfolio projects
├── Experience.jsx       # Work experience/timeline
├── Contact.jsx          # Contact form
├── Resume.jsx           # Resume section
├── ResumeForm.jsx       # Resume form component
├── SocialLinks.jsx      # Social media links
├── ScrollToTop.jsx      # Scroll to top utility
├── index.css            # Global styles
├── main.jsx             # Application entry point
└── assets/              # Images and media files

public/                 # Static assets
```

---

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build.

### Preview
```bash
npm run preview
```
Locally preview the production build.

### Lint
```bash
npm run lint
```
Run ESLint to check code quality.

---

## Configuration

### Tailwind CSS
- Configured in `tailwind.config.js`
- PostCSS setup in `postcss.config.js`

### Vite
- Configuration in `vite.config.js`
- React plugin enabled for JSX transformation

### Build Output
- Production build: `dist/` directory
- Optimized with code splitting and minification

---

## Deployment

This portfolio is deployed and accessible at [dpfolio.tech](https://dpfolio.tech)

### Deploy Your Own

The project is hosted on GitHub Pages. To deploy your own version:

1. Update the repository name to `{username}.github.io`
2. Build the project:
```bash
npm run build
```
3. Push to GitHub:
```bash
git push origin main
```
4. Enable GitHub Pages in repository settings (if not already enabled)

---

## Contributing

While this is a personal portfolio project, suggestions and feedback are welcome! Feel free to:
- Report bugs via GitHub Issues
- Suggest improvements
- Submit pull requests

---

## License

This project is open source and available under the MIT License. Feel free to use it as inspiration for your own portfolio!

---

## Support

If you found this portfolio useful or plan to use it as a template, consider giving it a ⭐ on GitHub—it would be greatly appreciated!

For questions or inquiries, feel free to reach out via the contact form on the live site.
