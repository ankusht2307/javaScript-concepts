/**
 * Promise.any()
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1");
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

const any = Promise.any([p1, p2, p3]);

any
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * Output: p3
 *
 * Almost similar like promise.race() but instead of returning
 * rejected promise, it returns the first resolved promise.
 * For ex. if first promise gets rejected and second promise
 * gets resolved then it will return the second promise.
 * 
 * And if all the promises are rejected, it returns an
 * array with all the rejected promises.
 * ex. [AggregateError: All promises were rejected] {
 *  [errors]: [ 'p1', 'p2', 'p3' ]
 * }
 */
