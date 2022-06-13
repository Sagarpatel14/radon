const express = require('express');
const userController = require('../controller/userController')
const productController = require('../controller/productController')
const orderController = require('../controller/orderController')
const commanMW = require('../Middleware/commonMiddleware') 

const router = express.Router();

// router.get('/test-me', function (req, res, next) {
//     res.send('My first ever api!')
//     next()
// });

// router.get('/createUser', function (req, res,next) {
//     res.send('The current path is', req.path)
// });
router.post('/createProduct', productController.createProduct)

router.post('/createUser', commanMW.mid1 , userController.createUser)

router.post('/createOrder', commanMW.mid2, commanMW.mid3, orderController.createOrder)




module.exports = router;
