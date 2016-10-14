const MovingObject = require('./moving-object');
const Util = require('./utils');

function Asteroid(options) {
  let params = { pos: options.pos, color: Util.randomColor(), radius: Util.randomRadius() , vel: Util.randomVec(50), game: options.game };
  MovingObject.call(this, params);
}

Util.inherits(MovingObject, Asteroid);

module.exports = Asteroid;
