const router = require('express').Router();
const Tag = require('../../model/tag');
const Product = require('../../model/product');
const ProductTag = require('../../model/productTag');



   router.get('/', async (req, res) => {
    const allCat = await Tag.findAll({
      include: [ {model: Product}, {ProductTag}]
    })
     res.json(allCat);
   })

   router.get('/:id', async (req, res) => {
       console.log("dsf")
    const selectedtag = await Tag.findByPk(req.params.id, {
      include: [{model: Product, ProductTag}]
    });
     res.json(selectedtag);
   })
   module.exports = router