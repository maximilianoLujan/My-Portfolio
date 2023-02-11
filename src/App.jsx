import Navbar from "./components/Navbar/Navbar"
import HeroDesktop from "./components/Hero/HeroDesktop"
import HeroMovil from "./components/Hero/HeroMovil"
import Aboutme from "./components/Aboutme/Aboutme"
import Experience from "./components/Experience/Experience"
import Portfolio from "./components/Portfolio/Portfolio"
import "./App.css"

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
      </div>
  )
}

export default App
