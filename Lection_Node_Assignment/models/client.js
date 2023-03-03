const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Client = sequelize.define('client', {
    client_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countryCode: DataTypes.STRING,
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: DataTypes.STRING,
    postal_code: DataTypes.SMALLINT,
    number_of_orders: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    phone_number: {
        type:DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
});

module.exports = Client;
