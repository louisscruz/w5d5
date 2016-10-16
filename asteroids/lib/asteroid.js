const MovingObject = require('./moving-object');
const Ship = require('./ship');
const Bullet = require('./bullet');
const Util = require('./utils');

function Asteroid(options) {
  let params = { pos: options.pos, color: Util.randomColor(), radius: Util.randomRadius() , vel: Util.randomVec(5), game: options.game };
  MovingObject.call(this, params);
}

Util.inherits(MovingObject, Asteroid);

Asteroid.prototype.isWrappable = true;

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
    return true;
  } else if (otherObject instanceof Bullet) {
    this.remove();
    otherObject.remove();
    return true;
  }
};

module.exports = Asteroid;
