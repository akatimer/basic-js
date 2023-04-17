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
  let cat = '^^';
  let counter = 0;
  for (let matrixStep = 0; matrixStep < matrix.length; matrixStep++) {
    for (let arrayStep = 0; arrayStep < matrix[matrixStep].length; arrayStep++) {
      if (matrix[matrixStep][arrayStep] === cat) {
        counter++;
      }
    }
  }
  return counter;
}

module.exports = {
  countCats
};
