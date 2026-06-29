import React from 'react'

const timeline = [
  {
    year: "2026",
    title: "Seeking Opportunities",
    desc: "Targeting MERN Stack roles — production-ready and fast learner.",
    current: true,
  },
  {
    year: "2025",
    title: "Started Building Projects",
    desc: "Built E-Commerce & Task Manager with full authentication, REST APIs, MongoDB.",
    current: false,
  },
  {
    year: "2024",
    title: "Started Development",
    desc: "Began learning web development — HTML, CSS, JavaScript and frontend fundamentals.",
    current: false,
  },
  {
    year: "2024",
    title: "Started CS Degree",
    desc: "Began Computer Science studies and deep-dived into web development.",
    current: false,
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white min-h-screen flex items-center py-24 px-6 lg:px-10"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Orbitron:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="mx-auto max-w-7xl w-full">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['Orbitron'] text-emerald-400 text-[10px] tracking-[4px] uppercase">01</span>
          <div className="w-10 h-px bg-emerald-400/40" />
          <h2 className="font-['Syne'] text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <div className="flex flex-col gap-5">
            <p className="text-gray-500 text-[14px] leading-[1.95]">
              I'm a{" "}
              <span className="text-emerald-400 font-semibold">Computer Science student</span>{" "}
              and aspiring{" "}
              <span className="text-emerald-400 font-semibold">Full Stack MERN Developer</span>{" "}
              focused on building production-ready web applications — not just tutorial projects.
            </p>
            <p className="text-gray-500 text-[14px] leading-[1.95]">
              I've gone beyond tutorials — building real apps with{" "}
              <span className="text-white font-medium">authentication, databases, REST APIs</span>{" "}
              and deploying them. My long-term goal is to specialize in{" "}
              <span className="text-emerald-400 font-semibold">AI Automation</span>.
            </p>
            <p className="text-gray-500 text-[14px] leading-[1.95]">
              I take code seriously. Every project I build is an attempt to write cleaner,
              more scalable code than the last one.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-3">
              <a
                href="https://www.linkedin.com/in/huzaifa-anwar-59a889334"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all duration-300 no-underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Huzaifa-develpor"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 font-['Orbitron'] text-[10px] font-semibold uppercase tracking-wider px-6 py-3 rounded-lg border border-emerald-400/35 hover:bg-emerald-400/8 transition-all duration-300 no-underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right — Timeline */}
          <div>
            <h3 className="font-['Orbitron'] text-[9px] text-emerald-400 tracking-[3px] uppercase mb-8">
              Journey
            </h3>

            <div className="relative pl-6 border-l border-white/[0.06]">
              {timeline.map((item, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  {/* Dot */}
                  <div
                    className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full"
                    style={{
                      background: item.current ? "#34d399" : "transparent",
                      border: item.current ? "none" : "1px solid rgba(52,211,153,0.3)",
                      boxShadow: item.current ? "0 0 12px rgba(52,211,153,0.55)" : "none",
                    }}
                  />

                  {/* Year + NOW badge */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-['Orbitron'] text-[9px] text-emerald-400 tracking-[2px] uppercase font-bold">
                      {item.year}
                    </span>
                    {item.current && (
                      <span className="text-[8px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 rounded px-1.5 py-0.5 tracking-widest font-['Orbitron']">
                        NOW
                      </span>
                    )}
                  </div>

                  <h4 className="text-[13px] font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About