const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let bigSeparator = '';
        let extendedStr = '';

        if (typeof options.addition !== 'undefined') {
            for (let i = 1; i <= options.additionRepeatTimes; i++) {
                bigSeparator = bigSeparator + options.addition;
                if (i !== options.additionRepeatTimes) {
                    bigSeparator = bigSeparator + options.additionSeparator;
                }
            }
        }
        
        for (let j = 1; j <= options.repeatTimes; j++) {
            extendedStr = extendedStr + str +bigSeparator;
            if (j !== options.repeatTimes) {
                extendedStr = extendedStr + options.separator;
            }
        }


        return extendedStr;
};
  