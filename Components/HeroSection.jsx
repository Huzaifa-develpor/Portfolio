import React, { useEffect, useRef } from 'react'

const HeroSection = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-10 lg:px-16 pt-20 bg-black overflow-x-hidden"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Orbitron:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-emerald-400/[0.04] blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div ref={titleRef}>

          {/* Eyebrow label */}
          <p className="font-['Orbitron'] text-[9px] text-emerald-400 tracking-[5px] uppercase mb-8">
            Available for work
          </p>

          {/* Main Name */}
          <h1 className="font-['Syne'] font-extrabold text-white leading-[0.95] tracking-tight mb-6 text-[11vw] sm:text-[8vw] md:text-[7vw] lg:text-[80px] xl:text-[96px]">
            <span className="block">Muhammad</span>
            <span className="block text-emerald-400">Huzaifa</span>
            <span className="block">Anwar</span>
          </h1>

          {/* Subtitle */}
          <p className="font-['Orbitron'] text-[10px] text-gray-600 uppercase tracking-[4px] mb-10">
            MERN Stack Developer&nbsp;&nbsp;|&nbsp;&nbsp;CS Student
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-['Orbitron'] text-[10px] font-bold tracking-[2px] uppercase px-8 py-4 rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.45)] transition-all duration-300 no-underline"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-emerald-400 font-['Orbitron'] text-[10px] font-semibold tracking-[2px] uppercase px-8 py-4 rounded-lg border border-emerald-400/35 hover:bg-emerald-400/8 hover:scale-105 hover:shadow-[0_0_25px_rgba(52,211,153,0.2)] transition-all duration-300 no-underline"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-10 left-0 flex items-center gap-3">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-emerald-400/40" />
          <span className="font-['Orbitron'] text-[8px] text-gray-700 tracking-[3px] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection