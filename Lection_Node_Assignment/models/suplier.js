const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Supplier = sequelize.define('supplier', {
    supplier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    supplier_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    country: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    address: DataTypes.STRING,
    postal_code: DataTypes.SMALLINT,
    city: DataTypes.STRING
});

module.exports = Supplier