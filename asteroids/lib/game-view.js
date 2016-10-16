function GameView (game, context) {
  this.game = game;
  this.context = context;
  this.game.addShip();
}

GameView.MOVES = {
  'w': [ 0, -1],
  'a': [-1,  0],
  's': [ 0,  1],
  'd': [ 1,  0]
};

GameView.prototype.bindKeyHandlers = function () {
  const ship = this.game.ships[0];

  Object.keys(GameView.MOVES).forEach((k) => {
    let move = GameView.MOVES[k];
    key(k, function () { ship.power(move); });
  });

  key("space", function () { ship.fireBullet(); });
};

GameView.prototype.start = function () {
  this.bindKeyHandlers();
  this.lastTime = 0;
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function(time) {
  const timeDelta = time - this.lastTime;

  this.game.step(timeDelta);
  this.game.draw(this.context);
  this.lastTime = time;

  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;
