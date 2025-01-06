import { animationControls, easeInOut, motion, useAnimation } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { Power4 } from "gsap";
import { FaArrowUpLong } from "react-icons/fa6";

function featured() {
    const card1 = useAnimation();
    const card2 = useAnimation();
    const card3 = useAnimation();
    const card4 = useAnimation();

const handleHover =(animationControl) => {
 animationControl.start({y: "0"})
}

const handleHoverEnd =(animationControl) => {
    animationControl.start({y: "100%"})
   }

  return (
    <div className='w-full pt-28 bg-zinc-900' >
        <div className='w-full px-16 border-b-[1px] pb-14 border-zinc-400'>
            <h1 className='text-6xl font-Neue_Montreal tracking-tight'>Featured projects</h1>
        </div>
        <div className='mt-10 px-20'>
        <div className="cards relative w-full flex gap-4  ">
                < motion.div onHoverStart={() => handleHover(card1)} onHoverEnd={() => handleHoverEnd(card1)} className="card1 w-1/2 h-[86vh]  flex flex-col items-center justify-center">
                <h1 className='absolute z-[9] flex overflow-hidden text-8xl text-[#cdea68] tracking-tighter left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"FYDE".split('').map((item, index)=><motion.span key={index} initial={{ y: "100%"}} animate={card1} transition={{ease: easeInOut, delay: index*.05}} className='inline-block'>{item}</motion.span>)}</h1>
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
                </ motion.div>

                <motion.div onHoverStart={()=> handleHover(card2)} onHoverEnd={() => handleHoverEnd(card2)} className="card2 w-1/2 h-[86vh]  flex flex-col items-center justify-center">
                <h1 className='absolute flex overflow-hidden z-[9] text-8xl text-[#cdea68] tracking-tighter left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"VISE".split('').map((item, index)=><motion.span key={index} initial={{y: "100%"}} animate={card2} transition={{ease: easeInOut, delay: index*.05}} className='inline-block'>{item}</motion.span>)}</h1>
                <div className='w-full ml-2 mb-3 flex flex-row uppercase '> 
                   <div className='flex items-center '> <GoDotFill /> </div>
                    <h4> vise</h4>
                    </div>
               <div className='mx-3'> <img className='rounded-xl mb-4 shadow shadow-zinc-700 ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="work" /></div>
               <div className='  w-full  flex gap-5 text-white'>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>agency</button>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>company presentation</button>
            
               </div>
                </motion.div>
                
            </div>
        <div className="cards w-full flex gap-4 relative  mt-10">
                <motion.div onHoverStart={()=> handleHover(card3)} onHoverEnd={() => handleHoverEnd(card3)}  className="card3 w-1/2 h-[90vh] flex flex-col items-center justify-center">
                <h1 className='absolute flex overflow-hidden z-[9] text-8xl text-[#cdea68] tracking-tighter left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"TRAWA".split('').map((item,index)=><motion.span key={index} initial={{y: "100%"}} animate={card3} transition={{ease: easeInOut, delay: index*.05}} className="inline-block" >{item}</motion.span>)}</h1>
               
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
                </motion.div>

                <motion.div onHoverStart={()=> handleHover(card4)} onHoverEnd={() => handleHoverEnd(card4)} className="card4 w-1/2 h-[90vh] flex flex-col items-center justify-center">
                <h1 className='absolute flex overflow-hidden z-[9] text-8xl text-[#cdea68] tracking-tighter left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"PREMIUMBLEND".split('').map((item,index)=><motion.span key={index} initial={{y: "100%"}} animate={card4} transition={{ease: easeInOut, delay: index*.05}} className="inline-block">{item}</motion.span>)}</h1>
                <div className='w-full ml-2 mb-4 flex flex-row uppercase '> 
                   <div className='flex items-center '> <GoDotFill /> </div>
                    <h4> premium blend</h4>
                    </div>
               <div className='mx-3 '> <img className='rounded-xl mb-4 ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="work" /></div>
               <div className='  w-full  flex gap-5 text-white'>
                <button className='py-1.5 px-2.5 border-[1px] border-zinc-700 bg-zinc-900 rounded-[45px] uppercase'>branded template</button>
                    </div>
                </motion.div>
                
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