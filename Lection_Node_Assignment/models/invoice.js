const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Invoice = sequelize.define('invoice', {
    invoice_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false
    },
    price_sold: {
        type:DataTypes.FLOAT,
        allowNull: false
    },
    qty_sold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    total: DataTypes.FLOAT,
  },
  {
    hooks: {
        beforeSave: (invoice) => {
            invoice.total = invoice.qty_sold * invoice.price_sold
        }
    }
  });

  module.exports = Invoice
  