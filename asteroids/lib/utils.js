const Util = {
  inherits: function (parentClass, childClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },

  randomVec: function (length) {
    let newVel = [];
    for (let i = 0; i < 2; i++) {
      let polarity = Math.round(Math.random()) === 0 ? -1 : 1
      if (polarity === -1) {
        newVel.push(Math.floor(Math.random() * 5) * polarity - 1);
      } else {
        newVel.push(Math.floor(Math.random() * 5) * polarity + 1);
      }
    }
    console.log(newVel);
    return newVel;
  },

  randomColor: function() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },

  randomRadius: function() {
    return (Math.random() * 25) + 25;
  }
};

module.exports = Util;
