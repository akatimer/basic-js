const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    if (direction === false) {
      this.type = false;
    }
  }
    type = true;

  encrypt(string, key) {

    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    let upperString = string.toUpperCase();
    let upperKey = key.toUpperCase();

    let encryptedString = ``;
    let indexKey = 0;
    let alphabet = 26;
    let A ="A".charCodeAt();

    for (let i = 0; i < upperString.length; i++) {
      if (upperString[i].charCodeAt() < A || upperString[i].charCodeAt() > (A + alphabet)) {
        encryptedString += upperString[i];  
      } else {
        encryptedString += String.fromCharCode(((upperString[i].charCodeAt() + upperKey[indexKey].charCodeAt()) % alphabet) + A);
        indexKey ++;
        indexKey= indexKey % upperKey.length === 0 ? 0 : indexKey;
      }
    }

    if (this.type === false) {
      return encryptedString.split(``).reverse().join(``);
    } else {
      return encryptedString;
    }
  }
  
  decrypt(encryptedString, key) {
  
    if (!encryptedString || !key) {
      throw new Error('Incorrect arguments!');
    }

    let upperKey = key.toUpperCase();
    let decryptedString = ``;
    let indexKey = 0;
    let alphabet = 26;
    let A ="A".charCodeAt();

    for (let i = 0; i <= encryptedString.length - 1; i++) {
      if (encryptedString[i].charCodeAt() < A || encryptedString[i].charCodeAt() > (A + alphabet -1)) {
        decryptedString += encryptedString[i];
      } else {
        decryptedString += String.fromCharCode(((encryptedString[i].charCodeAt() - upperKey[indexKey].charCodeAt() + alphabet) % alphabet) + A);
        indexKey++;
        indexKey= indexKey % upperKey.length === 0 ? 0 : indexKey;
      } 
    }
    if (this.type === false) {
      return decryptedString.split(``).reverse().join(``);
    } else {
      return decryptedString;
    }
  }
}
module.exports = {
  VigenereCipheringMachine
};
