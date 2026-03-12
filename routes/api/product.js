const router = require('express').Router();
const {Product, Category} = require('../../model');

router.get('/', async (req, res) => {
    const allCat = await Product.findAll({
      include: { model: Category},
    })
   
    res.json(allCat)
   })


   router.get('/:id', async (req, res) => {
    const selectedtag = await Product.findByPk(req.params.id, {
      include: { model: Category},
    });
     res.json(selectedtag);
   })

   module.exports = router