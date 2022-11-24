const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = nums.filter(function (num, index, array) {
  return num % 2 === 0;
});

console.log('Result using inbuilt array method: ', result);

Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

const customResult = nums.myFilter(function (num, index, array) {
  return num % 2 === 0;
});

console.log('Result using custom array method: ', customResult);
