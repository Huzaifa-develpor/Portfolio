import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
// import App1 from './App1'

const App = () => {
    
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <App1/> */}
    </div>
  )
}

export default App
