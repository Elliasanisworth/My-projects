import React from 'react'
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='mt-52 px-20 '>
            {["we create", "eye-opening", "presentations"].map((item, index) => {
                return  <div className='masker'>
                    <div  className='tracking-tight overflow-hidden bg-red-500 font-semibold'></div>
                    <div className='w-fit flex items-center justify-center '>
                    { index === 1 && (<div className=' mr-[.70vw] w-[6vw] h-[4vw] relative top-[.40vw] bg-red-600 rounded-md'></div>)}
                    <h1 className='flex items-center h-full uppercase text-[5vw] leading-[5vw] font-[Founders_Grotesk_X-condensed]'> {item} </h1>
                    </div>
                </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-36 flex justify-between items-center py-4 px-5 '>
            {["for public and private companies", "From the first pitch to IPO"].map((item, index) => {
                return <p className='text-md font-light tracking-tight leading-none '>{item}</p>
            })}
            <div className='  start flex items-center gap-2'>
                <div className='px-5 py-2 border-[1px] border-zinc-300 rounded-full font-light text-md uppercase'>Strat the Project</div>
                <div className='w-10 h-10 rounder-full border-zinc-300 border-[1px] rounded-full items-center flex justify-center'>
                    <span className='rotate-45'><FaArrowUpLong /></span></div>
            </div>
        </div>
        <motion.div
        className='flex items-center justify-center mt-11 text-zinc-500 '
         initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: [0, 1, 1, 0], y: [-100, 0, 0, 100] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.2
        }}

      >
        scroll down
      </motion.div>
    </div>
  )
}

export default landing