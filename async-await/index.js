/**
 * async/await
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p2");
  }, 4000);
});

const handlePromise1 = () => {
  console.log("Hi!!");

  // JS Engine will not wait for the promise to resolve,
  // it will continue to the next line
  p1.then((res) => console.log(res));

  console.log("Hello!");
};

// handlePromise1();

const handlePromise2 = async () => {
  console.log("Hi!! - 2");

  // JS Engine will not wait for the promise to resolve,
  // it will continue to the next line
  const promise1 = await p1;
  console.log("waiting..");
  console.log(promise1);
  console.log("Hello! - 2");
};

// handlePromise2();

const handlePromise3 = async () => {
  console.log("Hi!! - 3");

  const promise1 = await p1;
  console.log("waiting for P1..");
  console.log(promise1);

  const promise2 = await p2;
  console.log("waiting for p2..");
  console.log(promise2);

  console.log("Hello! - 3");
};

/**
 * HI!! - 3 will be printed first
 * waiting for P1.. will be printed after 1 second
 * then Promise p1 will be printed
 * waiting for p2.. will be printed after 4 seconds
 * then Promise p2 will be printed
 * Hello! - 3 will be printed last
 *
 * But if the p1 setimeout is increased to greater then p2 setimeout
 * duration then the p1 will wait for that particulaer duration and
 * then all the console logs will be printed together because by the
 * time p1 is resolved, p2 timeout will also be over.
 */

// handlePromise3();

// Promise chaining example
const handlePromise4 = async () => {
  new Promise((resolve, reject) => {
    resolve("Promise p4");
  })
    .then((res) => {
      console.log(res);
      return "Step 2";
    })
    .then((res) => {
      console.log(res);
      return "Step 3";
    })
    .then((res) => {
      console.log(res);
      return "Step 4";
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

handlePromise4();
