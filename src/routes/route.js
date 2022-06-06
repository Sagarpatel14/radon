const express = require('express');
const router = express.Router();
const userModel = require('../model/bookModel.js');
const Controller = require('../controller/Controller.js');


router.get('/test-me' , function(req , res){
    res.send('i am checking this api !')
})

router.post('/creatData' , Controller.creatData )

router.get('/getBookdata', Controller.getBookdata)

module.exports = router;