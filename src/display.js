const display = (() => {
  const DOMBoard = document.getElementById("board");

  const init = () => {
    /* Populate DOMBoard with empty squares. */

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.dataset.row = row;
        square.dataset.col = col;

        DOMBoard.appendChild(square);
      }
    }
  }

  const clear = () => {
    for (let i = 0; i < DOMBoard.children.length; i++) {
      let square = DOMBoard.children[i];
      square.textContent = "";
    }
  }

  const render = (board) => {
    clear();
    for (let i = 0; i < DOMBoard.children.length; i++) {
      let square = DOMBoard.children[i];
      let row = square.dataset.row;
      let col = square.dataset.col;
      let marker = board[row][col];
      square.textContent = marker;
    }
  }

  return {
    init,
    render,
  }
})();

module.exports = display;
