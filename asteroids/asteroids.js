require('./style.css');
const Game = require('./lib/game');
const GameView = require('./lib/game-view');

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  const size = [window.innerWidth, window.innerHeight];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', function() {
    const size = [window.innerWidth, window.innerHeight];
    game.setSize(size);
    canvas.width = size[0];
    canvas.height = size[1];
  });
  const game = new Game(size);
  const g = new GameView(game, context);
  g.start();
});
