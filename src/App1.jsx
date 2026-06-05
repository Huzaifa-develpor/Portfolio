// import { useState, useEffect, useRef } from "react";

// const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

// const SKILLS = {
//   Frontend: ["React.js", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3"],
//   Backend: ["Node.js", "Express.js"],
//   Database: ["MongoDB"],
//   Auth: ["JWT", "bcrypt"],
//   Tools: ["Git", "GitHub", "VS Code", "npm"],
//   Concepts: ["REST APIs", "CRUD", "Responsive Design", "Component Architecture"],
// };

// const PROJECTS = [
//   {
//     title: "E-Commerce Application",
//     desc: "Full MERN stack e-commerce with JWT auth, product management, shopping cart, order management & secure REST APIs.",
//     tags: ["React", "Node.js", "MongoDB", "JWT", "Express"],
//     live: "#",
//     github: "https://github.com/Huzaifa-develpor",
//     featured: true,
//     icon: "🛒",
//   },
//   {
//     title: "Task Manager App",
//     desc: "Complete CRUD operations with JWT authentication, protected routes, MongoDB integration & user-specific task management.",
//     tags: ["MERN", "JWT", "MongoDB", "REST API"],
//     live: "#",
//     github: "https://github.com/Huzaifa-develpor",
//     featured: true,
//     icon: "✅",
//   },
//   {
//     title: "MERN Auth System",
//     desc: "User registration & login, JWT token auth, bcrypt password hashing, authorization middleware & protected routes.",
//     tags: ["Node.js", "JWT", "bcrypt", "MongoDB"],
//     live: "#",
//     github: "https://github.com/Huzaifa-develpor",
//     featured: true,
//     icon: "🔐",
//   },
//   {
//     title: "Today List App",
//     desc: "React + Tailwind task manager with add, edit, delete, complete tasks and separate completed section.",
//     tags: ["React", "Tailwind CSS"],
//     live: "#",
//     github: "https://github.com/Huzaifa-develpor",
//     featured: false,
//     icon: "📝",
//   },
//   {
//     title: "Currency Converter",
//     desc: "Real-time exchange rates using external API with dynamic data rendering.",
//     tags: ["JavaScript", "REST API"],
//     live: "#",
//     github: "https://github.com/Huzaifa-develpor",
//     featured: false,
//     icon: "💱",
//   },
//   {
//     title: "Quiz Game",
//     desc: "Dynamic quiz with multiple questions, score tracking and interactive UI.",
//     tags: ["JavaScript", "HTML", "CSS"],
//     live: "#",
//     github: "https://github.com/Huzaifa-develpor",
//     featured: false,
//     icon: "🧠",
//   },
// ];

// const TIMELINE = [
//   { year: "2024", title: "Frontend Dev Virtual Internship", desc: "Completed professional frontend development internship." },
//   { year: "2024", title: "Full Stack MERN Journey", desc: "Built E-Commerce & Task Manager with full authentication." },
//   { year: "2023", title: "Started CS Degree", desc: "Began Computer Science studies — dived deep into web dev." },
// ];

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// function AnimatedSection({ children, className = "", delay = 0 }) {
//   const [ref, inView] = useInView();
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0px)" : "translateY(40px)",
//         transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// function Cursor() {
//   const [pos, setPos] = useState({ x: -100, y: -100 });
//   const [big, setBig] = useState(false);
//   useEffect(() => {
//     const move = (e) => setPos({ x: e.clientX, y: e.clientY });
//     const over = (e) => { if (e.target.closest("a,button,[data-hover]")) setBig(true); };
//     const out = () => setBig(false);
//     window.addEventListener("mousemove", move);
//     window.addEventListener("mouseover", over);
//     window.addEventListener("mouseout", out);
//     return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); window.removeEventListener("mouseout", out); };
//   }, []);
//   return (
//     <>
//       <div style={{ position: "fixed", left: pos.x - 5, top: pos.y - 5, width: 10, height: 10, borderRadius: "50%", background: "#00ff87", pointerEvents: "none", zIndex: 9999, transition: "transform 0.1s", transform: big ? "scale(3)" : "scale(1)" }} />
//       <div style={{ position: "fixed", left: pos.x - 20, top: pos.y - 20, width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(0,255,135,0.3)", pointerEvents: "none", zIndex: 9998, transition: "left 0.12s, top 0.12s, width 0.3s, height 0.3s", }} />
//     </>
//   );
// }

// export default function Portfolio() {
//   const [active, setActive] = useState("Home");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showAll, setShowAll] = useState(false);
//   const [typed, setTyped] = useState("");
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const roles = ["Full Stack Developer", "MERN Stack Dev", "React Specialist", "CS Student"];
//   const [roleIdx, setRoleIdx] = useState(0);

