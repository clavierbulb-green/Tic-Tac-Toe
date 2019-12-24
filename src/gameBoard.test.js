const gameBoard = require("./gameBoard");

beforeEach(() => {
  gameBoard.clear();
});

/* || test mark() */
test("marking a square updates board", () => {
  gameBoard.mark(1, 1, "X");
  expect(gameBoard.board[1][1]).toBe("X");
});
test("attempt to mark already marked square should not update board.", () => {
  gameBoard.mark(1, 1, "X");
  gameBoard.mark(1, 1, "O");
  expect(gameBoard.board[1][1]).toBe("X");
});

/* test isFull() */
test("an empty board is not full", () => {
  expect(gameBoard.isFull()).toBeFalsy();
});
test("a board is not full if not all nine squares are marked", () => {
  gameBoard.mark(1, 1, "X");
  expect(gameBoard.isFull()).toBeFalsy();
});
test("a board is full when all nine squares are marked", () => {
  gameBoard.mark(0, 0, "X");
  gameBoard.mark(0, 1, "X");
  gameBoard.mark(0, 2, "X");
  gameBoard.mark(1, 0, "X");
  gameBoard.mark(1, 1, "X");
  gameBoard.mark(1, 2, "X");
  gameBoard.mark(2, 0, "X");
  gameBoard.mark(2, 1, "X");
  gameBoard.mark(2, 2, "X");
  expect(gameBoard.isFull()).toBeTruthy();
});
