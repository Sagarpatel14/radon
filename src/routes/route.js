const express = require('express');
const router = express.Router();
const bookModel = require('../model/bookModel.js');
const Controller = require('../controller/Controller.js');


router.post('/creatBook' , Controller.creatBook )

router.post('/creatAuthor', Controller.creatAuthor)

router.get('/findBooks', Controller.findBooks)

router.get('/findAuthor', Controller.findAuthor)

router.get('/findBookCost', Controller.findBookCost)



module.exports = router;