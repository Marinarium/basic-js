const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k;
  let t;

  if((sampleActivity > MODERN_ACTIVITY) && Number.isInteger(sampleActivity)){
      k = 0.693 / HALF_LIFE_PERIOD;
      t =  (Math.log2(MODERN_ACTIVITY / sampleActivity)) / k;
      return t;
  } else {
      return false;
  }
};
