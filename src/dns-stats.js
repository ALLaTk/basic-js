const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  
  if (domains.length === 0) return {};

  domains = domains.map(index => index.split('.').reverse()).flat() 
                   .reduce( (a, b) => {
                      a[b] = (a[b] || 0) + 1;
                      return a;
                    }, {})

  let keys = Object.keys(domains);
  let arr = [];
  let obj = {};

  arr.push(`.${keys[0]}`);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      arr.push(arr[i] + `.${[keys[j]]}`);
      break;
    }
  }

  for (let i=0; i < arr.length; i++) {
    obj[arr[i]] = Object.values(domains)[i];
  }

  return obj;
}

module.exports = {
  getDNSStats
};
