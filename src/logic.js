const logic = (() => {
  const gameOver = board => {
    return rowWin(board) || colWin(board) || diagonalWin(board);
  };

  /* in each Win method, check the appropriate marks in each
   * row/col/diagonal are all equal (=== the first mark in the group)
   * and non-blank */
  const rowWin = board => {
    for (let row = 0; row < board.length; row++) {
      if (board[row].every(mark => mark && mark === board[row][0])) {
        return true;
      }
    }
  };
  const colWin = board => {
    for (let col = 0; col < board[0].length; col++) {
      let column = [board[0][col], board[1][col], board[2][col]];
      if (column.every(mark => mark && mark === column[0])) {
        return true;
      }
    }
  };
  const diagonalWin = board => {
    let diag1 = [board[0][0], board[1][1], board[2][2]];
    let diag2 = [board[0][2], board[1][1], board[2][0]];
    return (
      diag1.every(mark => mark && mark === diag1[0]) ||
      diag2.every(mark => mark && mark === diag2[0])
    );
  };

  return {
    gameOver
  };
})();

module.exports = logic;
