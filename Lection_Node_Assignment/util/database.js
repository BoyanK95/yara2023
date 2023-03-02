const credentials = require('./credentials');

const Pool = require('pg').Pool;
const pool = new Pool(credentials);

module.exports = pool