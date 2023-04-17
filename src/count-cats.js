const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let res = 0;
  let row_len = matrix.length;
  for (let i = 0; i < row_len; i++) {
    let col = matrix[i];
    for (let j = 0; j < col.length; j++) {
      if (matrix[i][j] === "^^") {
        res++;
      }
    }
  }
  return res;
}

module.exports = {
  countCats
};
