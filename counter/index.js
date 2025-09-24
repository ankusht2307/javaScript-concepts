function counter() {
  let counter = 0;
  function increment() {
    console.log(++counter);
  }
  function decrement() {
    console.log(--counter);
  }
  return { increment, decrement };
}

const count = counter();
count.increment();
count.increment();
count.decrement();
