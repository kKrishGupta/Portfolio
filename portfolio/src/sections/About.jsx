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

    </section>
  )
}
