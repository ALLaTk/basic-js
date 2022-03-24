const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");

  if (arr.length === 0) return [];

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') { 
      newArr.push(arr[i+1]);
    } 
    else if (arr[i] === '--double-prev' && i !== 0) {
      newArr.push(newArr[newArr.length-1]);
    }  
    else if (arr[i] === '--discard-next') {
      if (arr[i += 1] === '--discard-prev' || arr[i += 1] === '--double-prev');
    }  
    else if (arr[i] === '--discard-prev') {
      newArr.pop();
    } 
    else  newArr.push(arr[i]);
  }

  if (newArr[0] === '--double-prev' || newArr[0] === '--discard-prev') newArr.shift();
  if (typeof newArr[newArr.length - 1] === 'undefined') newArr.pop();
  
  return newArr
}

module.exports = {
  transform
};
