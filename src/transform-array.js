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

function doubleNext(arr, index) {
  let new_arr = [];
  for (const item of arr) {
    new_arr.push(item)
  }
  if (index === null) {
    new_arr[arr.length - 1] = 'del';
    return new_arr;;
  }else {
    if (new_arr[index + 1] == 'del') {
      new_arr[index] = 'del';
      return new_arr;
    }
    new_arr[index] = new_arr[index + 1];
    return new_arr;
  }
}

function doublePrev(arr, index) {
  let new_arr = [];
  for (const item of arr) {
    new_arr.push(item);
  }
  if (index === null) {
    new_arr[0] = 'del';
    return new_arr;
  }else {
    if (new_arr[index - 1] == 'del') {
      new_arr[index] = 'del';
      return new_arr;
    }
    new_arr[index] = new_arr[index - 1];
    return new_arr;
  }
}

function discardNext(arr, index) {
  let new_arr = [];
  for (const item of arr) {
    new_arr.push(item)
  }
  if (index === null) {
    new_arr[arr.length - 1] = 'del';
    return new_arr;;
  }else {
    if (new_arr[index + 1] == 'del') {
      new_arr[index] = 'del';
      return new_arr;
    }
    new_arr.splice(index, 1, 'del');
    new_arr.splice(index + 1, 1, 'del');
    return new_arr;
  }
}

function discardPrev(arr, index) {
  let new_arr = [];
  for (const item of arr) {
    new_arr.push(item)
  }
  if (index === null) {
    new_arr[0] = 'del';
    return new_arr;;
  }else {
    if (new_arr[index - 1] == 'del') {
      new_arr[index] = 'del';
      return new_arr;
    }
    new_arr.splice(index, 1, 'del');
    new_arr.splice(index - 1, 1, 'del');
    return new_arr;
  }
}

function indexDoubleNext(arr) {
  return (arr.indexOf('--double-next') == -1 || arr.indexOf('--double-next') == arr.length - 1) ? null : arr.indexOf('--double-next');
}

function indexDoublePrev(arr) {
  return (arr.indexOf('--double-prev') == -1 || arr.indexOf('--double-prev') == 0) ? null : arr.indexOf('--double-prev');
}

function indexDiscardNext(arr) {
  return (arr.indexOf('--discard-next') == -1 || arr.indexOf('--discard-next') == arr.length - 1) ? null : arr.indexOf('--discard-next');
}

function indexDiscardPrev(arr) {
  return (arr.indexOf('--discard-prev') == -1 || arr.indexOf('--discard-prev') == 0) ? null : arr.indexOf('--discard-prev');
}

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let res_arr = []
  let obj = {
    '--double-next': doubleNext,
    '--double-next-index': indexDoubleNext,
    '--double-prev': doublePrev,
    '--double-prev-index': indexDoublePrev,
    '--discard-next': discardNext,
    '--discard-next-index': indexDiscardNext,
    '--discard-prev': discardPrev,
    '--discard-prev-index': indexDiscardPrev,
  }

  for (const el of arr) {
    res_arr.push(el);
  }
  let len = res_arr.length;
  for (let i = 0; i < len; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      res_arr = obj[`${res_arr[i]}`](res_arr, obj[`${res_arr[i]}-index`](res_arr));
    }
  }
  return res_arr.filter(item => item !== 'del');

}
// let arr1 = ['--double-prev',1, 2, 3, '--double-prev', 4, 5, '--double-next', 12, 2, '--discard-next', 4]
let arr = ['--discard-prev', 1, 2, 3];


console.log(transform(arr));


module.exports = {
  transform
};
