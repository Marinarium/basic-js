const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let bigSeparator = '';
        let extendedStr = '';
        const defaultAdditionSeparator = '|';
        const defaultSeparator = '+';

        if (options.additionRepeatTimes === undefined) {
          options.additionRepeatTimes = 1;
        }
        if (typeof options.addition !== 'undefined') {
            for (let i = 1; i <= options.additionRepeatTimes; i++) {
                bigSeparator = bigSeparator + options.addition;
                if (i !== options.additionRepeatTimes) {
                    if (typeof options.additionSeparator !== 'undefined') {
                        bigSeparator = bigSeparator + options.additionSeparator;
                    } else {
                        bigSeparator = bigSeparator + defaultAdditionSeparator;
                    }

                }
            }
        }

        if (options.repeatTimes === undefined) {
            options.repeatTimes = 1;
        }
        for (let j = 1; j <= options.repeatTimes; j++) {
            extendedStr = extendedStr + str + bigSeparator;
            if (j !== options.repeatTimes) {
                if (typeof options.separator !== 'undefined') {
                    extendedStr = extendedStr + options.separator;
                } else {
                    extendedStr = extendedStr + defaultSeparator;
                }

            }
        }

        return extendedStr;
};
  