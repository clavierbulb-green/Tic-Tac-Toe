const Player = require('./player');

const testPlayer = Player('foo', 'X');

test('a Player has a name', () => {
  expect(testPlayer.name).toBe('foo');
});
test('a Player has a marker', () => {
  expect(testPlayer.marker).toBe('X');
});
