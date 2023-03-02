const db = require('../util/database')

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, price, qtySold, qtyInStorage) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.qtySold = qtySold
    this.qtyInStorage = qtyInStorage
  }

  save() {

  }

  static deleteById(id) {

  }

  static fetchAll() {
     db.query('SELECT * FROM product', (err, result) => {
      if (err) {
        throw err
      } else {
        return result
      }
     })
  //   db.query('SELECT * FROM product', (err, result) => {
  //     if (err) {
  //          console.log(err);
  //     } else {
  //         return result
  //     }
  // })
  }

  static findById(id) {

  }
};
