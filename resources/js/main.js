"use strict"

/* || MODULES */
const gameBoard = (() => {

  const board = [[],[],[]];

  const mark = (row, column, marker) => {
      /* Mark the square on the board at a given row and column with a
       * given marker. */

      board[row][column] = marker;
  };

  const clear = () => {
      /* Clear board */

      board.forEach((row) => {
          row.length = 0;
      });
  }

  const toString = () => {
      /* Returns a readable representation of the current state of the board. */
      
      let repr = "";
      board.forEach((row) => {
          repr += `${row[0] || ' '} | ${row[1] || ' '} | ${row[2] || ' '}\n`; 
      });

      return repr;
  };

  const isFull = () => {
      /* Return whether all 9 squares on the board have been marked or not. */

      return board.flat().length === 9;
  }

  //TODO
  return {
      board,
      mark,
      clear,
      toString,
      isFull,
  }
})();

const display = (() => {
  const domBoard = document.getElementById("board");

  const init = () => {
      for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
              let square = document.createElement("div");
              square.classList.add("square");

              let mark = document.createElement("span");
              mark.classList.add("mark");

              square.appendChild(mark);
              domBoard.appendChild(square);
          }
      }
  };

  const clearBoard = () => {
      /* Clear domBoard of marks */
      
      //TODO
  }
  //TODO

  return {
      init,
      clearBoard,
      //TODO
  }
})();


/* || FACTORIES */
const Player = (marker) => {
  //TODO
}

display.init()
