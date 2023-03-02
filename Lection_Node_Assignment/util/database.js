const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'inventorySaaS',
  password: 'Xxxpoint9569',
  port: 5432,
});

module.exports = pool