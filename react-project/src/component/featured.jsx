import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaArrowUpLong } from "react-icons/fa6";

function featured() {
  return (
    <div className='w-full py-28 bg-zinc-900' >
        <div className='w-full px-16 border-b-[1px] pb-14 border-zinc-400'>
            <h1 className='text-6xl font-Neue_Montreal tracking-tight'>Featured projects</h1>
        </div>
        <div className='mt-10 px-20'>
        <div className="cards w-full flex gap-4 bg-red-500">
                <div className="card1 w-1/2 h-[90vh]  flex flex-col items-center justify-center">
                <div className='w-full ml-2 mb-4 flex flex-row uppercase '> 
                   <div className='flex items-center '> <GoDotFill /> </div>
                    <h4> fyde</h4>
                    </div>
               <div>
                 <img className='rounded-xl mb-4 ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="work" /></div>
               <div className='  w-full flex gap-5 text-white'>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>aduit</button>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>copywriting</button>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>sales deck</button>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>slides design</button>
               </div>
                </div>

                <div className="card2 w-1/2 h-[90vh]  flex flex-col items-center justify-center">
                <div className='w-full ml-2 mb-4 flex flex-row uppercase '> 
                   <div className='flex items-center '> <GoDotFill /> </div>
                    <h4> vise</h4>
                    </div>
               <div className='mx-3'> <img className='rounded-xl mb-4 shadow shadow-zinc-700 ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="work" /></div>
               <div className='  w-full  flex gap-5 text-white'>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>agency</button>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>company presentation</button>
            
               </div>
                </div>
                
            </div>
        <div className="cards w-full flex gap-4 ">
            <div></div>
                <div className="card3 w-1/2 h-[90vh] flex flex-col items-center justify-center">
                <div className='w-full ml-2 mb-4 flex flex-row uppercase '> 
                   <div className='flex items-center '> <GoDotFill /> </div>
                    <h4> trawa</h4>
                    </div>
               <div className='mx-3'> <img className='rounded-xl mb-4 ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="work" /></div>
               <div className='  w-full flex gap-5 text-white'>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>brand identity</button>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>design research</button>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>investor desk</button>
               </div>
                </div>

                <div className="card4 w-1/2 h-[90vh] flex flex-col items-center justify-center">
                <div className='w-full ml-2 mb-4 flex flex-row uppercase '> 
                   <div className='flex items-center '> <GoDotFill /> </div>
                    <h4> premium blend</h4>
                    </div>
               <div className='mx-3 '> <img className='rounded-xl mb-4 ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="work" /></div>
               <div className='  w-full  flex gap-5 text-white'>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>branded template</button>
                    </div>
                </div>
                
            </div>
        <div className='w-full flex items-center justify-center mt-16'>
            <button className='  py-2 px-2.5 bg-zinc-200 rounded-[45px] uppercase flex items-center justify-center gap-4 text-black'>view all case study 
                <span className='w-9 h-9 rotate-45 bg-zinc-800 flex items-center justify-center rounded-full text-white tracking-tighter'><FaArrowUpLong /></span></button>            
            </div>    
        </div>
    </div>
  )
}

export default featured