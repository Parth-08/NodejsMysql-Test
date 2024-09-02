var express = require('express');
var router = express.Router();


const {getProductDetails} = require("../controllers/productController");


/* GET home page. */
router.get('/app', getProductDetails)
module.exports = router;
