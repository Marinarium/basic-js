const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if (date.getMonth() < 2 || date.getMonth() == 11){
    return 'winter';
  } else if (date.getMonth() < 5) {
    return 'spring';
  } else if (date.getMonth() < 8) {
    return 'summer';
  } else if (date.getMonth() < 11) {
    return 'fall';
  } else {
    return 'THROWN';
  }
};


//module.exports = function getSeason(/* date */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
//};