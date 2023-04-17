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

    let maximum = 0;
    let stringfromN = n.toString(); 

    for (let index = 0; index < stringfromN.length; index++) {
        let arrfromN = stringfromN.split('');
        arrfromN.splice(index, 1);

        let newMaximum = parseInt(arrfromN.join(''));

        maximum = Math.max(newMaximum, maximum)
    }
    return maximum;
  }

module.exports = {
  deleteDigit
};
