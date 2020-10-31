const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      if (Array.isArray(arr)) {
        return 1 + Math.max(...arr.map(i => {
            if (i.length === 0) {
                return 1;
            } else {
                return this.calculateDepth(i);
            }
        }))
      } else {
        return 0;
      }
  }
};