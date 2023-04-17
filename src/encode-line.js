const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newEncodedString = '';

  let counter = 1; 
  for (let index = 0; index < str.length; index++) {  
      if (str[index] === str[index + 1]) {
          counter++;
      } else {     
          if (counter === 1) {
            newEncodedString += str[index]
          } else {
            newEncodedString += counter + str[index]
            counter = 1; 
          }
      }
  }

  return newEncodedString;
}

module.exports = {
  encodeLine
};
