const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {};

Product.init(
    {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: false,
        },
        product_name: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "10",
            validate: {
                isNumeric: true
            }
        },
         category_id: {
            type: DataTypes.INTEGER,
            model: "Category",
            key: "id"

        },
        
    },
    
);

