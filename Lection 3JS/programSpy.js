function Spy(target, method) {
    // SOLUTION GOES HERE
    //Saving the originalFunction in a variable so it can be used later to call the function
    const originalFunction = target[method]

    const res = {
        count: 0
    }

    //saving the new value with the counter incrementation (Spy)
    target[method] = function () {
        //Incrementing count every time our function is called
        res.count++
        return originalFunction.apply(this, arguments)
    }

    return res
  }
  
  module.exports = Spy
  