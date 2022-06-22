import TicTacToe from "../common/TicTacToe.js";


const DISPLAY_MODE = "to_string";

const display_functions = {
    "json": JSON.stringify
};

const display_board = function (board) {
    try {
        return "\n" + display_functions[DISPLAY_MODE](board);
    } catch (ignore) {
        return "\n" + JSON.stringify(board);
    }
};


const throw_if_invalid = function () {
    TicTacToe.gameState.forEach((value)=>{
        if( value.length !== 0){
            throw new Error(
                "The grid is not empty!"
            );
        }
    }
    );
};


describe("Empty grid", function () {

    it("An empty board is a valid board", function () {
            const empty_board = TicTacToe.gamestate;
             throw_if_invalid(empty_board);
    });

    it(`Given a non-ended grid,
    when the game is started, an empty grid has all free blocks`, function () {

  let grid = [
    ["","",""],
    ["","",""],
    ["","",""]];

 const free_blocks = TicTacToe.matrixCon(grid); // funcion to test from TicTacToe module.
        
        grid.forEach((array) => {
            array.forEach((token) => {
                if(token.length !== 0){
                    throw new Error(
                        "The empty grid has filled blocks: " +
                        display_board(grid)
                    );
            }

            }

        )});

});

// function defined for test below

function allAreEqual(array) {
    const result = array.every(element => {
      if (element === array[0]) {
        return true;
      }
    });

    return result;
  }


it(`Given a non-ended grid;
    when the game is started;
    an empty grid has no winning player`
    , function () {
        let empty_grid = 
            ["","","","","","","","",""];
// function to test
        const free_blocks = TicTacToe.matrixCon(empty_grid);

        free_blocks.forEach((row,index) => {
            if (row[0] !== ""){
                const res = allAreEqual(row);
                if (res == true){
                    throw new Error(
                        "an empty grid has a winning player:"
                    );
            }

    }});
});
  
});




describe ("Ended grids", function () {
    it("A grid with no free blocks should be ended", function () {
        const ended_grids =  ["1","0","1","1","0","1","1","0","0"]

        const free_blocks = TicTacToe.matrixCon(ended_grids);

        free_blocks.forEach((ar) => {
            ar.forEach((token) => {
                if(token.length === 0){
                    throw new Error(
                        "The ended grid has free blocks: "
                    );
            }

            }

        )});

        

        

    });




    it(
        `A grid with a horizontal three-in-a-row,
should be ended in a win in that configuration.`,
        function () {
            const ended_grids =  [
                ["1","0","1"],
                ["1","1","1"],
                ["0","0","1"]];

            const free_blocks = TicTacToe.matrixCon(ended_grids);

            if(
                ended_grids.forEach((row,index) =>{
                ended_grids[index][0] == ended_grids[index][1] == ended_grids[index][2]
                })
                &&
                roundwon == false
            ){
                throw new Error(
                    " a grid with a winnning row should be marked as won"
                );


            }


        });

        it(
            `A grid with a vertical three-in-a-row,
    should be ended in a win for the player with that configuration.`,
            function () {

            });

         it(
             `A grid with a positive diagonal three-in-a-row,
     should be ended in a win for the player with that configuration.`,
            function () {

            });


        });
