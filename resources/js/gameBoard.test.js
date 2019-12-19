const gameBoard = require('./gameBoard');

beforeEach(() => {
  gameBoard.clear();
});

test('marking a square updates board', () => {
  let row = 1;
  let column = 1;
  let marker = 'X';
  gameBoard.mark(row, column, marker);
  expect(gameBoard.board[row][column]).toBe('X');
});
