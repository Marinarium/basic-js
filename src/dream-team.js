const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!(members instanceof Array)) return false;
    const membersNames = members.filter(memeber => {
        if (typeof memeber === 'string') {
            return memeber;
        }
    });

    const firstLetters = membersNames.map(name => name.trim().charAt(0).toUpperCase());

    return firstLetters.sort().join('');
};
