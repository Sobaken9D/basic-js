const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2**disksNumber - 1;
  let turns_sec = turnsSpeed/3600;
  let sec = turns / turns_sec;
  let res = {
    turns: turns,
    seconds: Math.floor(sec)
  }
  return res;
}

console.log(calculateHanoi(5, 4074));

module.exports = {
  calculateHanoi
};
