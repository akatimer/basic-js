const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  } else if (arr.length === 0) {
    return arr;
  }
  let temporaryArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == '--discard-next') {
      index++;
    } else if (arr[index] == '--discard-prev') {
      if (temporaryArray.length > 0 && arr[index - 2] !== '--discard-next') {
        temporaryArray.pop();
      }
    } else if (arr[index] == '--double-next') {
      if (index < arr.length - 1) {
        temporaryArray.push(arr[index + 1]);
      }
    } else if (arr[index] == '--double-prev') {
      if (index > 0 && arr[index - 2] !== '--discard-next') {
        temporaryArray.push(arr[index - 1]);
      }
    } else {
      temporaryArray.push(arr[index]);
    }
  }
  return temporaryArray;
}

module.exports = {
  transform
};
