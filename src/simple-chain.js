const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (String(value).length === 0) {
      this.chain.push("()")
    } else {
      this.chain.push(`( ${value} )`);
    }
    
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || position <= 0 || position > (this.chain.length - 1)) { 
      this.chain = [];
      throw new Error("error")
    };
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let chainedString = this.chain.join("~~");
    this.chain = []
    return chainedString;
  }
};

module.exports = chainMaker;
