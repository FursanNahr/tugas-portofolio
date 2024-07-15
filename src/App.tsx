import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/main.tsx';
import fotoUkur from './assets/fotoukur.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex w-full justify-between px-5 py-8 fixed font-semibold text-sm">
        <p className="flex">Ukur</p>
        <div className="">
          <ul className="flex gap-16">
            <li><a href="">Home</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Info</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="pt-28 pb-20">
        <div className="flex justify-between h-112 px-24">
          <div className="flex flex-col justify-end pb-12">
            <p className="text-6xl mb-4 font-semibold">Fursan<br />Nahr</p>
            <p className="text-2xl relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-[120px] after:h-[3px] after:bg-white">Front-End Developer</p>
          </div>
          <img className="h-auto w-auto [mask-image:linear-gradient(to_bottom,_hsla(230,_40%,_16%,_1)_60%,_transparent_100%)]" src={fotoUkur} alt="Foto Ukur" />
        </div>
        <div className="justify-center mt-16 text-base font-semibold flex">
          <div className="h-8 w-8 mr-3 bg-sky-800 flex items-center justify-center"></div>
          <p className="flex items-center">Recent Works</p>
        </div>
      </section>
      {/* <div className="App">
        <Home />
      </div> */}
    </>
  )
}

export default App
