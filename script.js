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

let img1 = document.createElement('img');
img1.src = 'images/x.png';
img1.height = 60;
img1.width = 60;

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

    container.style.visibility = "visible";

    let img2 = document.createElement('img');
    img2.src = 'images/o.png';
    img2.height = 60;
    img2.width = 60;
    board.addEventListener('click', function(e) {
        e.target.appendChild(img2);
    });
}
getPlayerChoice ();
