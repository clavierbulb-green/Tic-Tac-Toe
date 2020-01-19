const gameBoard = require("./gameBoard");
const logic = require("./logic");

const display = (() => {
  const squares = [];

  const init = () => {
    /* Populate DOMBoard with empty squares. */
    const app = document.querySelector(".app");
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
    setMarkers();
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
      clear();
      gameBoard.clear();
    } else if (logic.gameOver(gameBoard.board)) {
      let root = document.documentElement;
      const win_color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--win_color");
      const border_color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--border_color");
      if (marker == "X") {
        root.style.setProperty("--X_win_border", win_color);
        root.style.setProperty("--O_win_border", border_color);
      } else {
        root.style.setProperty("--O_win_border", win_color);
        root.style.setProperty("--X_win_border", border_color);
      }
      clear();
      gameBoard.clear();
    }
  };

  const setMarkers = () => {
    const markers = ["X", "O"];
    // let starting marker be random
    let currentMarker = markers[Math.floor(Math.random() * 2)];

    let root = document.documentElement;
    if (currentMarker === "X") {
      root.style.setProperty("--X_opacity", 1);
    } else {
      root.style.setProperty("--O_opacity", 1);
    }

    squares.forEach(square => {
      square.addEventListener("click", () => {
        if (!square.textContent) {
          markSquare(square, currentMarker);
          // change to other player
          currentMarker = markers[Number(!markers.indexOf(currentMarker))];
          if (currentMarker == "X") {
            root.style.setProperty("--X_opacity", 1);
            root.style.setProperty("--O_opacity", 0.4);
          } else {
            root.style.setProperty("--O_opacity", 1);
            root.style.setProperty("--X_opacity", 0.4);
          }
        }
      });
    });
  };

  return {
    init
  };
})();

module.exports = display;
