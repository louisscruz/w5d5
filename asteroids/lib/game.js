const Asteroid = require('./asteroid');
const Ship = require('./ship');
const Bullet = require('./bullet');
const Utils = require('./utils');

function Game(size) {
  this.DIM_X = size[0];
  this.DIM_Y = size[1];
  this.NUM_ASTEROIDS = 20;
  this.asteroids = this.addAsteroids();
  this.ships = [];
}

Game.prototype.addAsteroids = function() {
  let asteroids = [];
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let options = { pos: this.randomPos(), game: this };
    asteroids.push(new Asteroid(options));
  }
  return asteroids;
};

Game.prototype.randomPos = function() {
  const x = Math.floor(Math.random() * this.DIM_X);
  const y = Math.floor(Math.random() * this.DIM_Y);
  return [x,y];
};

Game.prototype.allObjects = function () {
  return [].concat(this.ships, this.asteroids);
};

Game.prototype.draw = function(context) {
  context.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.addBackground(context);
  this.allObjects().forEach(object => {
    object.draw(context);
  });
};

Game.prototype.step = function (delta) {
  this.moveObjects(delta);
  this.checkCollisions();
};

Game.prototype.moveObjects = function(delta) {
  this.allObjects().forEach(object => {
    object.move(delta);
  });
};

Game.prototype.wrap = function(obj) {
  let newX = obj.pos[0];
  let newY = obj.pos[1];

  if (obj.pos[0] > this.DIM_X + obj.radius) {
    newX = obj.pos[0] - this.DIM_X - (obj.radius * 2);
  } else if (obj.pos[0] < (-1 * obj.radius)) {
    newX = obj.pos[0] + this.DIM_X + (obj.radius * 2);
  }

  if (obj.pos[1] > this.DIM_Y + obj.radius) {
    newY = obj.pos[1] - this.DIM_Y - (obj.radius * 2);
  } else if (obj.pos[1] < -50) {
    newY = obj.pos[1] + this.DIM_Y + (obj.radius * 2);
  }
  return [newX, newY];
};

Game.prototype.addBackground = function(context) {
  let grd = context.createLinearGradient(166.000, 0.000, 134.000, 300.000);
  grd.addColorStop(0.000, 'rgba(0, 0, 0, 1.000)');
  grd.addColorStop(1.000, 'rgba(53, 44, 44, 1.000)');
  context.fillStyle = grd;
  context.fillRect(0, 0, this.DIM_X, this.DIM_Y);
};

Game.prototype.checkCollisions = function () {
  const allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = 0; j < allObjects.length; j++) {
      const obj1 = allObjects[i];
      const obj2 = allObjects[j];

      if (obj1.isCollidedWith(obj2)) {
        const collision = obj1.collideWith(obj2);
        if (collision) return;
      }
    }
  }
};

Game.prototype.addShip = function () {
  const ship = new Ship({
    pos: this.randomPos(),
    game: this
  });

  this.ships.push(ship);
};

Game.prototype.isOutOfBounds = function (pos) {
  return (pos[0] < 0) || (pos[1] < 0) ||
    (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};


Game.prototype.remove = function (object) {
  if (object instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(object), 1);
  } else if (object instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(object), 1);
  } else if (object instanceof Ship) {
    this.ships.splice(this.ships.indexOf(object), 1);
  } else {
    throw "wtf?";
  }
};

Game.prototype.setSize = function (size) {
  this.DIM_X = size[0];
  this.DIM_Y = size[1];
};

module.exports = Game;
