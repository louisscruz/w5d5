/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(1);
	module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(2);
	const GameView = __webpack_require__(6);

	document.addEventListener('DOMContentLoaded', () => {
	  console.log('made it here');
	  let canvas = document.getElementById('canvas');
	  canvas.getContext('2d');
	  const game = new Game();
	  const g = new GameView(game, canvas);
	  g.start();
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Asteroid = __webpack_require__(3);


	function Game() {
	  this.DIM_X = 1280;
	  this.DIM_Y = 720;
	  this.NUM_ASTEROIDS = 15;
	  this.asteroids = this.addAsteroids();
	}

	Game.prototype.addAsteroids = function() {
	  let asteroids = [];
	  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
	    asteroids.push(new Asteroid(this.randomPos()));
	  }
	  return asteroids;
	};

	Game.prototype.randomPos = function() {
	  const x = Math.floor(Math.random(0, this.DIM_X));
	  const y = Math.floor(Math.random(0, this.DIM_Y));
	  return [x,y];
	};

	Game.prototype.draw = function(context) {
	  context.clearRect();
	  this.asteroids.forEach(asteroid => {
	    asteroid.draw(context);
	  });
	};

	Game.prototype.moveObjects = function() {
	  this.asteroids.forEach(asteroid => {
	    asteroid.move();
	  });
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(4);
	const Util = __webpack_require__(5);

	function Asteroid(options) {
	  let params = { pos: options.pos, color: '#000000', radius: 50, vel: Util.randomVec(50) };
	  MovingObject.call(this, params);
	}

	Util.inherits(MovingObject, Asteroid);


/***/ },
/* 4 */
/***/ function(module, exports) {

	function MovingObject (options) {
	  this.pos = options.pos;
	  this.vel = options.vel;
	  this.radius = options.radius;
	  this.color = options.color;

	}

	MovingObject.prototype.draw = function (context) {
	  context.fillStyle = this.color;
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
	  this.pos = [newX, newY];
	};

	module.exports = MovingObject;


/***/ },
/* 5 */
/***/ function(module, exports) {

	const Util = {
	  inherits: function (childClass, parentClass) {
	    function Surrogate() {}
	    Surrogate.prototype = parentClass.prototype;
	    childClass.prototype = new Surrogate();
	    childClass.prototype.constructor = childClass;
	  },

	  randomVec: function (length) {
	    let newVel = [];
	    for (let i = 0; i < 2; i++) {
	      newVel.push(Math.floor(Math.random(0, length)));
	    }
	    return newVel;
	  }
	};

	module.exports = Util;


/***/ },
/* 6 */
/***/ function(module, exports) {

	function GameView (game, context) {
	  this.game = game;
	  this.context = context;
	}

	module.exports = GameView;

	GameView.prototype.start = function () {
	  const animateCallback = () => {
	    this.game.draw(this.context);
	    this.game.moveObject();

	    requestAnimationFrame(animateCallback);
	  };
	  animateCallback();
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(1);
		__webpack_require__(1);
		module.exports = __webpack_require__(7);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		const GameView = __webpack_require__(2);
		const Game = __webpack_require__(3);

		document.addEventListener('DOMContentLoaded', () => {
		  console.log('made it here');
		  let canvas = document.getElementById('canvas');
		  canvas.getContext('2d');
		  const game = new Game();
		  const g = new GameView(game, canvas);
		  g.start();
		});


	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		function GameView (game, context) {
		  this.game = game;
		  this.context = context;
		}

		module.exports = GameView;

		GameView.prototype.start = function () {
		  const animateCallback = () => {
		    this.game.draw(this.context);
		    this.game.moveObject();

		    requestAnimationFrame(animateCallback);
		  };
		  animateCallback();
		};


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		const Asteroid = __webpack_require__(4);


		function Game() {
		  this.DIM_X = 1280;
		  this.DIM_Y = 720;
		  this.NUM_ASTEROIDS = 15;
		  this.asteroids = this.addAsteroids();
		}

		Game.prototype.addAsteroids = function() {
		  let asteroids = [];
		  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
		    asteroids.push(new Asteroid(this.randomPos()));
		  }
		  return asteroids;
		};

		Game.prototype.randomPos = function() {
		  const x = Math.floor(Math.random(0, this.DIM_X));
		  const y = Math.floor(Math.random(0, this.DIM_Y));
		  return [x,y];
		};

		Game.prototype.draw = function(context) {
		  context.clearRect();
		  this.asteroids.forEach(asteroid => {
		    asteroid.draw(context);
		  });
		};

		Game.prototype.moveObjects = function() {
		  this.asteroids.forEach(asteroid => {
		    asteroid.move();
		  });
		};


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		const MovingObject = __webpack_require__(5);
		const Util = __webpack_require__(6);

		function Asteroid(options) {
		  let params = { pos: options.pos, color: '#000000', radius: 50, vel: Util.randomVec(50) };
		  MovingObject.call(this, params);
		}

		Util.inherits(MovingObject, Asteroid);


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		function MovingObject (options) {
		  this.pos = options.pos;
		  this.vel = options.vel;
		  this.radius = options.radius;
		  this.color = options.color;

		}

		MovingObject.prototype.draw = function (context) {
		  context.fillStyle = this.color;
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
		  this.pos = [newX, newY];
		};

		module.exports = MovingObject;


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		const Util = {
		  inherits: function (childClass, parentClass) {
		    function Surrogate() {}
		    Surrogate.prototype = parentClass.prototype;
		    childClass.prototype = new Surrogate();
		    childClass.prototype.constructor = childClass;
		  },

		  randomVec: function (length) {
		    let newVel = [];
		    for (let i = 0; i < 2; i++) {
		      newVel.push(Math.floor(Math.random(0, length)));
		    }
		    return newVel;
		  }
		};

		module.exports = Util;


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		/******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};

		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {

		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;

		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};

		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;

		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}


		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;

		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;

		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";

		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {

			__webpack_require__(1);
			__webpack_require__(1);
			module.exports = __webpack_require__(7);


		/***/ },
		/* 1 */
		/***/ function(module, exports, __webpack_require__) {

			__webpack_require__(2);

			document.addEventListener('DOMContentLoaded', () => {
			  console.log('made it here');
			  let canvas = document.getElementById('canvas');
			  canvas.getContext('2d');
			  const g = new GameView();
			  g.start();
			});


		/***/ },
		/* 2 */
		/***/ function(module, exports, __webpack_require__) {

			const Game = __webpack_require__(3);

			function GameView () {
			  this.game = new Game();

			}

			module.exports = GameView;

			GameView.prototype.start = function () {
			  const animateCallback = () => {
			    this.game.draw();
			    this.game.moveObject();

			    requestAnimationFrame(animateCallback);
			  };
			  animateCallback();
			};


		/***/ },
		/* 3 */
		/***/ function(module, exports, __webpack_require__) {

			const Asteroid = __webpack_require__(4);


			function Game() {
			  this.DIM_X = 1280;
			  this.DIM_Y = 720;
			  this.NUM_ASTEROIDS = 15;
			  this.asteroids = this.addAsteroids();
			}

			Game.prototype.addAsteroids = function() {
			  let asteroids = [];
			  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
			    asteroids.push(new Asteroid(this.randomPos()));
			  }
			  return asteroids;
			};

			Game.prototype.randomPos = function() {
			  const x = Math.floor(Math.random(0, this.DIM_X));
			  const y = Math.floor(Math.random(0, this.DIM_Y));
			  return [x,y];
			};

			Game.prototype.draw = function(context) {
			  context.clearRect();
			  this.asteroids.forEach(asteroid => {
			    asteroid.draw(context);
			  });
			};

			Game.prototype.moveObjects = function() {
			  this.asteroids.forEach(asteroid => {
			    asteroid.move();
			  });
			};


		/***/ },
		/* 4 */
		/***/ function(module, exports, __webpack_require__) {

			const MovingObject = __webpack_require__(5);
			const Util = __webpack_require__(6);

			function Asteroid(options) {
			  let params = { pos: options.pos, color: '#000000', radius: 50, vel: Util.randomVec(50) };
			  MovingObject.call(this, params);
			}

			Util.inherits(MovingObject, Asteroid);


		/***/ },
		/* 5 */
		/***/ function(module, exports) {

			function MovingObject (options) {
			  this.pos = options.pos;
			  this.vel = options.vel;
			  this.radius = options.radius;
			  this.color = options.color;

			}

			MovingObject.prototype.draw = function (context) {
			  context.fillStyle = this.color;
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
			  this.pos = [newX, newY];
			};

			module.exports = MovingObject;


		/***/ },
		/* 6 */
		/***/ function(module, exports) {

			const Util = {
			  inherits: function (childClass, parentClass) {
			    function Surrogate() {}
			    Surrogate.prototype = parentClass.prototype;
			    childClass.prototype = new Surrogate();
			    childClass.prototype.constructor = childClass;
			  },

			  randomVec: function (length) {
			    let newVel = [];
			    for (let i = 0; i < 2; i++) {
			      newVel.push(Math.floor(Math.random(0, length)));
			    }
			    return newVel;
			  }
			};

			module.exports = Util;


		/***/ },
		/* 7 */
		/***/ function(module, exports) {

			/******/ (function(modules) { // webpackBootstrap
			/******/ 	// The module cache
			/******/ 	var installedModules = {};

			/******/ 	// The require function
			/******/ 	function __webpack_require__(moduleId) {

			/******/ 		// Check if module is in cache
			/******/ 		if(installedModules[moduleId])
			/******/ 			return installedModules[moduleId].exports;

			/******/ 		// Create a new module (and put it into the cache)
			/******/ 		var module = installedModules[moduleId] = {
			/******/ 			exports: {},
			/******/ 			id: moduleId,
			/******/ 			loaded: false
			/******/ 		};

			/******/ 		// Execute the module function
			/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ 		// Flag the module as loaded
			/******/ 		module.loaded = true;

			/******/ 		// Return the exports of the module
			/******/ 		return module.exports;
			/******/ 	}


			/******/ 	// expose the modules object (__webpack_modules__)
			/******/ 	__webpack_require__.m = modules;

			/******/ 	// expose the module cache
			/******/ 	__webpack_require__.c = installedModules;

			/******/ 	// __webpack_public_path__
			/******/ 	__webpack_require__.p = "";

			/******/ 	// Load entry module and return exports
			/******/ 	return __webpack_require__(0);
			/******/ })
			/************************************************************************/
			/******/ ([
			/* 0 */
			/***/ function(module, exports, __webpack_require__) {

				__webpack_require__(1);
				__webpack_require__(1);
				(function webpackMissingModule() { throw new Error("Cannot find module \"bundle.js\""); }());


			/***/ },
			/* 1 */
			/***/ function(module, exports, __webpack_require__) {

				__webpack_require__(2);

				document.addEventListener('DOMContentLoaded', () => {
				  let canvas = document.getElementById('canvas');
				  canvas.getContext('2d');
				  const g = new GameView();
				  g.start();
				});


			/***/ },
			/* 2 */
			/***/ function(module, exports, __webpack_require__) {

				const Game = __webpack_require__(3);

				function GameView () {
				  this.game = new Game();

				}

				module.exports = GameView;

				GameView.prototype.start = function () {
				  const animateCallback = () => {
				    this.game.draw();
				    this.game.moveObject();

				    requestAnimationFrame(animateCallback);
				  }
				  animateCallback();
				}


			/***/ },
			/* 3 */
			/***/ function(module, exports, __webpack_require__) {

				const Asteroid = __webpack_require__(4);


				function Game() {
				  this.DIM_X = 1280;
				  this.DIM_Y = 720;
				  this.NUM_ASTEROIDS = 15;
				  this.asteroids = this.addAsteroids();
				}

				Game.prototype.addAsteroids = function() {
				  let asteroids = [];
				  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
				    asteroids.push(new Asteroid(this.randomPos()));
				  }
				  return asteroids;
				};

				Game.prototype.randomPos = function() {
				  const x = Math.floor(Math.random(0, this.DIM_X));
				  const y = Math.floor(Math.random(0, this.DIM_Y));
				  return [x,y];
				};

				Game.prototype.draw = function(context) {
				  context.clearRect();
				  this.asteroids.forEach(asteroid => {
				    asteroid.draw(context);
				  });
				};

				Game.prototype.moveObjects = function() {
				  this.asteroids.forEach(asteroid => {
				    asteroid.move();
				  });
				};


			/***/ },
			/* 4 */
			/***/ function(module, exports, __webpack_require__) {

				const MovingObject = __webpack_require__(5);
				const Util = __webpack_require__(6);

				function Asteroid(options) {
				  let params = { pos: options.pos, color: '#000000', radius: 50, vel: Util.randomVec(50) };
				  MovingObject.call(this, params);
				}

				Util.inherits(MovingObject, Asteroid);


			/***/ },
			/* 5 */
			/***/ function(module, exports) {

				function MovingObject (options) {
				  this.pos = options.pos;
				  this.vel = options.vel;
				  this.radius = options.radius;
				  this.color = options.color;

				}

				MovingObject.prototype.draw = function (context) {
				  context.fillStyle = this.color;
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
				  this.pos = [newX, newY];
				};

				module.exports = MovingObject;


			/***/ },
			/* 6 */
			/***/ function(module, exports) {

				const Util = {
				  inherits: function (childClass, parentClass) {
				    function Surrogate() {}
				    Surrogate.prototype = parentClass.prototype;
				    childClass.prototype = new Surrogate();
				    childClass.prototype.constructor = childClass;
				  },

				  randomVec: function (length) {
				    let newVel = [];
				    for (let i = 0; i < 2; i++) {
				      newVel.push(Math.floor(Math.random(0, length)));
				    }
				    return newVel;
				  }
				};

				module.exports = Util;


			/***/ }
			/******/ ]);

		/***/ }
		/******/ ]);

	/***/ }
	/******/ ]);

/***/ }
/******/ ]);