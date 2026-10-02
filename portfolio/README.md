# 🚀 Krish Gupta — Full Stack Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Portfolio-00bf8f?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-eight-mu-eb5hr5b9wn.vercel.app/)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.3-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4.4-EA4335?style=for-the-badge&logo=gmail&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, high-performance, interactive developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and custom canvas particle animations.

🔗 **Live Demo**: [https://portfolio-eight-mu-eb5hr5b9wn.vercel.app/](https://portfolio-eight-mu-eb5hr5b9wn.vercel.app/)

---

## ✨ Features & Highlights

- 🎭 **Intro Splash Animation**: High-impact intro sequence before transitioning into the portfolio.
- 🎯 **Typewriter Hero Section**: Dynamic typewriter role presentation cycling through *Web Developer*, *MERN Stack Developer*, and *Backend Developer*.
- 📜 **Sticky Scroll Project Showcase**: Scroll-driven pinned project section featuring layered z-indexed typography overlays.
- 🔄 **Infinite Drag & Scroll Tech Carousel**: Interactive skills ticker responding to scroll direction, mouse wheel events, and mobile touch gestures.
- 👨‍🚀 **Interactive Contact Section**: Responsive contact form with budget selector, dynamic project requirements, form validation, EmailJS integration, and an animated floating astronaut illustration.
- 🌌 **Custom Canvas Particles**: HTML5 canvas rendering floating ambient particles.
- 🖱️ **Custom Glowing Cursor**: Fluid spring-animated custom cursor tracking user interaction.
- 📱 **Radial Clip-Path Mobile Menu**: Fullscreen overlay menu with circular clip-path reveal transitions.
- 🎨 **Modern Dark Aesthetic**: Futuristic neon gradient glows (`#1cd8d2`, `#00bf8f`, `#302b63`), glassmorphism, and responsive layouts.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Form Mailer**: [@emailjs/browser](https://www.emailjs.com/)

### Core Concepts & Languages
- JavaScript (ES6+), HTML5 Canvas, CSS3
- Data Structures & Algorithms, RESTful APIs, Component-Driven UI

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── Resume.pdf                 # Downloadable Resume
├── src/
│   ├── assets/                    # Project screenshots, astronaut illustrations, logos
│   ├── components/
│   │   ├── CustomCursor.jsx       # Spring-animated custom cursor
│   │   ├── IntroAnimated.jsx      # Startup splash screen loader
│   │   ├── Navbar.jsx             # Smart auto-hiding navigation bar
│   │   ├── OverlayMenu.jsx        # Circular clip-path fullscreen menu
│   │   └── ParticlesBackground.jsx # HTML5 particle canvas engine
│   ├── sections/
│   │   ├── About.jsx              # Bio, experience stats & focus areas
│   │   ├── Contact.jsx            # Interactive contact form with EmailJS
│   │   ├── Footer.jsx             # Branding, social links & back-to-top link
│   │   ├── Home.jsx               # Hero section with animated typewriter effect
│   │   ├── Project.jsx            # Scroll-driven pinned project showcase
│   │   └── Skills.jsx             # Infinite interactive skills wheel
│   ├── App.css
│   ├── App.jsx                    # Root application component
│   ├── index.css                  # Global styles & Tailwind entry
│   └── main.jsx                   # React DOM entry point
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions CI/CD workflow
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

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

3. **Configure Environment Variables** (Optional, for EmailJS):
   Create a `.env` file inside `portfolio/`:
   ```env
   VITE_SERVICE=your_emailjs_service_id
   VITE_TEMP=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌟 Sections Overview

| Section | Description |
| :--- | :--- |
| **Home (`#home`)** | Hero banner with typewriter role animation, avatar spotlight, resume download, and quick social links. |
| **About (`#about`)** | Developer bio, specialization highlights, full-stack philosophy, and key statistics. |
| **Skills (`#skills`)** | Continuous marquee ticker featuring Java, React, JavaScript, Node.js, MongoDB, MySQL, Tailwind CSS, and GitHub. |
| **Projects (`#projects`)** | Scroll-driven pinned showcase with layered typography overlays and live project links. |
| **Contact (`#contact`)** | Interactive inquiry form with budget selector, project idea input, status feedback, and animated floating astronaut. |
| **Footer** | Bold typography branding, verified social links, and smooth back-to-top navigation. |

---

## 🔗 Connect With Me

- **GitHub**: [@kKrishGupta](https://github.com/kKrishGupta)
- **LinkedIn**: [Krish Gupta](https://www.linkedin.com/in/krish-gupta-3660b9299/)
- **LeetCode**: [Ad1kFapNzh](https://leetcode.com/u/Ad1kFapNzh/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
