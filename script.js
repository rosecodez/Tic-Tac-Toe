// create module for gameboard
const gameBoard = (function() {
    const gameboard = ["x", "0"];
    return { gameboard };
})();

const showGameBoard = gameBoardFunc => {
    const container = document.getElementById("container");
}

// create factory function for players
const player = (name) => {
    const getName = () => name;
    const sayName = () => console.log(`${getName()} is the Player}.`);
    return { getName, sayName };
};

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let choices = [one, two, three, four, five, six, seven, eight, nine]

function getPlayerChoice () {
    const x = document.getElementById("x");
    const zero = document.getElementById("zero");
    const p = document.querySelector("p");
    const container = document.getElementById("container");
    const square = document.getElementsByClassName("square");
    
    container.style.visibility = "visible";
    const board = document.getElementById("board");
    let img1 = document.createElement('img');
    img1.src = 'images/x.png';
    img1.height = 60;
    img1.width = 60;
    board.addEventListener('click', function(e) {
        e.target.appendChild(img1);
    });
}
getPlayerChoice ();
function getComputerChoice() {
    let img2 = document.createElement('img');
    img2.src = 'images/o.png';
    img2.height = 60;
    img2.width = 60;
    board.addEventListener('click', function(e) {
        e.target.appendChild(img2);
    });
}
