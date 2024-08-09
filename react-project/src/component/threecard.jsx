import React from 'react'


function threecard() {
  return (
    <div  className='w-full h-screen flex items-center px-12 bg-zinc-900 gap-5'>
        <div className='ochi w-1/2 h-[50vh]'>
            <div className='w-full rounded-lg relative h-full flex items-center justify-center  bg-[#004d43]'>
                <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-4 bottom-8 text-[#cdea68] h-10 w-30 uppercase  rounded-full px-5 border-[#cdea68] border-2'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='clutch w-1/2 flex gap-5 h-[50vh]'>
        <div className='w-1/2 relative rounded-lg h-full bg-[#313131] flex items-center justify-center flex-col'>
        <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-4 bottom-8  h-10 w-30 uppercase  rounded-full px-5 border-slate-50 border-2'>rating 5.0 on clutch </button>
        </div>
        <div className='w-1/2 relative rounded-lg h-full bg-[#212121] flex items-center justify-center flex-col'>
        <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute uppercase left-4 bottom-8 h-10 w-30 rounded-full px-5 border-2 border-slate-50'>business bootcamp alumni</button>
        </div>
        </div>
    </div>
  )
}

export default threecard