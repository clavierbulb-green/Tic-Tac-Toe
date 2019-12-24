const display = require("./display");

const game = (() => {
  const setup = () => {
    display.init();
    const marker1 = prompt("Enter a marker for PLAYER1:");
    const marker2 = prompt("Enter a marker for PLAYER2:");
    display.setMarkers(marker1, marker2);
  };
  return {
    setup
  };
})();

module.exports = game;
