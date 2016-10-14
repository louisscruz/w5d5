function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  };
  return sum;
}

// console.log(sum(1,2,3));

// Function.prototype.myBind = function (context, input) {
//   let args = Array.prototype.slice.call(arguments).slice(1);
//   let that = this;
//   return function (input2) {
//     let newArgs = Array.prototype.slice.call(arguments);
//     let finalArgs = args.concat(newArgs);
//     that.apply(context, finalArgs);
//   }
// }
//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

Function.prototype.myBind2 = function (context, ...input) {
  let that = this;
  return function (...input2) {
    let finalArgs = input.concat(input2);
    that.apply(context, finalArgs);
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// markov.says.myBind2(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
markov.says.myBind2(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true
//
// markov.says.myBind2(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// const notMarkovSays = markov.says.myBind2(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

Function.prototype.curry = function (length) {
  let args = [];
  let fn = this;

  function innerCurry(value) {
    args = args.concat(value);
    if (args.length >= length) {
      return fn(...args);
    } else {
      return innerCurry;
    }
  };
  return innerCurry;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// const f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30

Function.prototype.curry2 = function (length) {
  let args = [];
  let fn = this;

  function innerCurry(value) {
    args = args.push(value);
    if (args.length >= length) {
      return fn.apply(this, args);
    } else {
      return innerCurry;
    }
  };
  return innerCurry;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// const f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry2(3)(4)(20)(6)); // == 30
