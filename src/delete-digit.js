const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str1 = n.toString();
  let arr1 = [];
  for (let i = 0; i < str1.length; i++) {
    let str2 = str1.substring(i+1);
    arr1.push(+str2);
  }
  // 123312312312321
  let str = n.toString();
  let arr = [];
  for (const char of str) {
    arr.push(+char);
  }
  let indexMin = arr.indexOf(Math.min(...arr));
  arr.splice(indexMin, 1);
  str = '';
  for (const num of arr) {
    str += num;
  }
  return Math.max(...arr1, +str);
}

console.log(deleteDigit(342));

module.exports = {
  deleteDigit
};
