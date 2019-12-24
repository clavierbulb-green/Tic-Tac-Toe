const logic = require("./logic");
const gameBoard = require("./gameBoard");

beforeEach(() => {
  gameBoard.clear();
});

/* test row wins */
test("3 squares in a row with the same mark is a win(1)", () => {
  gameBoard.mark(0, 0, "X");
  gameBoard.mark(0, 1, "X");
  gameBoard.mark(0, 2, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});
test("3 squares in a row with the same mark is a win(2)", () => {
  gameBoard.mark(1, 0, "X");
  gameBoard.mark(1, 1, "X");
  gameBoard.mark(1, 2, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});
test("3 squares in a row with the same mark is a win(3)", () => {
  gameBoard.mark(2, 0, "X");
  gameBoard.mark(2, 1, "X");
  gameBoard.mark(2, 2, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});

/* test column wins */
test("3 squares in a column with the same mark is a win(1)", () => {
  gameBoard.mark(0, 0, "X");
  gameBoard.mark(1, 0, "X");
  gameBoard.mark(2, 0, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});
test("3 squares in a column with the same mark is a win(2)", () => {
  gameBoard.mark(0, 1, "X");
  gameBoard.mark(1, 1, "X");
  gameBoard.mark(2, 1, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});
test("3 squares in a column with the same mark is a win(3)", () => {
  gameBoard.mark(0, 2, "X");
  gameBoard.mark(1, 2, "X");
  gameBoard.mark(2, 2, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});

/* test diagonal wins */
test("3 squares in a diagonal with the same mark is a win(1)", () => {
  gameBoard.mark(0, 0, "X");
  gameBoard.mark(1, 1, "X");
  gameBoard.mark(2, 2, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});
test("3 squares in a diagonal with the same mark is a win(2)", () => {
  gameBoard.mark(0, 2, "X");
  gameBoard.mark(1, 1, "X");
  gameBoard.mark(2, 0, "X");
  expect(logic.gameOver(gameBoard.board)).toBeTruthy();
});

/* test non-winning combinations */
test("a non-winning combination is not a win(1)", () => {
  gameBoard.mark(0, 1, "X");
  gameBoard.mark(1, 1, "X");
  gameBoard.mark(2, 2, "X");
  expect(logic.gameOver(gameBoard.board)).toBeFalsy();
});
test("a non-winning combination is not a win(2)", () => {
  gameBoard.mark(0, 0, "X");
  expect(logic.gameOver(gameBoard.board)).toBeFalsy();
});
test("a non-winning combination is not a win(3)", () => {
  gameBoard.mark(2, 0, "X");
  gameBoard.mark(2, 2, "X");
  expect(logic.gameOver(gameBoard.board)).toBeFalsy();
});
test("an empty board is not a winning combination", () => {
  expect(logic.gameOver(gameBoard.board)).toBeFalsy();
});
