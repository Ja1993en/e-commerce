const router = require('express').Router();
const {Tag, Product, }= require('../../model');




   router.get('/', async (req, res) => {
    const allCat = await Tag.findAll({
      include: [ {model: Product}]
    })
     res.json(allCat);
   })

   router.get('/:id', async (req, res) => {
       console.log("dsf")
    const selectedtag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
     res.json(selectedtag);
   })
   module.exports = router