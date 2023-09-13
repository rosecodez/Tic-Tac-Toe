// create module for gameboard
const gameBoard = (function() {
    const gameboard = ["x", "0"];
    return { gameboard };
})();


// create factory function for players
const player = (name) => {
    return { name };
};
const human = player('human');
const computer = player('computer');
console.log(human.name);
console.log(computer.name);
