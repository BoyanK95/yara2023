function reduce(arr, fn, initial, index = 0) {
    // SOLUTION GOES HERE
    if (index >= arr.length) {
        return initial; //end condition
      }
      const result = fn(initial, arr[index], index, arr);
      return reduce(arr, fn, result, index + 1);
  }
  
  module.exports = reduce

  /** Second Solution */
  function reduce2(arr, fn, initial) {
    return (function reduceOne(index, value) {
      if (index > arr.length - 1) return value // end condition
      return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
  }
  
  module.exports = reduce2
