const gameBoard = require('./gameBoard');

beforeEach(() => {
  gameBoard.clear();
});

test('marking a square updates board', () => {
  gameBoard.mark(1, 1, 'X');
  expect(gameBoard.board[1][1]).toBe('X');
});

test('attempt to mark already marked square should not update board.', () => {
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(1, 1, 'O');
  expect(gameBoard.board[1][1]).toBe('X');
})
