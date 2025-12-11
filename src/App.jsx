import Hero from "./components/Hero"
import Experience from "./components/Experience"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"
import Header from "./components/Header"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <main className="min-h-screen">
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

