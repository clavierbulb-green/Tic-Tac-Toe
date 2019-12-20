const display = (() => {
  const DOMBoard = document.getElementById("board");

  const init = () => {
    /* Populate DOMBoard with empty squares containing blank marks. */

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.dataset.row = row;
        square.dataset.col = col;

        let mark = document.createElement("span");
        mark.classList.add("mark");
        square.appendChild(mark);

        DOMBoard.appendChild(square);
      }
    }
  }

  const clear = () => {
    for (let i = 0; i < DOMBoard.children.length; i++) {
      let square = DOMBoard.children[i];
      square.firstChild.textContent = "";
    }
  }

  const render = (board) => {
    clear();
    for (let i = 0; i < DOMBoard.children.length; i++) {
      let square = DOMBoard.children[i];
      let row = square.dataset.row;
      let col = square.dataset.col;
      let marker = board[row][col];
      square.firstChild.textContent = marker;
    }
  }

  return {
    init,
    render,
  }
})();

module.exports = display;
