// create module for gameboard
const gameBoard = (() => {
    const board = document.getElementById("board");
    const container = document.getElementById("container");
    let game = ["", "", "", "", "", "", "", "", ""];
    return { board };
})();
    

// create factory function for players
const player = (name) => {
    const getName = () => name;
    const sayName = () => console.log(`${getName()} is the Player}.`);
    return { getName, sayName };
};

function createXImage () {
    const x = document.getElementById("x");
    const container = document.getElementById("container");
    const square = document.getElementsByClassName("square");

    let img1 = document.createElement('img');
    img1.src = 'images/x.png';
    img1.height = 60;
    img1.width = 60;
}

function createOImage() {
    const zero = document.getElementById("zero");
    let img2 = document.createElement('img');
    img2.src = 'images/o.png';
    img2.height = 60;
    img2.width = 60;
}

let restart = document.getElementById("restart");
restart.addEventListener("click", restartGame)
function restartGame() {
    let game = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".square").forEach(square =>square.innerHTML = "");
}