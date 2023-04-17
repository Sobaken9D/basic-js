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
function getDNSStats(/**asd */) {
  // if(domains.length == 0) {
  //   return {};
  // }
  // for (let i = 0; i < domains.length; i++) {
  //   domains[i] = [...domains[i].split('.')];
  // }
  // let res = {};

  // res[`.${domains[0][domains[0].length - 1]}`] = domains.length;
  // for (let i = 0; i < domains.length; i++) {
  //   res[`.${domains[i].reverse().join('.')}`] = domains.length;
  // }

}

// console.log(getDNSStats(['epam.com', 'info.epam.com']));

module.exports = {
  getDNSStats
};
