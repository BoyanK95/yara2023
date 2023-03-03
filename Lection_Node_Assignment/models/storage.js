const { DataTypes} = require('sequelize')

const sequelize = require('../util/database')

const Storage = sequelize.define('storage', {
    storage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.SMALLINT,
    address: DataTypes.STRING,
  });

  module.exports = Storage