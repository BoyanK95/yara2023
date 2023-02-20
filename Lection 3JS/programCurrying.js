function curryN(fn, n = fn.length) {
    // SOLUTION GOES HERE
    return function curried(...arg) {
        if (arg.length < n) {
            return function (...remainingArg) {
                return curried(...arg.concat(remainingArg))
            }
        } else {
            return fn(...arg)
        }
    }
  }
  
  module.exports = curryN