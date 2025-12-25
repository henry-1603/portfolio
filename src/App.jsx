import Hero from "./components/Hero"
import Experience from "./components/Experience"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"
import { ThemeProvider } from "./contexts/ThemeContext"

import Background from "./components/Background"
import Snowfall from "react-snowfall"
import Header from "./components/Header"

function App() {
  return (
    <ThemeProvider>
      <div className="App relative">
        <Snowfall
          snowflakeCount={150}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1
          }}
        />
        <Background />
        <main className="min-h-screen relative z-10">
          <Header/>
          <Hero />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

