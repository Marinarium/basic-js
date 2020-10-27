const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if (!Array.isArray(arr)) {
  throw new Error('Not Array!');
} else {


let newArr = [];

arr.forEach(function (item, i, array) {

  if (item !== "--double-next" && item !== "--discard-next" && item !== "--double-prev" && item !== "--discard-prev") {
      newArr.push(item);
  }

  if (item === "--double-next" && typeof array[i + 1] !== 'undefined') {
      newArr.push(array[i + 1]);
  }

  if (item === "--double-prev" && array[i - 2] !== "--discard-next" && typeof array[i - 1] !== 'undefined') {
      newArr.push(array[i - 1]);
  }

  if (array[i - 1] === "--discard-next" && typeof array[i + 1] !== 'undefined') {
      newArr.pop();
  }
  if (array[i + 1] === "--discard-prev" && typeof array[i - 1] !== 'undefined' && array[i - 1] !== "--discard-next") {
      newArr.pop();
  }

});

return newArr;
  
}
};
