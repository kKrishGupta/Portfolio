import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import IntroAnimation from "./components/IntroAnimated";
import './index.css'
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import React from "react";
import { useState } from "react";
export default function App() {
  const [introDone,setIntroDone] = useState(false);
  return (

    <>
   {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)}/>} 

   {introDone && (
  
    <div className="relative gradient text-white">
      <CustomCursor/>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>


    </div>
    )}
    </>
  )
}