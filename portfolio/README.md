# 🚀 Krish Gupta — Developer Portfolio

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.3-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, highly responsive, interactive developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and custom canvas particle animations.

---

## ✨ Features

- 🎭 **Intro Splash Animation**: High-impact intro loader before transitioning seamlessly into the portfolio.
- 🎯 **Typewriter Hero Effect**: Dynamic typewriter role presentation cycling through *Web Developer*, *MERN Stack Developer*, and *Backend Developer*.
- 📜 **Sticky Scroll Project Showcase**: Pinning scroll-driven section displaying projects with layered, z-indexed text title overlays.
- 🔄 **Infinite Scroll Tech Stack Carousel**: Interactive skills ticker responding to scroll direction, wheel events, and mobile touch gestures.
- 🌌 **Interactive Particle Canvas**: Custom HTML5 canvas background rendering dynamic floating particles.
- 🖱️ **Custom Glowing Cursor**: Sleek spring-animated cursor tracking mouse movement across the UI.
- 📱 **Radial Clip-Path Mobile Menu**: Fullscreen overlay menu with circular clip-path reveal animation and smooth section navigation.
- 🎨 **Futuristic Dark Aesthetic**: Neon gradient glows (`#1cd8d2`, `#00bf8f`, `#302b63`), glassmorphism, and responsive layout.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

### Core Languages & Environment
- JavaScript (ES6+), HTML5, CSS3
- Node.js & NPM

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── Resume.pdf            # Downloadable Resume
├── src/
│   ├── assets/               # Project images, avatars, logos
│   ├── components/
│   │   ├── CustomCursor.jsx       # Spring-animated custom cursor
│   │   ├── IntroAnimated.jsx      # Startup splash screen animation
│   │   ├── Navbar.jsx             # Auto-hiding sticky navigation bar
│   │   ├── OverlayMenu.jsx        # Circular clip-path fullscreen menu
│   │   └── ParticlesBackground.jsx # Custom HTML5 particle canvas
│   ├── sections/
│   │   ├── About.jsx              # Developer bio & core statistics
│   │   ├── Contact.jsx            # Contact & outreach section
│   │   ├── Experience.jsx         # Work experience timeline
│   │   ├── Footer.jsx             # Footer with copyright & links
│   │   ├── Home.jsx               # Hero section with typewriter effect
│   │   ├── Project.jsx            # Sticky scroll-driven project showcase
│   │   ├── Skills.jsx             # Infinite interactive skills wheel
│   │   └── Testimonials.jsx       # Testimonials section
│   ├── App.css
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles & Tailwind import
│   └── main.jsx               # Application entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kKrishGupta/Portfolio.git
   cd Portfolio/portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌟 Key Sections

- **Home (`#home`)**: Hero section featuring the typewriter effect, interactive social links (GitHub, LinkedIn, X/Twitter), avatar graphic, and resume download link.
- **About (`#about`)**: Profile spotlight showcasing specialization in Full Stack development, clean architecture, and performance.
- **Skills (`#skills`)**: Continuous marquee carousel showcasing skills including Java, React, JavaScript, Node.js, MongoDB, MySQL, Tailwind CSS, and GitHub.
- **Projects (`#projects`)**: Sticky multi-card showcase with smooth scroll progress tracking and layered typography overlays.

---

## 🔗 Connect With Me

- **GitHub**: [@kKrishGupta](https://github.com/kKrishGupta)
- **LinkedIn**: [Krish Gupta](https://www.linkedin.com/in/krish-gupta-3660b9299/)
- **LeetCode**: [Ad1kFapNzh](https://leetcode.com/u/Ad1kFapNzh/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
