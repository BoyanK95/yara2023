/*
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
*/

module.exports = function logger(namespace) {
    // SOLUTION GOES HERE
    return console.log.bind(console, namespace);
};

// const info = logger('INFO:');
// info('this is an info message');

