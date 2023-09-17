// create module for gameboard
const gameBoard = (function() {
    const gameboard = ["x", "0"];
    return { gameboard };
})();

const showGameBoard = gameBoardFunc => {
    const container = document.getElementById("container");
    

}
const square = document.getElementsByClassName("square");

let img1 = document.createElement('img');
img1.src = 'images/o.avif';
img1.height = 60;
img1.width = 60;


let img2 = document.createElement('img');
img2.src = 'images/x.avif';
img2.height = 60;
img2.width = 60;


// create factory function for players
const player = (name) => {
    const getName = () => name;
    const sayName = () => console.log(`${getName()} is the Player}.`);
    return { getName, sayName };
};
const human = player('human');
const computer = player('computer');
console.log(human.name);
console.log(computer.name);


function getPlayerChoice () {
    const x = document.getElementById("x");
    const zero = document.getElementById("zero");
    const p = document.querySelector("p");
    const container = document.getElementById("container");
    x.onclick = function (x) {
        p.style.display = "none";
        container.style.visibility = "visible";
        const playerChoice = "x";
        const computerChoice = "0";
        console.log("Player choice is x");
        console.log("Computer choice is 0");
    }
    zero.onclick = function (zero) {
        p.style.display = "none";
        container.style.visibility = "visible";
        const playerChoice = "0";
        const computerChoice = "x"
        console.log("Player choice is 0");
        console.log("Computer choice is x");
    }
    if (x) return x;
    if (zero) return zero;
}
getPlayerChoice ();
