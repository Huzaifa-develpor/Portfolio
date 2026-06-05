import React from 'react'

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MVC Pattern"],
  },
  {
    category: "Authentication",
    skills: ["JWT", "bcrypt", "Protected Routes", "Auth Middleware"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose ODM", "CRUD Operations"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "npm", "Postman"],
  },
  {
    category: "Concepts",
    skills: ["Component Architecture", "Responsive Design", "API Integration"],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black text-white min-h-screen flex items-center py-24 px-6 lg:px-10"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Orbitron:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="mx-auto max-w-7xl w-full">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['Orbitron'] text-emerald-400 text-[10px] tracking-[4px] uppercase">02</span>
          <div className="w-10 h-px bg-emerald-400/40" />
          <h2 className="font-['Syne'] text-5xl font-extrabold text-white tracking-tight">
            Skills
          </h2>
        </div>

        {/* Skills List */}
        <div className="flex flex-col gap-9">
          {skillsData.map((group, i) => (
            <div key={i}>

              {/* Category row */}
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-['Orbitron'] text-[9px] text-emerald-400 tracking-[3px] uppercase font-semibold whitespace-nowrap">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-white/[0.04]" />
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="border border-emerald-400/20 text-gray-400 font-['Syne'] text-[11px] tracking-[1.5px] uppercase px-4 py-2 rounded-md hover:border-emerald-400/60 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills