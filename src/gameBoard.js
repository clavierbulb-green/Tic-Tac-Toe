const gameBoard = (() => {
  const NUM_ROWS = 3;
  const NUM_COLUMNS = 3;
  const board = [['', '', ''],['', '', ''],['', '', '']];

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
  }

  const isFull = () => {
    return board.flat().every(mark => mark);
  }

  const isGameOver = () => {
    return rowWin() || colWin() || diagonalWin();
  }

  /* in each Win method, check the appropriate marks in each 
   * row/col/diagonal are all equal (=== the first mark in the group) 
   * and non-blank */
  const rowWin = () => {
    for (let row = 0; row < NUM_ROWS; row++) {
      if (board[row].every(mark => mark && mark === board[row][0])) {
        return true;
      }
    }
  }
  const colWin = () => {
    for (let col = 0; col < NUM_COLUMNS; col++) {
      let column = [board[0][col], board[1][col], board[2][col]];
      if (column.every(mark => mark && mark === column[0])) {
        return true;
      }
    }
  }
  const diagonalWin = () => {
    let diag1 = [board[0][0], board[1][1], board[2][2]];
    let diag2 = [board[0][2], board[1][1], board[2][0]];
    return (diag1.every(mark => mark && mark === diag1[0])) ||
      (diag2.every(mark => mark && mark === diag2[0]));
  }

  return {
    board,
    mark,
    clear,
    isFull,
    isGameOver,
  }
})();
module.exports = gameBoard;
