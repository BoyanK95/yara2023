const { Sequelize } = require('sequelize');
const credentials = require('./credentials');

const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, {
    host: credentials.host,
    dialect: 'postgres'
});

module.exports = sequelize;






/** Test function to test Sequelize connection */
// async function test() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// test()



/** Old way without Sequelize */
// const Pool = require('pg').Pool;
// const pool = new Pool(credentials);

// module.exports = pool