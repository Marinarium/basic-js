const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(!getMonth(date)) return 'THROWN';
  if (getMonth(date) < 3){
    return 'winter';
  } else if (getMonth(date) < 6) {
    return 'spring';
  } else if (getMonth(date) < 9) {
    return 'summer';
  } else if (getMonth(date) < 12) {
    return 'fall';
  } else {
    return 'THROWN';
  }
};


//module.exports = function getSeason(/* date */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
//};