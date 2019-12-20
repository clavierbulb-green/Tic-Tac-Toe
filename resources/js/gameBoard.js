const gameBoard = (() => {
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
  return {
    board,
    mark,
    clear,
    isFull,
  }
})();
module.exports = gameBoard;
