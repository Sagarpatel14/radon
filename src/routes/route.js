const express = require('express');
const router = express.Router();
const bookModel = require('../model/bookModel.js');
const Controller = require('../controller/Controller.js');


router.post('/creatBook' , Controller.creatBook )

router.get('/bookList', Controller.bookList)

router.post('/getBooksInYear', Controller.getBooksInYear)

router.get('/getXINRBooks', Controller.getXINRBooks)

router.get('/getRandomBooks', Controller.getRandomBooks)


router.post('/getParticularBooks', Controller.getParticularBooks)

module.exports = router;