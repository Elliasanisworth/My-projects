
var timer =60;
var score = 0;
var hitrn = 0;
var timerint;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn ;
}
function makebubble(){
var clutter ="";
for (var i=1; i< 161;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer(){
   timerint = setInterval(function(){
        if(timer>0){
        timer--; 
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
           // document.querySelector("#pbtm").innerHTML="<div class=popbubble>POP The Bubbles</div>"
            document.querySelector("#pbtm").innerHTML = "<div class=gameover></div>"
        }
    },1000)
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednumber = (Number(dets.target.textContent));
    if(clickednumber === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
});
getNewHit();
runtimer();
makebubble();

// Add event listener to game over box
document.querySelector("#pbtm").addEventListener("click", function(dets){
    if(dets.target.classList.contains('gameover')){
        restartGame();
    }
});

function restartGame() {
    // Reset the game variables
    timer = 60;
    score = 0;
    hitrn = 0;

    // Update the UI
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#timerval").textContent = timer;

    // Restart the timer
    clearInterval(timerint);
    runtimer();

    // Generate new bubbles and hit number
    makebubble();
    getNewHit();
}

getNewHit();
runtimer();
makebubble();

