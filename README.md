# Dharun Prasanth S - ML Engineer Portfolio

A modern, interactive portfolio website built with React featuring a **Neural Network / AI Tech theme** that perfectly represents an ML Engineer's profile.

![Theme: Neural Network](https://img.shields.io/badge/Theme-Neural%20Network-6366f1)
![Built with React](https://img.shields.io/badge/Built%20with-React-61dafb)

## ✨ Features

- **Interactive Neural Network Background** - Canvas-based animated nodes with mouse interaction
- **Modern Glass Morphism UI** - Clean, professional design with subtle transparency effects
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Fade-in effects, hover interactions, and scroll animations
- **Dark Theme** - Eye-friendly dark color scheme perfect for tech portfolios
- **Modular Components** - Clean, maintainable code structure

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── NeuralBackground.jsx    # Animated background
│   │   ├── Navbar.jsx                  # Navigation bar
│   │   ├── Hero.jsx                    # Hero section with typing effect
│   │   ├── About.jsx                   # About me section
│   │   ├── Skills.jsx                  # Interactive skills display
│   │   ├── Experience.jsx              # Work experience timeline
│   │   ├── Projects.jsx                # Projects with filter
│   │   ├── Achievements.jsx            # Awards & recognition
│   │   ├── Education.jsx               # Education & certifications
│   │   ├── Contact.jsx                 # Contact information
│   │   └── Footer.jsx                  # Footer
│   ├── styles/
│   │   └── globals.css                 # Global styles & theme
│   ├── App.jsx                         # Main app component
│   └── index.js                        # Entry point
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Customization

### Colors
Edit `/src/styles/globals.css` to change the theme colors:

```css
:root {
  --accent-blue: #3b82f6;
  --accent-indigo: #6366f1;
  --accent-violet: #8b5cf6;
  /* ... */
}
```

### Content
Each section has its own component file. Simply edit the data arrays in each component:
- `Hero.jsx` - Name, roles, description
- `About.jsx` - Bio and highlights
- `Skills.jsx` - Technical skills with proficiency levels
- `Experience.jsx` - Work experience
- `Projects.jsx` - Project details
- `Education.jsx` - Education and certifications
- `Contact.jsx` - Contact information

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop build folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
npm run deploy
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🔧 Technologies Used

- React 18
- CSS-in-JS (Inline styles)
- Canvas API (Neural background)
- Google Fonts (Inter, JetBrains Mono)

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

Built with 💜 by Dharun Prasanth S
