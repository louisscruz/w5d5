const Game = require('./game');

function MovingObject (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.beginPath();

  context.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  context.fill();
};

MovingObject.prototype.collideWith = function (otherObject) {};

const NORMAL_FPS = 1000 / 60;

MovingObject.prototype.move = function (timeDelta) {
  const velocityScale = timeDelta / NORMAL_FPS;
  const offsetX = this.vel[0] * velocityScale;
  const offsetY = this.vel[1] * velocityScale;

  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

  if (this.game.isOutOfBounds(this.pos)) {
    if (this.isWrappable) {
      this.pos = this.game.wrap(this);
    } else {
      this.remove();
    }
  }
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  let xDiff = Math.abs(this.pos[0] - otherObject.pos[0]);
  let yDiff = Math.abs(this.pos[1] - otherObject.pos[1]);
  let difference = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
  let radiusSum = this.radius + otherObject.radius;
  if (difference <= radiusSum) {
    return true;
  }
  return false;
};

MovingObject.prototype.remove = function () {
  this.game.remove(this);
};

module.exports = MovingObject;
