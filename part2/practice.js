function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse (array) {
  return array.reverse();
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse (text) {
  return text.split('').reverse().join('');
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
  const result = [1, 1];

  for (let i = 2; i < length; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

/**
 * Given an array of integers nums and an integer target,
 * return arraries of the two numbers such that they add up to target.
 * 
 * @example
 * 
 * twoSum([1,3,5,7,9], 8) returns [[1, 7], [3, 5]]
 * 
 * @param {number[]} testArray
 * @param {number} target
 * @returns {number[]}
 */
function twoSum (testArray, target) {
  const result = [];
  const numIndexMap = {};

  for (let i = 0; i < testArray.length; i++) {
    const complement = target - testArray[i];

    if (numIndexMap.hasOwnProperty(complement)) {
      result.push([testArray[numIndexMap[complement]], testArray[i]]);
    }

    numIndexMap[testArray[i]] = i;
  }

  return result;
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range (start, end) {
  var a = [], b = start;
  while (b < end) {
    a.push(b);
    b++;
  }
  return a;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten (array) {
  return array.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  twoSum,
  flatten,
  stringReverse,
  range
};
