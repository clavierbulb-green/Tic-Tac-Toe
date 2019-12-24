const gameBoard = (() => {
  const NUM_ROWS = 3;
  const NUM_COLUMNS = 3;
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  const mark = (row, column, marker) => {
    if (!board[row][column]) {
      board[row][column] = marker;
    }
  };

  const clear = () => {
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLUMNS; col++) {
        board[row][col] = "";
      }
    }
  };

  const isFull = () => {
    return board.flat().every(mark => mark);
  };

  return {
    board,
    mark,
    clear,
    isFull
  };
})();
module.exports = gameBoard;
