/**
* Farmyard is a module to play tic tac toe
* @namespace TicTacToe
* @author Eesha.
* @version 2022
*/
const TicTacToe = Object.create(null);




/**
 * 2 charcters are selected by the user to play TicTacToe with.
 * @memberof TicTacToe
 * @function characters
 * @returns @property {string[]} characters An array of the selected characters.
 */


/**
 * A grid is created with cells as different sections.
 * An empty grid is defined as an initial state.
 * The empty grid consists of an empty array.
 * @memberof TicTacToe
 * @function gameboard
 * @property {string[]} default ["","","","","","","","",""] Displays an initial gameboard.
 */

  TicTacToe.gameState = ["","","","","","","","",""];


 

/**
 * The grid cells are either empty or contains a character.
 * @memberof TicTacToe
 * @typedef {(player1 | player2)} character
 * @returns {number[]} the index of the clicked block is returned aswell as the character.
 */



// returns a grid populated with the player's animals.
/**
 * This function turns a list of the characters in the blocks into a matrix with a column and row as a grid.
 * @memberof TicTacToe
 * @function Gamegrid
 * @param {*} linear
 * @returns {matrix}
 */

 TicTacToe.matrixCon= function (linear){

  let grid = [
    ["","",""],
    ["","",""],
    ["","",""]];

for (const [index, element] of linear.entries()) {
  let c_index = index % 3;
  let r_index = parseInt(index / 3);

 grid[r_index][c_index] = element;

}
 return grid;

}


  /**
   * winning condition is set to false.
   * If each index in any winning condition array is the same, the winning condition is true.
   * @function handleResultValidation()
   * @returns {boolean} if game is won
   * @property {string[]} winning_board ["player1","player1","player1",
   *                                      "player2","player1","player2",
   *                                      "player2","player2",""] Displays a winning gameboard.
   */

   TicTacToe.winningconditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];




  export default Object.freeze(TicTacToe);


