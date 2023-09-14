

// create module for gameboard
const gameBoard = (function() {
    const gameboard = ["x", "0"];
    return { gameboard };
})();

const showGameBoard = gameBoardFunc => {
    const container = document.getElementById("container");
    const square = document.querySelector("square")
}
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

function getPlayerChoice() {
    let id ="";
    if (event.target.id == "x") {
        console.log("Player chose X");
    }
    if(event.target.id == "zero") {
         console.log("Player chose 0");
    }
}