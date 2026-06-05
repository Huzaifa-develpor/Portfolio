import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"]
  const [activeSection, setActiveSection] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      )
      const scrollPosition = window.scrollY + 150
      sections.forEach((section, index) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(navLinks[index])
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <div className="font-['Orbitron'] text-3xl font-bold tracking-wider text-white">
          HZF<span className="text-emerald-400">.</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveSection(link)}
                className={`font-['Orbitron'] text-[10px] uppercase tracking-[3px] transition-all duration-300 ${
                  activeSection === link
                    ? "text-emerald-400"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=huzaifaanwar575@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.45)] md:block no-underline"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg border border-white/10 bg-white/5"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/95 border-t border-white/8`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => { setActiveSection(link); setMenuOpen(false) }}
                className={`block py-3 font-['Orbitron'] text-[10px] uppercase tracking-[3px] transition-all duration-300 border-b border-white/5 ${
                  activeSection === link ? "text-emerald-400" : "text-gray-500 hover:text-white"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=huzaifaanwar575@gmail.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-center rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider text-black no-underline"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar