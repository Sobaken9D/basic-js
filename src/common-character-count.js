const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let obj1 = {};
  for (const char of s1) {
    if (!obj1.hasOwnProperty(char)) {
      obj1[char] = 0;
    }
    obj1[char]+=1;
  }
  let obj2 = {};
  for (const char2 of s2) {
    let ch = `${char2}`;
    if (!obj2.hasOwnProperty(ch)) {
      obj2[ch] = 0;
    }
    obj2[ch]+=1;
  }
  let res = 0;
  for (const prop of Object.keys(obj1)) {
    if (obj1.hasOwnProperty(prop) && obj2.hasOwnProperty(prop)) {
      res += Math.min(obj1[prop], obj2[prop])
    }
  }
  return res;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount
};
