let boxes = document.querySelectorAll("#box");
let resetbtn = document.querySelector(".reset");
let newbtm = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msgp = document.querySelector("#msg");
let turnO = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame =() =>  {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const disablebtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "" ;
    }
};
const ShowWinner = (Winner) => {
    msgp.innerText = `congratulation , Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
};

const checkWinner = () => {
    for(let pattern of winpattern){
            let p1val = boxes[pattern[0]].innerText;
            let p2val = boxes[pattern[1]].innerText;
            let p3val = boxes[pattern[2]].innerText;

            if (p1val != ""&& p2val != "" && p3val != ""){
                if(p1val === p2val && p2val === p3val){
                    ShowWinner(p1val);
                }
            }
    }
};


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
     
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO =true;
        }
        box.disabled=true;
        checkWinner();
    })
});

newbtm.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);