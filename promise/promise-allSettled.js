/**
 * Promise.allSettled()
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

const allSettled = Promise.allSettled([p1, p2, p3]);

allSettled
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// O/P: [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'rejected', reason: 'p2' },
//   { status: 'fulfilled', value: 'p3' }
// ]
// Will return the all of all promises even if one of them is rejected
// or fulfilled.
