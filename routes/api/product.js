const router = require('express').Router();
const Product = require('../../model/product');
const Category = require('../../model/category');
router.get('/product', async (req, res) => {
    const allCat = await Product.findAll({
      include: { model: Category},
    })
    console.log(allCat);
    res.json(allCat)
   })


   router.get('/product/:id', async (req, res) => {
    const selectedtag = await Product.findByPk(req.params.id, {
      include: { model: Category},
    });
     res.json(selectedtag);
   })

   module.exports = router