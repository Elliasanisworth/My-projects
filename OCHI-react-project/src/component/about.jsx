import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div className='w-full min-h-screen bg-[#cdea68] px-20 pt-20 pb-12 rounded-tl-3xl rounded-tr-3xl text-black'>
        <h2 className='font-[Neue_Montreal] text-[4.1vw] leading-[4.5vw] tracking-tight'>
            ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h2>
        <div className='w-full flex gap-8 border-t-[1px] pt-2 mt-14 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-5xl'>Our approach:</h1>
                <button className='px-3 py-2 relative bg-zinc-900 text-white rounded-[45px] mt-6 flex items-center justify-center gap-7 uppercase tracking-tight'>
                    Read More
                    <div className='w-9 h-9 rounded-full border-[1px]  flex justify-center items-center bg-white text-black'>
                        <span className='rotate-45'><FaArrowUpLong /></span>
                    </div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-xl bg-red-500 mt-2'>
                <img className='w-full h-[60vh] object-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image" />
            </div>
        </div>
    </div>
  );
}

export default About;

