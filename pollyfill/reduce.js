const nums = [1, 2, 3, 4, 5, 6];

const total = nums.reduce((acc, num, arr) => acc + num);

console.log('Result with built in reduce method: ', total);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};

const totalNew = nums.myReduce(function (acc, num, arr) {
  return acc + num;
}, 0);

console.log('Result with custom reduce method: ', totalNew);
