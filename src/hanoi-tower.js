const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsCount = Math.pow(2, disksNumber) - 1;
  let speedCount = Math.floor(turnsCount * (3600/turnsSpeed));

  return {turns: turnsCount, seconds: speedCount }
};

//module.exports = function calculateHanoi(/* disksNumber, turnsSpeed */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
//};
