const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanim(){
    var tl =gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: '0',
        ease:Expo.easeInOut,
        duration: 1.9 ,
        delay: -1,
        stagger: .3
    })
    .from("#herofooter",{
        y:-10 ,
        opacity: 0,
        duration: 1.2,
        delay: -1,
        ease: Expo.easeInOut
    })

}
var timeout;
function circleskew(){
        // define default scale value
        var xscale = 1;
        var yscale = 1;

        var xprev = 0;
        var yprev = 0;
        window.addEventListener("mousemove",function(dets){
            clearInterval(timeout);
            xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
            yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);

            xprev = dets.clientX;
            yprev = dets.clientY;

            circlemousefollower(xscale,yscale);

          timeout = setTimeout(function() {
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(1,1)`;
            }, 100);
    });

}
function circlemousefollower(xscale , yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(${xscale}) scale(${yscale})`;
    })
}

circleskew();
circlemousefollower();
 firstpageanim();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate =0;
    var diffrot =0;
    elem.addEventListener("mouseleave", function(dets){
       gsap.to(elem.querySelector("img"),{
        opacity: 0,
        ease: Power2,
       });
    });
    
    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = rotate - dets.clientX;
        rotate = dets.clientX;
       gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20,20,diffrot*0.2),
       });
    });
});