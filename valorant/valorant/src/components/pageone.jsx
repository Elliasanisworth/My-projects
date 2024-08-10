import React, { useState } from 'react';
import agentContent from '../components/content/AgentContent'

function Navbar() {

    const [activeAgent, setActiveAgent] = useState(null);
    const [activeImageSetIndex, setActiveImageSetIndex] = useState(0);

    const handleImageClick = (index) => {
        switch (index) {
            case 0:
                setActiveAgent('omen');
                break;
            case 1:
                setActiveAgent('viper');
                break;
            case 2:
                setActiveAgent('jett');
                break;
            case 3:
                setActiveAgent('sova');
                break;
            case 4:
                setActiveAgent('gekko');
                break;
            default:
                setActiveAgent(null);
        }
    };
    const handleSetChange = (setIndex) => {
        setActiveImageSetIndex(setIndex);
    };

    return (
        <div className='w-full h-screen overflow-hidden'>
            <img
                className='fixed w-full h-screen opacity-45 -z-10 bg-gray-800'
                src="https://i.pinimg.com/474x/e6/db/f3/e6dbf31926af9e9845b8b9406510297e.jpg"
                alt=""
            />
            <nav id='nav1' className='fixed flex items-center justify-between py-10 px-4 backdrop-blur-md text-[#111] w-full h-[60px]'>
                <div className='logo w-12 h-12 ml-14'>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHduDerNAj2WnK3pD3v9VyLqU1bxVHdJBy_Q&s"
                        alt=""
                    />
                </div>
                <div className='flex gap-28 mr-[10vw] text-2xl uppercase'>
                    <a href="#">Latest</a>
                    <a href="#">Collection</a>
                    <a href="#">Career</a>
                    <a href="#">Store</a>
                </div>
            </nav>
            <div id="nav2" className="absolute top-0 right-0 h-screen w-28 flex flex-col items-center justify-center py-10 gap-7">
                {["https://i.pinimg.com/474x/01/5e/43/015e43e72496831eb1e0f9020e4a9f1b.jpg",
                    "https://i.pinimg.com/474x/60/3d/d5/603dd5d1d062dface6c8715d35046dd0.jpg",
                    "https://i.pinimg.com/474x/ff/08/31/ff0831df462a32343005bc0cc78b30a2.jpg",
                    "https://i.pinimg.com/474x/20/fe/1a/20fe1ab17bc4177b1b60e19d7e163c0e.jpg",
                    "https://i.pinimg.com/474x/a6/ff/4d/a6ff4d811148d4e60ec1c368baba56d8.jpg"].map((src, index) => (
                    <div key={index} 
                    className={`notched w-16 h-16  rounded-md overflow-hidden ${activeAgent === index ? 'opacity-50' : 'bgopacity-100 '}`}
                    onClick={() => handleImageClick(index)}
                    >
                        <img className='cursor-pointer' src={src} alt="" />
                    </div>
                ))}
            </div>
            <div className='w-[93vw] h-[90vh] flex'>
                <div id="main" className="relative h-screen w-[60vh] ml-[11vw] p-5 flex items-center justify-center overflow-hidden">
                    <img className='absolute inset-0 mt-10 w-[65vh] z-10 object-cover' src={activeAgent ? agentContent[activeAgent].pic :''} alt="" />
                    <h1 className="text-[calc(100vh/3)] opacity-75 leading-tighter uppercase transform -rotate-90 origin-center  text-center font-extrabold">
                    {activeAgent ? agentContent[activeAgent].title :''}
                    </h1>
                </div>
                <div id='about' className='w-1/3 h-[80vh] mt-[12vh] ml-[12vw] mr-[8vw] bg-[rgba(174,174,176,0.4)] uppercase py-10 px-8'>                    
                    <span className='text-2xl leading-none tracking-widest'>{activeAgent ? agentContent[activeAgent].role : ''}</span><h1 className='text-7xl font-[900]'>{activeAgent ? agentContent[activeAgent].title :''}</h1><div className='border-2 border-white p-3 bg-[rgba(121,118,131,0.7)] flex flex-row mt-8'>
                            <div className='w-[22vw] h-[58px] mr-5 overflow-hidden rounded-full '>
                                <img
                                    className='w-full h-full '
                                     src={activeAgent ? agentContent[activeAgent].icon : ''} alt="" />
                            </div>
                            <div id='info'>
                                <h1 className='font-semibold tracking-wide py-1'>{activeAgent ? agentContent[activeAgent].title : ''}</h1>
                                <p className='tracking-tight'>
                                    {activeAgent?agentContent[activeAgent].description : ''}
                                </p>
                            </div>
                        </div>
                        <div className='h-32 p-5 flex items-center justify-around gap-5'>
                        {activeAgent ? agentContent[activeAgent].attribute.map((item, index) => (
                            <div
                                key={index}
                                className={`w-20 h-24 bg-[rgba(121,118,131,0.6)] border-2 border-white flex flex-col`}
                            >
                                <img className='px-3 py-2' src={item.imgSrc} alt={item.key} />
                                <div className="border-[1px] border-white flex flex-col items-center">
                                    <h1>{item.key}</h1>
                                </div>
                            </div>
                        )): null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
