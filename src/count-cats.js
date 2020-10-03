const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = [];
  let regexp = /^\^\^/;
  if (matrix) {
    matrix.forEach(function(item, i){
      arr = arr.concat(item.filter(elem => regexp.test(elem) ));
      
    });
  }

  return arr.length;
};
