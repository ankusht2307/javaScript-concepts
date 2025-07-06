/**
 * Promise.race()
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

const race = Promise.race([p1, p2, p3]);

race
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// O/P: p2

// race will return the first settled or rejected promise
