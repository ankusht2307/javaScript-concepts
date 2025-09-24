/**
 * "this" keyword in JavaScript
 */

console.log(this); // In browser, it will log the global object (window), in Node.js it will log the global object (global)

// In a function, 'this' refers to the global object in non-strict mode
function showThis() {
  console.log(this); // In browser, it will log the global object
}

showThis(); // Call the function to see 'this' in action

const obj = {
  a: 10,
  print: function () {
    console.log(this); // In this context, 'this' refers to the obj object
  },
};

obj.print(); // Call the method to see 'this' in action

const anotherObj = {
  a: 20,
  print: () => {
    console.log(this); // In arrow functions, 'this' is lexically bound, so it refers to the global object
  },
};

anotherObj.print(); // will point to the global object

const obj2 = {
  a: 30,
  print: () => {
    const x = () => {
      console.log(this); // In arrow functions, 'this' is lexically bound, so it refers to the global object
    };
    x();
  },
};

obj2.print(); // will point to the global object

const obj3 = {
  a: 40,
  print: function () {
    const x = () => {
      console.log(this); // In arrow functions, 'this' is lexically bound, so it refers to the obj3 object
    };
    x();
  },
};

obj3.print(); // will point to the obj3 object
