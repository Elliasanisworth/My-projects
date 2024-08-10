import React from 'react';
import Omen from '../assets/Omen.png'

function navbar() {
  return (
    <div className='w-full h-screen overflow-hidden ' >
        <img className='fixed w-full h-screen opacity-45 -z-10 bg-gray-800' src="https://i.pinimg.com/474x/e6/db/f3/e6dbf31926af9e9845b8b9406510297e.jpg" alt="" />
   <nav id='nav1' className=' fixed flex items-center justify-between py-10 px-4 backdrop-blur-md text-[#111] w-full h-[60px]'>
    <div className='logo w-12 h-12 ml-14 '>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHduDerNAj2WnK3pD3v9VyLqU1bxVHdJBy_Q&s" alt="" />
    </div>
    <div className='flex gap-28 mr-[10vw] text-2xl uppercase'>
    <a href="#">Latest</a>
    <a href="#">Collection</a>
    <a href="#">Career</a>
    <a href="#">Store</a>
    </div>
   </nav>
   <div id="nav2" className="absolute top-0 right-0 h-screen w-28  flex flex-col items-center justify-center py-10 gap-7">
    <div className="notched w-16 h-16 bg-red-400 rounded-md overflow-hidden ">
        <img src="https://i.pinimg.com/474x/01/5e/43/015e43e72496831eb1e0f9020e4a9f1b.jpg" alt="" />
    </div>
    <div className="notched w-16 h-16 bg-red-400 rounded-md overflow-hidden ">
        <img src="https://i.pinimg.com/474x/60/3d/d5/603dd5d1d062dface6c8715d35046dd0.jpg" alt="" />
    </div>
    <div className="notched w-16 h-16 bg-red-400 rounded-md overflow-hidden">
        <img src="https://i.pinimg.com/474x/ff/08/31/ff0831df462a32343005bc0cc78b30a2.jpg" alt="" />
    </div>
    <div className="notched w-16 h-16 bg-red-400 rounded-md overflow-hidden">
        <img src="https://i.pinimg.com/474x/20/fe/1a/20fe1ab17bc4177b1b60e19d7e163c0e.jpg" alt="" />
    </div>
    <div className="notched w-16 h-16 bg-red-400 rounded-md overflow-hidden">
        <img src="https://i.pinimg.com/474x/6e/2e/ab/6e2eab1f214c9d99c16175bd61cb026f.jpg" alt="" />
    </div>
  </div>
  <div  className='w-[93vw] h-[90vh]  flex '>
  <div id="main" classname="relative h-screen w-[60vh]  ml-[11vw] p-5 flex   items-center justify-center overflow-hidden">
  <img className=' absolute inset-0 ml-32  w-[65vh] z-10 object-cover' src={Omen} alt="" />
  <h1 class="text-[calc(100vh/3.1)] opacity-75 leading-tighter uppercase transform -rotate-90 origin-center mt-44  text-center font-extrabold">
    omen
  </h1>
</div>
    <div id='about' className='w-1/3 h-[80vh]  mt-[12vh] ml-[6vw] mr-[8vw] bg-[rgba(42,24,94,0.4)] uppercase py-10 px-8'>
    <span className='text-2xl leading-none tracking-widest'>controlador</span>
    <h1 className='text-7xl font-[900]'>omen</h1>
    <div className='border-2 border-white p-3 bg-[rgb(50,37,91,0.7)] flex flex-row mt-8 '>
        <div className='w-[22vw] h-[55px]  mr-5 overflow-hidden rounded-full'> 
        <img className='w-full h-full' src="data:image/png;base64,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" alt="" />
        </div>
        <div>
        <h1 className='font-semibold tracking-wide py-1'>Controller</h1>
        <p className='tracking-tight'> A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.</p>
        </div>
        </div>
        <div className=' h-32  p-5 flex items-center justify-around gap-5 '>
        <div className='w-20 h-24 bg-[rgb(50,37,91,0.6)]  border-2 border-white flex flex-col '>
        <img className='px-3 py-2' src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e8544e323a51c9b8ff7ae8fca257e038a570819d-128x128.png?auto=format&fit=crop&q=80&h=97&w=97&crop=center" alt="" />
        <div className=" border-[1px] border-white flex flex-col items-center "> <h1>q</h1></div>
        </div>
        <div className='w-20 h-24 bg-[rgb(50,37,91,0.6)]  border-2 border-white flex flex-col '>
        <img className='px-3 py-2' src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e4012aeda506a8e77f2e83d48aa8c5c73a37b659-128x128.png?auto=format&fit=crop&q=80&h=97&w=97&crop=center" alt="" />
        <div className=" border-[1px] border-white flex flex-col items-center "> <h1>E</h1></div>
        </div>
        <div className='w-20 h-24 bg-[rgb(50,37,91,0.6)] border-2 border-white flex flex-col '>
        <img className='px-3 py-2' src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2790998724c94f38688c9c6c5d43c0712cae18ef-128x128.png?auto=format&fit=crop&q=80&h=97&w=97&crop=center" alt="" />
        <div className=" border-[1px] border-white flex flex-col items-center "> <h1>c</h1></div>
        </div>
        <div className='w-20 h-24 bg-[rgb(50,37,91,0.6)]  border-2 border-whiteflex flex-col '>
        <img className='px-3 py-2' src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fed58cd5eb95f4e50b7b8230a150c3b686b82f78-128x128.png?auto=format&fit=crop&q=80&h=97&w=97&crop=center" alt="" />
        <div className=" border-[1px] border-white flex flex-col items-center "> <h1>x</h1></div>
        </div>
        </div>
        <div class="relative inline-block px-4 py-2 bg-purple-700 text-white font-bold rounded-tr-md rounded-bl-md">
        <span class="relative z-10">VIEW CONTRACT</span>
        <div class="absolute inset-0 border border-purple-400 rounded-tr-md rounded-bl-md transform rotate-6 z-0"></div>
        </div>
        
        </div>
     </div>
   </div>
  )
}

export default navbar