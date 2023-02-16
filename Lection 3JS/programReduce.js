const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce((object, word) => {
        //Creates Key with Incremented value with same word, at every iteration, or 1 for the first one
        object[word] = ++object[word] || 1
        return object
    }, {})
  }
  
  module.exports = countWords


console.log(countWords(inputWords))
