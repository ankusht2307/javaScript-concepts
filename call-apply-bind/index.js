// call, apply and bind are javaScript methods that are
// available to all javaScript functions which are used
// to set the `this` keyword irrespective of the how the
// functions is called.

// We can use this to tie a function into an object and call
// the that function as if it belongs to that object.

const myName = {
  firstname: 'Ankush',
  lastname: 'Thakur',
  age: 30,
  printIntro: function () {
    return `The name is ${this.firstname} ${this.lastname} and i am ${this.age} years old.`;
  },
};

console.log(myName.printIntro());
// O/P: The name is Ankush Thakur and i am 30 years old

/**
 * But what if we have another object with same properties.
 * It would be redundant to create 'printIntro' method
 * again in that object. So now with the help of 'call' we can call
 * 'printIntro' for earlier object that will do the same function.
 * Essentially we can call this 'Function Borrowing' in laymen language.
 */

const yourName = {
  firstname: 'John',
  lastname: 'Doe',
  age: 40,
};

// function borrowing
console.log(myName.printIntro.call(yourName));

/**
 * We can optimize a little more. Now instead of using object's
 * method, we can put this method in separate function and then
 * call it for both objects using 'call';
 */

const sayHello = {
  message: 'Hello! how are you?',
};

const sayBye = {
  message: 'GoodBye! Take care.',
};

const greet = function () {
  return this.message;
};

console.log(greet.call(sayHello));
console.log(greet.call(sayBye));

// Passing Arguments

const superMan = {
  power: 'flying',
};

const showPowers = function (power1, power2) {
  return `${this.power}, ${power1}, ${power2}`;
}

/**
 * so, typically we can pass any no, of args
 * with call separated with commas and it with
 * inject them to the function as params so
 * that we can use them.
 */
console.log(showPowers.call(superMan, 'X ray vision', 'super strength'));


// Apply

/**
 * Apply is same as call, the only difference
 * is that instead of passing args separately
 * we can pass them in array.
 */

console.log(showPowers.apply(superMan, ['super-hearing', 'power-punch']));

// Bind

/**
 * Bind method does the same thing but
 * instead of call the function directly 
 * it gives us the copy of the function
 * that we can invoke later any no, of times
 */

const showAllPowers = showPowers.bind(superMan, 'super-fast', 'bullet-proof')

console.log(showAllPowers());
console.log(showAllPowers());
console.log(showAllPowers());


/**
 * This is all about call apply bind.
 */