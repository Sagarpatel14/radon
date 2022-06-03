const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me-1', function (req, res) {
    res.send('My another api!')
});


router.post('/test-me-2', function (req, res) {
    res.send({a:45,b:56})
});

router.post('/test-me-3', function (req, res) {
    res.send([23,45,87])
});


router.post('/test-me-4', function (req, res) {
    let id = req.body.username;
    let pwd = req.body.password;
    console.log(id,pwd)
    res.send({msg : 'hi', status1 : true})
});


router.post('/test-me5', function (req, res) {
    let arr = [12, 'FunctionUp'];
    let ele = req.body.element;
    arr.push(ele);
    console.log(arr);

    res.send({msg : arr, status1 : true})
});


let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]

router.post('/players', function (req, res) {
    for (let i =0; i<players.length; i++){
        if (players[i].name !== req.body.newPlayer.name){
            players.push(req.body.newPlayer)
        }
    }
    console.log(players)
    res.send({msg : players, status1 : true})
});




module.exports = router;
// adding this comment for no reason