const nums = [1, 2, 3, 4, 5, 6];

const result = nums.map((num) => num * num);

console.log('Result using inbuilt method: ', result);

Array.prototype.myMap = function(cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

const newResult = nums.myMap(function (num, index, array) {
  return num * num;
});

console.log('Result using custom method: ', newResult);
