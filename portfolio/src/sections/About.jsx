import { motion } from "framer-motion";
import React from "react";
import p from "../assets/p.jpg";

export default function About() {
  const glows = [
    "-top-10 -left-10 w-90 h-90 opacity-20 blur-3xl ",
    "-bottom-0 -right-10 w-105 h-105 opacity-15 blur-35 delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 opacity-10 blur-[120px] ",
  ]
  return (
    <section id="about"
    className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c,i) =>(
          <div key={i} className={`absolute rounded-full  bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}/>
        ))}
      </div>

<div className=" relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg: px-12 py-20 flex flex-col gap-12">

<motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6}}
viewport={{ once: true, amount: 0.4 }}>

    <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadown-2xl bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] border border-white/20">
     <img src={p} alt="profile" className="absolute inset-0" />
    </motion.div>

    <div className="flex-1 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500">
          Krish Gupta
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold ">
          Full Stack Developer
        </p>
    </div>
</motion.div>
</div>
    </section>
  )
}
