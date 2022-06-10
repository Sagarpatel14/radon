const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res, next) {
    res.send('My first ever api!')
    next()
});

router.get('/createUser', function (req, res, next) {
    res.send('The current path is', req.path)
});



module.exports = router;
