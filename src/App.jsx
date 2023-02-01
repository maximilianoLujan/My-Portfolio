import Navbar from "./components/Navbar/Navbar"
import HeroDesktop from "./components/Hero/HeroDesktop"
import HeroMovil from "./components/Hero/HeroMovil"

function App() {

  return (
      <div className="max-w-screen-xl flex flex-col justify-between mx-auto min-h-screen">
          <div className="flex flex-col w-full" style={{backgroundColor:'#000000'}}>
            <Navbar /> 
            <HeroDesktop />
            <HeroMovil />
          </div>
      </div>
  )
}

export default App
