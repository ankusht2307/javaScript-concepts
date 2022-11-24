/**
 * currying using bind method
 */

const add = function (num1) {
  return function (num2) {
    return num1 + num2;
  };
};

const additionTwo = add.bind(this, 1);
console.log(additionTwo()(2));

const additionThree = add.bind(this, 1);
console.log(additionTwo()(3));

// add three nums

const addUptoThreeNums = function () {
  return function (num1) {
    return function (num2) {
      return function (num3) {
        return num1 + num2 + num3;
      };
    };
  };
};
const addIt = addUptoThreeNums.bind(this);

console.log(addIt()(1)(2)(3));

/**
 * Using closures
 */

const subtract = function (num1) {
  return function (num2) {
    return num1 - num2;
  };
};

console.log(subtract(10)(2));

/**
 * Infinite currying
 */

const multiply = function (a) {
  return function (b) {
    if (!b) return a;
    let m = a * b;
    return multiply(m, b);
  };
};

console.log(multiply(2)(2)(2)(2)());
