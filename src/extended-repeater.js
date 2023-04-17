const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator = (options.separator) ? (options.separator) : '+';
  options.additionSeparator = (options.additionSeparator) ? (options.additionSeparator) : '|';
  options.repeatTimes = (options.repeatTimes) ? (options.repeatTimes) : 1;
  options.additionRepeatTimes = (options.additionRepeatTimes) ? (options.additionRepeatTimes) : 1;
  if (options.addition === false) {
    options.addition = false
  }else if(options.addition === null) {
    options.addition = null
  }else {
    options.addition = (options.addition) ? (options.addition) : '';
  }


  let prom_str = str;
  let add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  add = add.slice(0, add.length - (options.additionSeparator.length));
  let str_and_sep = (prom_str + add + options.separator).repeat(options.repeatTimes);
  str_and_sep = str_and_sep.slice(0, str_and_sep.length - (options.separator.length));
  return str_and_sep;
}

let str = true;

let opt = {
  repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!'
}

console.log(repeater(str, opt));


module.exports = {
  repeater
};
