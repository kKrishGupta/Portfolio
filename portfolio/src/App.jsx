import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import './index.css'
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor/>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Testimonials/>
      <Contact/>


    </div>
  )
}