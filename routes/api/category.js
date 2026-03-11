const router = require('express').Router();
const {Category, Product} = require('../../model');


router.get('/', async (req, res) => {
  console.log("Jalen");
    const allCat = await Category.findAll({
     include: { model: Product},
    })
     res.json(allCat);
   })

   router.get('/:id', async (req, res) => {
    const selectedtag = await Category.findByPk(req.params.id, {
      include: { model: Product},
    });
     res.json(selectedtag);
   })

   router.put('/:id', async (req, res) => {
    const categoryUpdate = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    res.json(categoryUpdate);
   })
  
   router.post('/', async (req, res) => {
    const createCatagory = await Category.create(
      { 
        category_name: req.body.category_name
      
      });
    
    res.json(createCatagory);
   })
  
  
  router.delete('/:id', async (req, res) => {
    const deleteCategory = await Category.destroy(
      {
         where: {
            id: req.params.id,
          },
       }
    )
    res.json(deleteCategory);
  })


  module.exports = router