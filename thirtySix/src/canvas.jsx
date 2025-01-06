import {useEffect, useRef, useState} from "react";
import canvaImage from "./canvasimage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function canvas({ details }) {
    const {startIndex, numImages, duration ,size , top, left, zIndex } = details;
    const [index, setIndex] = useState({ value: startIndex });
    const canvasref = useRef(null);

    useGSAP(() => {
        gsap.to(index, {
            value: startIndex + numImages-1,
            duration: duration,
            repeat: -1, 
            ease: "linear",
            onUpdate: () => {
                setIndex({ value: Math.round(index.value) });
            },
        });

        gsap.from(canvasRef.current,{
            opacity: 0,
            duration:1,
            ease: "power2.inOut",
        });
    });

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasref.current
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvaImage[index.value];
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height= canvas.offsetHeight + "px";

            ctx.scale(scale,scale);
            ctx.drawImage(img, 0, 0,canvas.offsetWidth, canvas.offsetWidth);
        };
    }, [index]);
        
    return (
    <canvas
    data-scroll
    data-scroll-speed={Math.random().toFixed(1)}
     ref={canvasref}
     className="absolute"
    style={{
        width: `${size *1.8}px`, 
        height: `${size*1.8}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
    }}
    id="canvas"
    ></canvas>
    );
}

export default canvas;