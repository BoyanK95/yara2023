const { DataTypes} = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification: {
        type: DataTypes.STRING,
        unique: true
    },
    rights: {
        type: DataTypes.ENUM('Admin', 'Read', "Write"),
        allowNull: false,
        defaultValue: 'Read',
    }
});

module.exports = User