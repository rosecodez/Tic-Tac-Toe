// create module for gameboard
const gameBoard = (() => {
  const array = ["", "", "", "", "", "", "", "", ""] 
  const board = document.getElementById("board");
  const container = document.getElementById("container");
  const squares = Array.from(document.querySelectorAll(".square"));
  let restart = document.getElementById("restart");
  return { board, array, squares, restart };
})();

// create factory function for players
const player = (name) => {
  const getName = () => name;
  const sayName = () => console.log(`${getName()} is the Player}.`);
  return { getName, sayName };
};

function createX() {
  gameBoard.squares.forEach(square => {
    square.addEventListener("click", function(e) {
      square.textContent = 'x';
      aiChoice();
    })
  });
}
createX();

function createO() {
  gameBoard.squares.forEach(square => {
    square.addEventListener("click", function(e) {
      square.textContent = 'o';
    })
  });
}
function aiChoice() {
  //choose a number 1-9
  let randomID = Math.floor(Math.random() * 8);
  //select a random cell based on random number and select it with id number
  let randomCell = document.getElementById(randomID);
  //while the cell has text, 
  while (randomCell.textContent != "") {
    //keep generating random number 
    randomID = Math.floor(Math.random() * 8);
    randomCell = document.getElementById(randomID);
  }
  //place ai marker in the random cell
  randomCell.textContent = 'o';
  if (playerHasWon() == true){
    console.log("Player has won!");
  }
}
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function playerHasWon() {
  //turns nodelist to array
  for (const condition of winningCombos) {
    let [a, b, c] = condition;
    if (gameBoard.squares[a].textContent && (gameBoard.squares[a].textContent == gameBoard.squares[b].textContent && gameBoard.squares[a].textContent == gameBoard.squares[c].textContent)){
      //if player marker matches the winning markers
      if("x" == gameBoard.squares[a].textContent){
        //player wins
        return true
      }
      else{
        //player doest win basically
          return false
      }
    }
  }
}


gameBoard.restart.addEventListener("click", resetGame)
function resetGame() {
  let array = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll(".square").forEach(square => square.innerHTML = "");
}