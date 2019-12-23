const gameBoard = require('./gameBoard');

beforeEach(() => {
  gameBoard.clear();
});

/* || test mark() */
test('marking a square updates board', () => {
  gameBoard.mark(1, 1, 'X');
  expect(gameBoard.board[1][1]).toBe('X');
});
test('attempt to mark already marked square should not update board.', () => {
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(1, 1, 'O');
  expect(gameBoard.board[1][1]).toBe('X');
});

/* test isFull() */
test('an empty board is not full', () => {
  expect(gameBoard.isFull()).toBeFalsy();
});
test('a board is not full if not all nine squares are marked', () => {
  gameBoard.mark(1, 1, 'X');
  expect(gameBoard.isFull()).toBeFalsy();
});
test('a board is full when all nine squares are marked', () => {
  gameBoard.mark(0, 0, 'X');
  gameBoard.mark(0, 1, 'X');
  gameBoard.mark(0, 2, 'X');
  gameBoard.mark(1, 0, 'X');
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(1, 2, 'X');
  gameBoard.mark(2, 0, 'X');
  gameBoard.mark(2, 1, 'X');
  gameBoard.mark(2, 2, 'X');
  expect(gameBoard.isFull()).toBeTruthy();
});

/* test row wins */
test('3 squares in a row with the same mark is a win(1)', () => {
  gameBoard.mark(0, 0, 'X');
  gameBoard.mark(0, 1, 'X');
  gameBoard.mark(0, 2, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});
test('3 squares in a row with the same mark is a win(2)', () => {
  gameBoard.mark(1, 0, 'X');
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(1, 2, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});
test('3 squares in a row with the same mark is a win(3)', () => {
  gameBoard.mark(2, 0, 'X');
  gameBoard.mark(2, 1, 'X');
  gameBoard.mark(2, 2, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});

/* test column wins */
test('3 squares in a column with the same mark is a win(1)', () => {
  gameBoard.mark(0, 0, 'X');
  gameBoard.mark(1, 0, 'X');
  gameBoard.mark(2, 0, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});
test('3 squares in a column with the same mark is a win(2)', () => {
  gameBoard.mark(0, 1, 'X');
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(2, 1, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});
test('3 squares in a column with the same mark is a win(3)', () => {
  gameBoard.mark(0, 2, 'X');
  gameBoard.mark(1, 2, 'X');
  gameBoard.mark(2, 2, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});

/* test diagonal wins */
test('3 squares in a diagonal with the same mark is a win(1)', () => {
  gameBoard.mark(0, 0, 'X');
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(2, 2, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});
test('3 squares in a diagonal with the same mark is a win(2)', () => {
  gameBoard.mark(0, 2, 'X');
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(2, 0, 'X');
  expect(gameBoard.isGameOver()).toBeTruthy();
});


/* test non-winning combinations */
test('a non-winning combination is not a win(1)', () => {
  gameBoard.mark(0, 1, 'X');
  gameBoard.mark(1, 1, 'X');
  gameBoard.mark(2, 2, 'X');
  expect(gameBoard.isGameOver()).toBeFalsy();
});
test('a non-winning combination is not a win(2)', () => {
  gameBoard.mark(0, 0, 'X');
  expect(gameBoard.isGameOver()).toBeFalsy();
});
test('a non-winning combination is not a win(3)', () => {
  gameBoard.mark(2, 0, 'X');
  gameBoard.mark(2, 2, 'X');
  expect(gameBoard.isGameOver()).toBeFalsy();
});
test('an empty board is not a winning combination', ()=> {
  expect(gameBoard.isGameOver()).toBeFalsy();
});
