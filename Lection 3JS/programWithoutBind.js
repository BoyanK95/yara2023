const slice = Array.prototype.slice

    
function logger(namespace) {
    // SOLUTION GOES HERE
    return function () {
        let arg = slice.call(arguments)
        console.log.apply(console, [namespace].concat(arg));
    }
  }
  
  module.exports = logger

  //  * namespace: a String to prepend to each message passed to the returned function.

//   logger('a String to prepend to each message passed to the returned function.')