const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  step: [],
  getLength() {

    return this.step.length;
    
  },
  addLink(value) { 

    this.step.push(`( ${value} )`);
    return this;

  },
  removeLink(position) {

    if (typeof position !== 'number' 
        || !Number.isInteger(position)      
        || position < 1
        || position > this.step.length) {

      this.step = [];
      throw new Error ('You can\'t remove incorrect link!');
    }

    let arr = this.step.map((num, index) => { if (index !== (position-1)) return num })
                       .filter(x => x !== undefined);  
    this.step = arr;            
    return this;

  },
  reverseChain() {

    this.step.reverse();
    return this;

  },
  finishChain() {

    let arr = this.step;
    this.step = [];
    return arr.join(`~~`);

  }
};

module.exports = {
  chainMaker
};
