function getShortMessages(messages) {
    // SOLUTION GOES HERE
    const res = messages.map(obj => obj.message).filter(w => w.length < 50)
    return res
}

module.exports = getShortMessages;

const messages = [
    {
        message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    },
    {
        message: 'ndsabdjhnas baldas.' // random
    },
    {
        message: 'lorem' // random
    },
    
];

console.table(getShortMessages(messages))
