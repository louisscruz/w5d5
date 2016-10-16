const MovingObject = require('./moving-object');
const Utils = require('./utils');

function Ship (options) {
  options.radius = 10;
  options.vel = options.vel || [0, 0];
  options.color = options.color || Utils.randomColor();

  MovingObject.call(this, options);
}

Utils.inherits(MovingObject, Ship);

Ship.prototype.draw = function (context) {
  context.fillStyle = Utils.randomColor();
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

Ship.prototype.power = function (impulse) {
  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
  this.move();
};

Ship.prototype.relocate = function () {
  this.pos = this.game.randomPos();
  this.vel = [0, 0];
};

module.exports = Ship;
