import { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
const useIsMobile = (query = "(max-width : 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", handler);
  }, [query])

  return isMobile;
}
export default function Project() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);
  const projects = useMemo(() => [{
    title: "AI Interview and Resume Builder",
    link: "",
    bgColor: "",
    image: isMobile ? photo1 : img1
  }, {
    title: "Project2",
    link: "",
    bgColor: "",
    image: isMobile ? photo2 : img2
  }, {
    title: "Project3",
    link: "",
    bgColor: "",
    image: isMobile ? photo3 : img3
  }
  ], [isMobile]);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  });

  const threshold = projects.map((_, i) => (i + 1) / (projects.length));
  // console.log(threshold);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = threshold.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? threshold.length - 1 : idx);
  })

  const activeProject = projects[activeIndex];


  return (
    <section id="projects" ref={sceneRef} style={{ height: `${projects.length * 100}vh`, backgroundColor: activeProject.bgColor, transition: "background-color 400ms ease" }} className="relative text-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center ">
        <h2 className={`text-3xl font-semibold z-10 text-center ${isMobile ? "mt-4" : "mt-8"} `}>
          My Work
        </h2>
        <div className={`relative w-full flex-1 flex items-center justify-center ${isMobile ? "-mt-4" : ""
          }`}>
          {projects.map((project, idx) => (
            <div key={project.title} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}>
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3 key={project.title} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.6, ease: "easeOut" }} className="absolute -top-8 sm:-top-12 lg:-top-16 left-0 sm:left-4 lg:left-6 max-w-[300px] sm:max-w-[500px] lg:max-w-[650px] text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white italic font-bold leading-[0.9] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] pointer-events-none select-none" style={{ zIndex: 30, textAlign: "left" }}>
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl md: shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
                } h-[62vh] sm:h-[66vh] 
              `}
                style={{ zIndex: 10, transition: "box-shadow 250ms ease" }}>
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    filter: "drop-shadow(0,16px 40px rgba(0,0,0,0.65))",
                    transition: "filter 200ms ease"
                  }}

                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0"
                  style={{
                    zIndex: 10,
                    background: "linear-gradient(100deg,rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
                  }}>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"
          } z-30`}>
          <a href={activeProject?.link} target="_blank" rel="noopener noreferrer"
            className="inline=block px-6 py-3 font-semibold rounded--lg bg-white text-black hover:bg-gray-200 transition-all"
            aria-label={`View ${activeProject?.title || "Unknown"} project`}>
            View Project
          </a>
        </div>
      </div>
    </section>
  )
}