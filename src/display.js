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

  return {
    init,
    render
  };
})();

module.exports = display;
