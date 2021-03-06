const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type){
    if (type === false) {
      this.type = 'direct';
    } else {
      this.type = 'reverse'
    }
  }

  encrypt(message, key) {
    if (!message || !key){
      throw Error("error!");
    } 

    function symbolOrder(a){
        return a.toUpperCase().charCodeAt(0) - 65;
    }

    let messageArr = message.split('');
    let numbersOfMessage = [];
    messageArr.forEach(function(item) {
        if(symbolOrder(item) < 26 && symbolOrder(item) >= 0){
            numbersOfMessage.push(symbolOrder(item));
        } else {
            numbersOfMessage.push(item);
        }
    });

    let keyArr = key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length).split('');
    let numbersOfKey =[]
    let j = 0;
    numbersOfMessage.forEach(function (item, i) {
        if (typeof item === 'string' || item === " ") {
            numbersOfKey.push(item);
        } else {
            numbersOfKey.push(symbolOrder(keyArr[j]));
            j++;
        }
    });

    let digitalCode = [];
    numbersOfMessage.forEach(function (item, i) {
        if (typeof item === 'string' || item === " ") {
            digitalCode.push(item);
        } else if((item + numbersOfKey[i]) >= 26) {
            digitalCode.push((item + numbersOfKey[i]) - 26);
        } else {
            digitalCode.push(item + numbersOfKey[i]);
        }
    });

    let cipherArr = [];
    digitalCode.forEach(function (item) {
        if (typeof item === 'string' || item === " ") {
            cipherArr.push(item);
        } else {
            cipherArr.push(String.fromCharCode(item + 65));
        }
    });

    return this.type === 'direct' ? cipherArr.reverse().join('') : cipherArr.join('');
  }    
  
  decrypt(message, key) {
    if (!message || !key){
      throw Error("error!");
    } 

    function symbolOrder(a){
      return a.toUpperCase().charCodeAt(0) - 65;
    }


    let messageArr = message.split('');
    let numbersOfMessage = [];
    messageArr.forEach(function(item) {
        if(symbolOrder(item) < 26 && symbolOrder(item) >= 0){
            numbersOfMessage.push(symbolOrder(item));
        } else {
            numbersOfMessage.push(item);
        }
    });

    let keyArr = key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length).split('');
    let numbersOfKey =[]
    let j = 0;
    numbersOfMessage.forEach(function (item, i) {
        if (typeof item === 'string' || item === " ") {
            numbersOfKey.push(item);
        } else {
            numbersOfKey.push(symbolOrder(keyArr[j]));
            j++;
        }
    });

    let digitalCode = [];
    numbersOfMessage.forEach(function (item, i) {
        if (typeof item === 'string' || item === " ") {
            digitalCode.push(item);
        } else if((item - numbersOfKey[i]) < 0) {
            digitalCode.push(item + 26 - numbersOfKey[i]);
        } else {
            digitalCode.push(item - numbersOfKey[i]);
        }
    });

    let cipherArr = [];
    digitalCode.forEach(function (item) {
        if (typeof item === 'string' || item === " ") {
            cipherArr.push(item);
        } else {
            cipherArr.push(String.fromCharCode(item + 65));
        }
    });

    return this.type === 'direct' ? cipherArr.reverse().join('') : cipherArr.join('');
  }
}

module.exports = VigenereCipheringMachine;
