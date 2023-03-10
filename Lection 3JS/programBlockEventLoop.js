function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    operation()
    setTimeout(() => {
        return repeat(operation, --num)
    }, 0)
  }
  
  module.exports = repeat