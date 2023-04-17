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
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!'
  }
  if (isNaN(Date.parse(date))) {
    throw new Error('Invalid date!');
  }
  if (date.hasOwnProperty("toString")) {
    throw new Error('Invalid date!');
  }
  let mounth = date.getMonth();
  let sum = [5, 6, 7];
  let aut = [8, 9, 10];
  let  spri = [2, 3, 4];
  let win = [0, 1, 11]
  if (sum.includes(mounth)) {
    return 'summer';
  }else if (aut.includes(mounth)) {
    return 'autumn';
  }else if (spri.includes(mounth)) {
    return 'spring';
  }else if (win.includes(mounth))  {
    return 'winter';
  }else {
    return 'Invalid date!';
  }

}

module.exports = {
  getSeason
};
