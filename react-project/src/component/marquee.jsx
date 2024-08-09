import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#36454f]'>
      <div className='text border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap uppercase overflow-hidden pr-10'>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }} 
          className='text-[20vw] leading-none font-["Founders_Grotesk_X-condensed"] font-semibold p-10'
        >
          we are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }} 
          className='text-[20vw] leading-none font-["Founders_Grotesk_X-condensed"] font-semibold p-10'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;


