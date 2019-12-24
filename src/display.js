const gameBoard = require("./gameBoard");
const logic = require("./logic");

const display = (() => {
  const squares = [];

  const init = () => {
    /* Populate DOMBoard with empty squares. */
    const DOMBoard = document.getElementById("board");

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.dataset.row = row;
        square.dataset.col = col;

        squares.push(square);

        DOMBoard.appendChild(square);
      }
    }
    const marker1 = prompt("Enter a marker for PLAYER1:");
    const marker2 = prompt("Enter a marker for PLAYER2:");
    setMarkers(marker1, marker2);
  };

  const clear = () => {
    squares.forEach(square => (square.textContent = ""));
  };

  const render = board => {
    clear();
    squares.forEach(square => {
      let row = square.dataset.row;
      let col = square.dataset.col;
      let marker = board[row][col];
      square.textContent = marker;
    });
  };

  const markSquare = (square, marker) => {
    gameBoard.mark(square.dataset.row, square.dataset.col, marker);
    render(gameBoard.board);
    if (gameBoard.isFull()) {
      alert("This game is a DRAW!");
      clear();
      gameBoard.clear();
    } else if (logic.gameOver(gameBoard.board)) {
      alert(`${marker} is the WINNER!`);
      clear();
      gameBoard.clear();
    }
  };

  const setMarkers = (marker1, marker2) => {
    const markers = [marker1, marker2];
    let currentMarker = markers[0];
    squares.forEach(square => {
      square.addEventListener("click", () => {
        if (!square.textContent) {
          markSquare(square, currentMarker);
          currentMarker = markers[Number(!markers.indexOf(currentMarker))];
        }
      });
    });
  };

  return {
    init,
    setMarkers
  };
})();

module.exports = display;
