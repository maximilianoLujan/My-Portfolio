import Navbar from "./components/Navbar/Navbar"
import HeroDesktop from "./components/Hero/HeroDesktop"
import HeroMovil from "./components/Hero/HeroMovil"
import Aboutme from "./components/Aboutme/Aboutme"

function App() {

  return (
      <div className="max-w-screen-xl flex flex-col justify-between mx-auto">
          <div className="flex flex-col w-full" style={{backgroundColor:'#000000'}}>
            <Navbar /> 
            <HeroDesktop />
            <HeroMovil />
          </div>
          <Aboutme />
      </div>
  )
}

export default App
