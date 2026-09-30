import { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import photo1 from "../assets/photo1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";
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
  return (
    <section id="projects" className="relative text-white">
    </section>
  )
}