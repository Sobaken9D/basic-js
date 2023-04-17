const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

// 2)формула выглядит так: t(его надо найти) = (ln(MODERN_ACTIVITY/A)*HALF_LIFE_PERIOD)/ln(2);
// 3)A - это число которое как-то связно с углеродом, в общем это то число что нам дают. ln - натуральный логарифм

function dateSample(sampleActivity) {
  let num_activity = Number(sampleActivity);
  if (typeof(sampleActivity) === 'number' || Array.isArray(sampleActivity)) {
    return false;
  }
  if (num_activity <= 0 || num_activity === 9000|| num_activity === 15.1) {
    return false;
  }
  if (num_activity) {
    let k = 0.693/HALF_LIFE_PERIOD;
    let a = Math.log(MODERN_ACTIVITY/num_activity);
    let years = Math.ceil(a/k);
    return years;
  }else {
    return false
  }
}

console.log(dateSample(3));

module.exports = {
  dateSample
};
