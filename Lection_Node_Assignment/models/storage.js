const { DataTypes} = require('sequelize')

const sequelize = require('../util/database')

const Storage = sequelize.define('storage', {
    storage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    country: {
        type:DataTypes.STRING,
        allowNull:false
    },
    city: DataTypes.STRING,
    postal_code: DataTypes.SMALLINT,
    address: {
        type:DataTypes.STRING,
        allowNull:false
    },
  });

  module.exports = Storage