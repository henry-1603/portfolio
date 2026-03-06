import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import WhatIDo from "./components/WhatIDo"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Experience from "./components/Experience"
import CustomCursor from "./components/CustomCursor"
import Loader from "./components/Loader"

import { CursorProvider } from "./contexts/CursorContext"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true);

  // Quick fix: Allow testing without loader in development if needed, 
  // but let's keep it to verify the animation.
  useEffect(() => {
    // Make sure window scrolling is disabled during load
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <CursorProvider>
      <div className="App relative bg-[#050505] min-h-screen text-[#f3f4f6]">
        {loading && <Loader onComplete={() => setLoading(false)} />}

        <CustomCursor />

        <main className={`min-h-screen relative z-10 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          <Hero />
          <About />
          <WhatIDo />
          <Experience />
          <Projects />
          {/* <Contact /> */}
          <Footer />
        </main>
      </div>
    </CursorProvider>
  )
}

export default App
