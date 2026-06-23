import React from 'react'

const mernProjects = [
  {
    icon: "🛒",
    title: "E-Commerce Application",
    desc: "Full MERN stack e-commerce with Admin Panel, JWT authentication, product management, search functionality, shopping cart & secure REST APIs.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Express", "Admin Panel"],
    live: "https://car-e-commerce-website-orpin.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Car-E-Commerce-Website",
  },
  {
    icon: "✅",
    title: "Task Manager App",
    desc: "Complete CRUD operations with JWT authentication, protected routes, MongoDB integration & user-specific task management.",
    tags: ["MERN", "JWT", "MongoDB", "REST API"],
    live: "https://task-manager-rho-six-26.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Task-Manager",
  },
  {
    icon: "🔐",
    title: "MERN Auth System",
    desc: "User registration & login, JWT token auth, bcrypt password hashing, authorization middleware & protected routes.",
    tags: ["Node.js", "JWT", "bcrypt", "MongoDB"],
    live: "https://mern-auth-system-oofh.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/MERN-Auth-System",
  },
]

const frontendProjects = [
  {
    icon: "🌤️",
    title: "Weather App",
    desc: "Real-time weather data using OpenWeather API. Search any city and get temperature, humidity, wind speed & conditions.",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    live: "https://weather-web-two-woad.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Weather-Web",
  },
  {
    icon: "✂️",
    title: "Rock Paper Scissors",
    desc: "Interactive rock paper scissors game with score tracking, animations and clean responsive UI.",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://rock-paper-scissor-game-smoky.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Rock-Paper-Scissor_Game",
  },
  {
    icon: "⭕",
    title: "Tic Tac Toe",
    desc: "Two player tic tac toe game with win detection, draw logic and restart functionality.",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://tic-tac-toe-game-ten-khaki.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Tic-Tac-Toe-Game",
  },
  {
    icon: "💱",
    title: "Currency Converter",
    desc: "Real-time exchange rates using external API with dynamic data rendering and clean UI.",
    tags: ["JavaScript", "REST API"],
    live: "https://currency-converter-taupe-pi-79.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Currency-Converter",
  },
  {
    icon: "🧠",
    title: "Quiz Game",
    desc: "Dynamic quiz with multiple questions, score tracking and interactive UI built in vanilla JS.",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://quiz-game-sable-seven.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Quiz-Game",
  },
  {
    icon: "🗂️",
    title: "Personal Portfolio",
    desc: "Fully responsive personal portfolio website with modern UI, smooth animations and all sections.",
    tags: ["React", "Tailwind CSS"],
    live: "https://portfolio-alpha-eosin-13.vercel.app/",
    github: "https://github.com/Huzaifa-develpor/Portfolio",
  },
]

// ── Featured Card (E-Commerce) ─────────────────────────────────────────────
const FeaturedCard = ({ project }) => (
  <div className="relative bg-[#0d0d0d] border border-emerald-400/20 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(52,211,153,0.13)] hover:-translate-y-1 overflow-hidden">
    {/* Top accent line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

    {/* Featured badge */}
    <div className="absolute top-5 right-5">
      <span className="font-['Orbitron'] text-[8px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2.5 py-1 rounded-full tracking-widest uppercase">
        Featured
      </span>
    </div>

    <div className="text-4xl">{project.icon}</div>

    <h3 className="font-['Syne'] text-lg font-bold text-white leading-tight pr-20">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed flex-1">
      {project.desc}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, j) => (
        <span
          key={j}
          className={`text-[11px] font-medium px-3 py-1 rounded-full border font-['Orbitron'] tracking-wide ${
            tag === "Admin Panel"
              ? "text-cyan-400 border-cyan-400/40 bg-cyan-400/5"
              : "text-emerald-400 border-emerald-400/35"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-3 mt-1">
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="flex-1 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg hover:shadow-[0_0_22px_rgba(52,211,153,0.45)] hover:scale-105 transition-all duration-300 no-underline"
      >
        Live Demo
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="flex-1 text-center text-emerald-400 border border-emerald-400/35 font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-emerald-400/8 transition-all duration-300 no-underline"
      >
        GitHub
      </a>
    </div>
  </div>
)

// ── Regular Card ──────────────────────────────────────────────────────────
const ProjectCard = ({ project }) => (
  <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-emerald-400/35 hover:shadow-[0_0_28px_rgba(52,211,153,0.10)] hover:-translate-y-1">
    <div className="text-3xl">{project.icon}</div>

    <h3 className="font-['Syne'] text-[15px] font-bold text-white leading-tight">
      {project.title}
    </h3>

    <p className="text-gray-500 text-[12px] leading-relaxed flex-1">
      {project.desc}
    </p>

    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((tag, j) => (
        <span
          key={j}
          className="text-emerald-400 border border-emerald-400/25 text-[9px] font-medium px-2.5 py-1 rounded-full font-['Orbitron'] tracking-wide"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-2.5 mt-1">
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="flex-1 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-['Orbitron'] text-[9px] font-bold uppercase tracking-wider py-2.5 rounded-lg hover:shadow-[0_0_18px_rgba(52,211,153,0.4)] hover:scale-105 transition-all duration-300 no-underline"
      >
        Live Demo
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="flex-1 text-center text-emerald-400 border border-emerald-400/30 font-['Orbitron'] text-[9px] font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-emerald-400/8 transition-all duration-300 no-underline"
      >
        GitHub
      </a>
    </div>
  </div>
)

// ── Sub Heading ────────────────────────────────────────────────────────────
const SubHeading = ({ title }) => (
  <div className="flex items-center gap-4 mb-8">
    <h3 className="font-['Orbitron'] text-[9px] text-emerald-400 tracking-[3px] uppercase font-semibold whitespace-nowrap">
      {title}
    </h3>
    <div className="flex-1 h-px bg-white/[0.04]" />
  </div>
)

// ── Main ───────────────────────────────────────────────────────────────────
const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6 lg:px-10">
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Orbitron:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="mx-auto max-w-7xl w-full">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['Orbitron'] text-emerald-400 text-[10px] tracking-[4px] uppercase">03</span>
          <div className="w-10 h-px bg-emerald-400/40" />
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
        </div>

        {/* ── MERN ── */}
        <div className="mb-20">
          <SubHeading title="Full Stack — MERN" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeaturedCard project={mernProjects[0]} />
            {mernProjects.slice(1).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        {/* ── Frontend ── */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="font-['Orbitron'] text-[9px] text-emerald-400 tracking-[3px] uppercase font-semibold whitespace-nowrap">
              Frontend
            </h3>
            <div className="flex-1 h-px bg-emerald-400/15" />
          </div>

          <SubHeading title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {frontendProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects