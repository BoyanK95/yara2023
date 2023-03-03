const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Order = sequelize.define('order', {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qty: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        price_per_item: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total: DataTypes.FLOAT,
        shipped: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        received: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        hooks: {
            beforeSave: (order) => {
                order.total = order.qty * order.price_per_item;
            }
        }
    }
);

module.exports = Order;
