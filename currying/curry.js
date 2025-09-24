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
    return multiply(m);
  };
};

console.log(multiply(2)(2)(2)(2)());

const calculate = {
  total: 0,
  plus(value) {
    this.total += value;
    return this;
  },
  minus(value) {
    this.total -= value;
    return this;
  },
  value() {
    return this.total;
  },
};

function plus(val) {
  return calculate.plus(val);
}

function minus(val) {
  return calculate.minus(val);
}

const val = plus(5).plus(2).minus(2).value();
console.log(val);

const product = function (num1) {
  return function (num2) {
    if (!num2) return num1;
    let num3 = num1 * num2;
    return product(num3);
  };
};

const prod = product(2)(3)(2)();
console.log(prod);
