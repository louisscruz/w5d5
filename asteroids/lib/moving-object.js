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

MovingObject.prototype.move = function () {
  let newX = this.pos[0] + this.vel[0];
  let newY = this.pos[1] + this.vel[1];
  this.pos = this.game.wrap([newX, newY]);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  let xDiff = Math.abs(this.pos[0] - otherObject.pos[0]);
  let yDiff = Math.abs(this.pos[1] - otherObject.pos[1]);
  let difference = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
  let radiusSum = this.radius + otherObject.radius;
  if (difference <= radiusSum) {
    alert('oh no')
    console.log(difference, radiusSum);
    return true;
  }
  return false;
};

module.exports = MovingObject;
