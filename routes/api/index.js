const router = require('express').Router();
const category = require('./category');
const product = require('./product');
const tag = require('./tag');


router.use("/category",category);
router.use("/product", product);
router.use("/tag", tag);

module.exports = router