//   useEffect(() => {
//     const role = roles[roleIdx];
//     let i = 0;
//     setTyped("");
//     const t = setInterval(() => {
//       setTyped(role.slice(0, i + 1));
//       i++;
//       if (i === role.length) {
//         clearInterval(t);
//         setTimeout(() => setRoleIdx((p) => (p + 1) % roles.length), 1800);
//       }
//     }, 60);
//     return () => clearInterval(t);
//   }, [roleIdx]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
//       const scrollY = window.scrollY + 100;
//       sections.forEach((s) => { if (s && scrollY >= s.offsetTop) setActive(s.id.charAt(0).toUpperCase() + s.id.slice(1)); });
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id) => {
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   const visibleProjects = showAll ? PROJECTS : PROJECTS.filter((p) => p.featured);

//   const handleSubmit = () => {
//     if (!formData.name || !formData.email || !formData.message) return;
//     setSent(true);
//     setTimeout(() => setSent(false), 3000);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div style={{ background: "#050a0e", color: "#e8f4f0", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
//       <Cursor />
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
//       <style>{`
//         * { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }
//         html { scroll-behavior: smooth; }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-track { background: #050a0e; }
//         ::-webkit-scrollbar-thumb { background: #00ff87; border-radius: 2px; }
//         @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
//         @keyframes glow { 0%,100%{opacity:0.4} 50%{opacity:1} }
//         @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
//         .tag { display:inline-block; padding:3px 10px; border-radius:20px; font-size:11px; background:rgba(0,255,135,0.1); color:#00ff87; border:1px solid rgba(0,255,135,0.2); margin:2px; }
//         .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
//         .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,255,135,0.12); }
//         .btn-primary { background: linear-gradient(135deg, #00ff87, #00c9ff); color: #050a0e; border: none; padding: 14px 32px; border-radius: 6px; font-weight: 700; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; cursor: none; transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; display: inline-block; }
//         .btn-primary:hover { transform: scale(1.04); box-shadow: 0 8px 32px rgba(0,255,135,0.35); }
//         .btn-outline { background: transparent; color: #00ff87; border: 1px solid #00ff87; padding: 13px 28px; border-radius: 6px; font-weight: 600; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; cursor: none; transition: all 0.2s; text-decoration: none; display: inline-block; }
//         .btn-outline:hover { background: rgba(0,255,135,0.1); }
//         .nav-link { color: #8a9e98; font-size: 13px; font-weight: 500; text-decoration: none; letter-spacing: 1.5px; text-transform: uppercase; transition: color 0.2s; padding: 6px 0; position: relative; cursor: none; }
//         .nav-link.active, .nav-link:hover { color: #00ff87; }
//         @media (max-width: 768px) {
//           .hero-title { font-size: 42px !important; }
//           .section-title { font-size: 36px !important; }
//         }
//       `}</style>

//       {/* NAV */}
//       <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-[rgba(5,10,14,0.9)] px-[5%] backdrop-blur-[20px]">
//   <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between">
//     <div className="font-['Syne'] text-[20px] font-extrabold tracking-[1px] text-white">
//       HZF<span className="text-[#00ff87]">.</span>
//     </div>

//     <div className="desktop-nav flex items-center gap-9">
//       {NAV_LINKS.map((l) => (
//         <button
//           key={l}
//           onClick={() => scrollTo(l)}
//           className={`nav-link ${
//             active === l ? "active" : ""
//           } border-none bg-transparent font-['DM_Sans']`}
//         >
//           {l}
//         </button>
//       ))}

//       <a
//         href="mailto:huzaifaanwar575@gmail.com"
//         className="btn-primary px-5 py-2 text-xs"
//       >
//         Hire Me
//       </a>
//     </div>
//   </div>
// </nav>

//       {/* HERO SECTION */}
//       <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 5%", position: "relative" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
//           <h1 className="hero-title" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 68, lineHeight: 1.05, marginBottom: 12 }}>
//             Muhammad <span style={{ color: "#00ff87" }}>Huzaifa</span> Anwar
//           </h1>
//           <div style={{ height: 52, display: "flex", alignItems: "center", marginBottom: 24 }}>
//             <span style={{ fontSize: 22, color: "#8a9e98", fontWeight: 300 }}>
//               {typed}<span style={{ animation: "blink 1s infinite", color: "#00ff87" }}>|</span>
//             </span>
//           </div>
//           <div style={{ display: "flex", gap: 16 }}>
//             <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Work</button>
//             <button className="btn-outline" onClick={() => scrollTo("Contact")}>Contact Me</button>
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <section id="projects" style={{ padding: "100px 5%" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <h2 style={{ fontSize: 44, color: "#fff", marginBottom: 40, fontFamily: "'Syne', sans-serif" }}>Projects</h2>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 30 }}>
//             {visibleProjects.map((p, i) => (
//               <div key={i} className="card-hover" style={{ background: "rgba(255,255,255,0.03)", padding: 30, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
//                 <span style={{ fontSize: 40 }}>{p.icon}</span>
//                 <h3 style={{ color: "#fff", marginTop: 20 }}>{p.title}</h3>
//                 <p style={{ color: "#8a9e98", fontSize: 14, margin: "15px 0" }}>{p.desc}</p>
//                 <div>{p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Footer / End of Component */}
//       <footer style={{ textAlign: "center", padding: "40px", color: "#4a6660", fontSize: "12px" }}>
//         © 2026 Huzaifa Anwar. Built with React.
//       </footer>
//     </div>
//   );
// }