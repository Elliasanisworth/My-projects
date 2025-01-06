import React from 'react'
import Navbar from './component/navbar'
import Landing from './component/landing'
import Marquee from './component/marquee'
import About from './component/about'
import Eyes from './component/eyes'
import Featured from './component/featured'
import Threecard from "./component/threecard";
import Footer from "./component/footer";
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full -min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured/>
      <Threecard/>
      <Footer />
    </div>
  )
}

export default App