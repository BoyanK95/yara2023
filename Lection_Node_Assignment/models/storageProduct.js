const { DataTypes} = require('sequelize')

const sequelize = require('../util/database')

const StorageProduct = sequelize.define('storageProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  module.exports = StorageProduct