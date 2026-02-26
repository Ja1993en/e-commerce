const Category = require("./category");
const Product = require("./product");
const ProductTag = require("./productTag");
const Tag = require("./tag");


// Setting up the relationships between models 

Category.hasMany(Product,
    {
        foreignKey: 'category_id',
        onDelete: 'CASCADE',
});

Product.belongsTo(Category, 
    {
        foreignKey: "Category_id",
    
})


Product.belongsToMany(Tag, 
    { 
        through: ProductTag,
        foreignKey: 'product_id'

});

Tag.belongsToMany(Product, 
    { 
        through: ProductTag, 
        foreignKey: 'tag_id'

});





module.exports = {Category, Product, Tag, ProductTag}