function GameView (game, context) {
  this.game = game;
  this.context = context;
}

module.exports = GameView;

GameView.prototype.start = function () {
  const animateCallback = () => {
    this.game.draw(this.context);
    this.game.moveObjects();

    requestAnimationFrame(animateCallback);
  };
  animateCallback();
};
