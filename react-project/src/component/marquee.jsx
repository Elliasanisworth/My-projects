import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#36454f]'>
      <div className='text border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap uppercase overflow-hidden gap-10'>
        <h1 className='text-[20vw] leading-none font-["Founders_Grotesk_X-condensed"] font-semibold p-10 -mb-[6.5vw]'>we are ochi </h1>
        <h1 className='text-[20vw] leading-none font-["Founders_Grotesk_X-condensed"] font-semibold p-10 -mb-[6.5vw]'>we are ochi </h1>
        <h1 className='text-[20vw] leading-none font-["Founders_Grotesk_X-condensed"] font-semibold p-10 -mb-[6.5vw]'>we are ochi </h1>
      </div>
    </div>
  );
}

export default Marquee;


