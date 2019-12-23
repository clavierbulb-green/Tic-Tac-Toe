const gameBoard = (() => {
  const NUM_ROWS = 3;
  const NUM_COLUMNS = 3;
  const board = [[],[],[]];

  const mark = (row, column, marker) => {
    if (!board[row][column]) {
      board[row][column] = marker;
    }
  };

  const clear = () => {
    board.forEach(row => {
      row.length = 0;
    })
  }

  const isFull = () => {
    return board.flat().length === 9;
  }

  const isGameOver = () => {
    return rowWin() || colWin() || diagonalWin();
  }

  // 1. every() does not appear to check unassigned squares, so we 
  // check to make sure the length of a row/column is === 3, so 
  // that a row such as ['X'] does not count as a winning combination.

  // 2. check !!mark so that a row/column of empty squares 
  // (i.e. mark === undefined) does not count as a winning combination
  const rowWin = () => {
    for (let row = 0; row < NUM_ROWS; row++) {
      if (board[row].length === 3 && 
        board[row].every(mark => !!mark && mark === board[row][0])) {
        return true;
      }
    }
  }
  const colWin = () => {
    for (let col = 0; col < NUM_COLUMNS; col++) {
      let column = [board[0][col], board[1][col], board[2][col]];
      if (column.length === 3 && 
        column.every(mark => !!mark && mark === column[0])) {
        return true;
      }
    }
  }
  const diagonalWin = () => {
    let diag1 = [board[0][0], board[1][1], board[2][2]];
    let diag2 = [board[0][2], board[1][1], board[2][0]];
    return (diag1.length === NUM_ROWS && 
      diag1.every(mark => !!mark && mark === diag1[0])) ||
      (diag2.length === NUM_ROWS && 
      diag2.every(mark => !!mark && mark === diag2[0]));
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
