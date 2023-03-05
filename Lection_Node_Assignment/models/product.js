const { DataTypes} = require('sequelize')

const sequelize = require('../util/database')

const Product = sequelize.define('product',{
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false
  },
  product_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  qty_sold: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  qty_in_storage: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  description: DataTypes.TEXT,
  imageurl: DataTypes.STRING,
})

module.exports = Product










/** Without using Sequelize */
// const db = require('../util/database')

// const Cart = require('./cart');

// module.exports = class Product {
//   constructor(id, title, price, qtySold, qtyInStorage) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.qtySold = qtySold
//     this.qtyInStorage = qtyInStorage
//   }

//   save() {
//     db.query('INSERT INTO product (product_name, price, qty_sold, qty_in_storage, description, imageurl) VALUES ()')
//   }

//   static deleteById(id) {

//   }

//   static fetchAll() {
//      return db.query('SELECT * FROM product')
//   //   db.query('SELECT * FROM product', (err, result) => {
//   //     if (err) {
//   //          console.log(err);
//   //     } else {
//   //         return result
//   //     }
//   // })
//   }

//   static findById(id) {

//   }
// };
