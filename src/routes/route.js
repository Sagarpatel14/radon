const express = require('express');
// const externalModule = require('./logger')
const lodash = require('lodash')

const router = express.Router();

router.get('/hello', function (req, res) {
   let myArr1 = ["january","february","march","april","may","june","july","august","september","october","november","december"]
    let sepArrays = lodash.chunk(myArr1,3)
    console.log(sepArrays)

    

    let myArr = lodash.tail([1,3,5,7,9,11,13,15,17,19])
    console.log(`the tail of the array is ${myArr}`)



    let unionArr = lodash.union([1,2],[2,3],[3,4],[5,6],[6,7,8])
    console.log("the union of the array without repeatation is "+ unionArr)



    let movieLib = lodash.fromPairs([["horror","conjuring"],["loveStory","Titanic"],["Thriller","strangerThings"],["best_movie","SardarUdhamSingh"]])
    console.log("the object of the movie library is " + JSON.stringify(movieLib))


    res.send('Hello there!')


});



module.exports = router;
// adding this comment for no reason