// import R from "./common/ramda.js";
import Json_rpc from "./Json_rpc.js";

import TicTacToe from "./common/TicTacToe.js";




// This allows the user to click 2 animals on the start screen

let animals = [];
let currentplayer;
let player1;
let player2;

let known_a = ["cow","pig","chick","sheep"];

for (const v of known_a) {
  character(v);
}

// The clicked animals are appended to the animals array.

function character(element){
  document.getElementById(element).addEventListener("click", function() {
    if (animals.includes(element)){
      document.getElementById(element).style.backgroundColor = '';
      animals.splice(animals.indexOf(element),1);
      // console.log(animals);
    }
    else{
      animals.push(element);
      document.getElementById(element).style.backgroundColor = 'yellow';
      if (animals.length >= 3){
        document.getElementById(animals[0]).style.backgroundColor = '';
        animals.shift();
      }
      // console.log(animals);
    }
  });
};



// checks the consts animals if 2 are true
// If correct pass on to next stage of the game

let startScreen = document.getElementById("start-game-visible");

document.getElementById("start-btn").addEventListener("click", function() {
  if (animals.length == 2){
    startScreen.classList.remove("start-game");
    startScreen.classList.add("hidden");
    
 // defines the players in the game as the animals chosen by the user.

    player1 = animals[0];
    player2 = animals[1];
    currentplayer = player1;
    console.log(player1);
    console.log(player2);
  }
  else if (animals.length == 1){
    alert("Select another character");
  }
  else if (animals.length == 0){
    alert("Select another 2 characters");
  }
});

// game board.

// appends the animal name to the game state array when the block is clicked.

document.querySelectorAll(".block").forEach(item => {
  item.addEventListener("click", event =>{
    if (TicTacToe.gameState[item.id] == ""){
      item.classList.remove("block");
      item.classList.add("block" + String(currentplayer));
      TicTacToe.gameState[item.id] = currentplayer;


      let board = TicTacToe.matrixCon(TicTacToe.gameState);




      handleResultValidation();
// changes the player every turn.
      if (currentplayer == player1){
        currentplayer = player2;
      }
      else{
        currentplayer = player1;
      }
    }
  });
});



/**
 * function checks for a 3-in-a-row.
 * all 3-in-a-rows return true.
 * any other rows return false.
 */

checkrSame();

export default function checkrSame() {
  let matrix = [
    ["1","1","0"],
    ["0","0","1"],
    ["1","1","1"]];

    let rowWin = false;

  matrix.forEach((row,index) =>{
        if (matrix[index][0] == matrix[index][1]){
          if(matrix[index][1] == matrix[index][2]){
            console.log("row found");
            rowWin = true;
            return(rowWin)

        }
        else{
          return(false)
        }
    }}
    )
  };
//     function transposre(matrix) {
//       matrix[0].map((ignore, colIndex) => matrix.map((row) => row[colIndex]))
//       console.log(matrix)
//     }
//     transposre()
// }

// function transposre(matrix) {
//   matrix[0].map((ignore, colIndex) => matrix.map((row) => row[colIndex]))
//   console.log(matrix)
// }
// transposre()


  //   main.transpose = (matrix) => matrix[0].map(
  //     (ignore, colIndex) => matrix.map((row) => row[colIndex])
  // );



/**
 * Checks for winning conditions.
 * If the all the rows in the grid matrix contain blanks game will continue .
 * If the first, second and third index of the winning condition matrix matches the grid matrix,
 * @memberof TicTacToe
 * @returns {boolean}
 * @function handleResultValidation()
 */

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
      const winCondition = TicTacToe.winningconditions[i];
      let a = TicTacToe.gameState[winCondition[0]];
      let b = TicTacToe.gameState[winCondition[1]];
      let c = TicTacToe.gameState[winCondition[2]];
      if (a === " " || b === "" || c === "") {
          continue;
      }
      if (a === b && b === c) {
          roundWon = true;
          for(let j = 0; j<winCondition.length; j++ ){
            document.getElementById(String(winCondition[j])).style.backgroundColor = "Lightblue"

          }
          break
      }
    }
    if(roundWon) {
      var delayInMilliseconds = 1000; //1 second

      setTimeout(function() {
          document.getElementById("winnerMsg").style.display="flex"
      }, delayInMilliseconds);

    }


  // drawing conditions.
  let roundDraw = !TicTacToe.gameState.includes("");
    if (roundDraw) {
      var delayInMilliseconds = 1000; //1 second
      setTimeout(function() {
      document.getElementById("drawMsg").style.display="flex"
    },delayInMilliseconds);
  }

// restart button.
document.getElementById("restartBtn").addEventListener("click", function() {
  window.location.reload()
});


document.getElementById("drawBtn").addEventListener("click", function() {
  window.location.reload()
});
}



















// // check for winning 
// def wiining(board):
//   for checking players (interate through each of the player): 
//     h = winn horizontal 
//     v = win verticle 
//     d = win diagonal
//     if h or v or d == true:
//       return true, player
//     else: 
//       return false

// // Horizontal win:
// def horizinal win:
//   for rows in matrix:
//     if rows all the same value then return true

// // column win 
// def column win:
// output = array[0].map((_, colIndex) => array.map(row => row[colIndex]));
//   reutrn horizontal win (output)
//   return true or false






