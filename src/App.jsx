import Navbar from "./components/Navbar/Navbar"
import HeroDesktop from "./components/Hero/HeroDesktop"
import HeroMovil from "./components/Hero/HeroMovil"
import Aboutme from "./components/Aboutme/Aboutme"
import Experience from "./components/Experience/Experience"
import Portfolio from "./components/Portfolio/Portfolio"
import "./App.css"
import Skills from "./components/Skills/Skills"
import ContactMe from "./components/Contactme/Contactme"
import Footer from "./components/Footer/Footer"

function App() {

  return (
      <div className="max-w-screen-xl flex flex-col justify-between mx-auto">
          <div className="flex flex-col w-full" style={{backgroundColor:'#000000'}}>
            <Navbar /> 
            <HeroDesktop />
            <HeroMovil />
          </div>
          <Aboutme />
          <Experience />
          <Portfolio /> 
          <Skills />
          <ContactMe />
          <Footer />
      </div>
  )
}

export default App
