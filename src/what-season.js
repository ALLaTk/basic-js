const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (typeof date === 'undefined') return 'Unable to determine the time of year!'
  
  if (Object.keys(date).length > 0) throw new Error('Invalid date!')
  
  if (!(date instanceof Date)) throw new Error('Invalid date!')
      
  let season;
  let month = date.getMonth();

  if (month <= 1 || month === 11) season = 'winter';
  if (month <= 4 && month >= 2) season = 'spring';
  if (month <= 7 && month >= 5) season = 'summer';
  if (month <= 10 && month >= 8) season = 'autumn';
  
  return season
}

module.exports = {
  getSeason
};
