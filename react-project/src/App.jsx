import React from 'react'
import Navbar from './component/navbar'
import Landing from './component/landing'
import Marquee from './component/marquee'
import About from './component/about'
import Eyes from './component/eyes'
import Featured from './component/featured'

function App() {
  return (
    <div className='w-full -min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured/>
    </div>
  )
}

export default App