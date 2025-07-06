/**
 * Promise.all()
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2");
    reject("p2");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 3000);
});

const promises = Promise.all([p1, p2, p3]);

console.log(promises);

promises
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Case 1: All promises are resolved
// O/P: [ 'p1', 'p2', 'p3' ] will return array of 
// resolved promises.

// Time taken will be the maximum time taken by any promise
// for example out of all promises which takes maximum time
// will be time when all promises are resolved.

// Case 2: At least one promise is rejected
// O/P: 'p2' 
// As soon as the any promise is rejected will get an error.

// Note: when one of the promise is rejected that does not mean
// that ongoing promises are cancelled. Currently, there is no
// way to cancel ongoing promises in JavaScript.