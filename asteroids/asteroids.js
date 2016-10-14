require('./style.css');
const Game = require('./lib/game');
const GameView = require('./lib/game-view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('made it here');
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  // window.addEventListener('resize', resizeCanvas, false);
  // function resizeCanvas() {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // }
  const size = [window.innerWidth, window.innerHeight];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const game = new Game(size);
  const g = new GameView(game, context);
  g.start();
});
