const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'inventorySaaS',
  password: 'Xxxpoint9569',
  port: 5432,
});

const getProducts = (req, res ) => {
    pool.query('SELECT * FROM product', (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log(result);
    })
}

getProducts()


module.exports = pool