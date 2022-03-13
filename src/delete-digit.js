const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split("");
  let a = arr.slice();
  let b = arr.slice();
  let min1 = String(Math.min(...arr))
  let index1 = arr.indexOf(min1);
  a.splice(index1, 1);
  let min2 = String(Math.min(...a));
  let index2 = arr.indexOf(min2)
  b.splice(index2, 1);
  let num1 = +a.join('');
  let num2 = +b.join('')

  return num1 > num2 ? num1 : num2
}

module.exports = {
  deleteDigit
};
