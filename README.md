# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase professional skills, projects, and experience. Features smooth animations, intuitive navigation, and a clean design optimized for all devices.

## 🎯 Overview

This portfolio site serves as a comprehensive platform to display professional work, technical skills, and accomplishments. Built with modern web technologies, it provides visitors with an engaging experience to learn more about your expertise and projects.

## 📋 Features

- **Responsive Design** - Fully mobile-optimized layout that works seamlessly across all devices
- **Smooth Animations** - Engaging fade-in and scroll animations for enhanced user experience
- **Modern UI/UX** - Clean, professional design with intuitive navigation
- **Project Showcase** - Dedicated section to display portfolio projects with descriptions
- **Skills Section** - Visual presentation of technical competencies and expertise
- **Contact Form** - Direct communication channel for potential clients or collaborators
- **Resume Integration** - Easy access to downloadable resume or CV
- **Performance Optimized** - Built with Vite for fast load times and optimal performance

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.3.1** - Next-generation frontend build tool with instant server start and lightning-fast HMR
- **Tailwind CSS 4.2.0** - Utility-first CSS framework for rapid UI development
- **JavaScript (ES6+)** - Modern JavaScript with module support

### UI & Animation Libraries
- **lucide-react 1.8.0** - Beautiful, lightweight icon library
- **react-icons 5.5.0** - Popular icon sets packaged as React components
- **react-intersection-observer 10.0.3** - Intersection Observer Hook for scroll-based animations

### Development Tools

- **ESLint 9.39.1** - Code quality and style enforcement
- **@vitejs/plugin-react 5.1.1** - React Fast Refresh support for Vite

## 📁 Project Structure

```
portfolio_site/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Hero section with introduction
│   │   ├── Header.jsx            # Navigation header with links
│   │   ├── NavLink.jsx           # Reusable navigation link component
│   │   ├── About.jsx             # About section with background info
│   │   ├── Skills.jsx            # Technical skills showcase
│   │   ├── Projects.jsx          # Portfolio projects display
│   │   ├── Resume.jsx            # Resume/CV section
│   │   ├── Contact.jsx           # Contact form and information
│   │   ├── Footer.jsx            # Footer with links and info
│   │   └── AnimatedSection.jsx   # Wrapper for scroll animations
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Global component styles
│   ├── index.css                 # Global styles
│   ├── main.jsx                  # Application entry point
│   └── assets/                   # Images and static assets
├── public/                       # Static public files
├── index.html                    # HTML template
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint rules configuration
└── package.json                 # Dependencies and scripts
```

## 📦 Components

### Header Component
Navigation header with fixed positioning and smooth scroll navigation to different sections.

### Home Component
Hero section featuring introduction, headline, and call-to-action buttons to engage visitors.

### AnimatedSection Component
Wrapper component that provides scroll-triggered fade-in animations for all major sections using the Intersection Observer API.

### About Component
Personal background section detailing professional journey, expertise areas, and career highlights.

### Skills Component
Displays technical skills and competencies organized by category (Frontend, Backend, Tools, etc.).

### Projects Component
Portfolio showcase displaying completed projects with descriptions, technologies used, and links.

### Resume Component
Professional resume/CV section with downloadable resume and career timeline information.

### Contact Component
Contact form and communication details for visitors to reach out with inquiries or opportunities.

### Footer Component
Footer section with copyright information, social media links, and additional navigation.

### NavLink Component
Reusable component for creating styled navigation links throughout the application.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio_site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📝 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR) for instant updates.

### Build
```bash
npm run build
```
Compiles the application for production deployment with optimization and minification.

### Preview
```bash
npm run preview
```
Previews the production build locally before deployment.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality and style consistency.

## 🎨 Customization

### Colors & Styling
Modify Tailwind CSS classes in components to customize colors, spacing, and typography. Update `index.css` for global style overrides.

### Content Updates
- Update project data in `App.jsx` to add or modify portfolio projects
- Edit component content directly in respective component files
- Add images to `src/assets/` folder

### Navigation
Modify links in `Header.jsx` and add smooth scroll navigation to new sections.

## 🔧 Configuration

### Vite Configuration
Modify `vite.config.js` to customize build settings, plugins, and development server options.

### ESLint
Update `eslint.config.js` to enforce specific code standards and quality rules.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
Update `vite.config.js` with your repository name and push to gh-pages branch.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome! Feel free to open issues or pull requests to improve the portfolio.

## 📧 Contact

For inquiries, collaborations, or feedback, please use the contact form on the website or reach out via email.

---

**Built with ❤️ using React and Tailwind CSS**
