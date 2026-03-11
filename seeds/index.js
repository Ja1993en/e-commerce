const sequelize = require('../config/connection');
const categoryData = require('./category-seeds');
const productData = require('./product-seeds');
const productTagData = require('./product-tag-seeds');
const tagData = require('./tag-seeds');
const {Category, Product, ProductTag, Tag} = require('../model');

  
const seededData = async  () => {
    await sequelize.sync({ force: true });
    await Category.bulkCreate(categoryData);
    await Product.bulkCreate(productData);
    await Tag.bulkCreate(tagData);
    await ProductTag.bulkCreate(productTagData)
}

seededData()