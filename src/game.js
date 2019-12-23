const gameBoard = require("./gameBoard");
const display = require("./display");
const Player = require("./player");

const game = (() => {
  // be able to play a game on the console first, then link the game logic
  // to the DOM

  const run = () => {
    display.init();

    //dummy players
    const player1 = Player("foo1", "X");
    const player2 = Player("foo2", "O");

    const players = [player1, player2];

    let currentPlayer = players[1];

    // main game loop
    while (!gameBoard.isFull()) {
      currentPlayer = players[Number(!players.indexOf(currentPlayer))];

      let row = prompt(`${currentPlayer.name}: enter row of sq. to mark`);
      let col = prompt(`${currentPlayer.name}: enter column of sq. to mark`);
      gameBoard.mark(row, col, currentPlayer.marker);
      alert(`${currentPlayer.name} marks square[${row},${col}]`);

      display.render(gameBoard.board);

      if (gameBoard.isGameOver()) {
        break;
      }
    }
    if (gameBoard.isGameOver()) {
      alert(`${currentPlayer.name} WINS!`);
    } else {
      alert("This game was a DRAW!");
    }
  };
  return {
    run
  };
})();

module.exports = game;
