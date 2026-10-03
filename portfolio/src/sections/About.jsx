import { motion } from "framer-motion";
import React from "react";
import p from "../assets/p.jpg";

export default function About() {
  const stats = [
    {label:"Experience", value:"1+ months"},
    {label:"Specialization", value:"Full Stack Developer"},
    {label:"Focus", value:"Performance & Scalability"},
  ]

 const glows = [
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-3xl",
  "-bottom-0 -right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-10 blur-[120px]",
];
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

    <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] border border-white/20"
    whileHover ={{scale:1.02}}
    transition ={{type:"spring", stiffness :200, damping:18}}
    >
     <img src={p} alt="profile"  className="absolute inset-0 w-full h-full object-cover"/>
    </motion.div>

    <div className="flex-1 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500">
          Krish Gupta
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold ">
          Full Stack Developer
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
          I build products where design meets intelligence.
Specializing in modern web technologies and scalable architectures, I create seamless applications powered by clean code, responsive UI, and efficient backend systems. My work combines React ecosystems, Java services, TypeScript precision, and AI-driven innovation to deliver applications that are not only functional — but memorable.
        </p>

        <div className="mt-6 grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
          {stats.map((s,i) =>(
           <motion.div key={i} className="inline-block mt-6 mr-6 px-4 py-3 text-center rounded-xl  border border-white/10 "
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.04, delay: i * 0.04}}
            viewport={{ once: true, amount: 0.3 }}>
            <h3 className="text-xl font-bold">{s.value}</h3>
            <p className="text-sm text-white/90">{s.label}</p>
           </motion.div>

          ))}

        </div>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
  <a href="#projects" className="inline-flex items-center justify-center  px-4 py-3 bg-white text-center rounded-lg text-black border border-white/10 hover:bg-gray-200 transition-colors duration-200">
    View Project
  </a>
  <a href="#contact" className="inline-flex items-center justify-center  px-4 py-3 text-white text-center rounded-xl  border border-white/20 hover:bg-white/20 transition-colors duration-200 bg-white/10">
    Get in Touch
  </a>
</div>


    </div>
</motion.div>

<motion.div className="text-center md:text-left max-w-3xl mx-auto"
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6}}
viewport={{ once: true, amount: 0.4 }}
>

  <h3 className ="text-2xl sm:text-3xl font-bold text-white mb-3 ">
   About Me
    </h3>
<p className="text-gray-300 leading-relaxed text-base sm:text-lg">
   I’m a passionate Full Stack Developer who enjoys building fast, scalable, and user-focused digital experiences. I love transforming ideas into impactful products using modern technologies and clean design.
</p>

<p className="text-gray-300 leading-relaxed text-base sm:text-lg">
  I love turing complex problems into simple, elegant solutions. Whether it’s crafting a seamless user interface or optimizing backend performance, I’m driven by the challenge of creating technology that feels effortless for users and powerful behind the scenes.
</p>
  </motion.div>


</div>
    </section>
  )
}
