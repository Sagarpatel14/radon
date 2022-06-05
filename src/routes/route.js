const express = require('express');

const router = express.Router();


// router.get('/movies', function(req, res){
//     let movies = ["strangerThings","conjuring","dark","HauntingofTheHillHouse"]
//     console.log(movies)
//    res.send(movies)
// })

//============================Solution:1==========================================================


// router.get('/movies/:indexNumber', function(req, res){
//     let movies = ["strangerThings","conjuring","dark","HauntingofTheHillHouse"]
//     let indexNumber = req.params.indexNumber;
//     console.log('the name of the movie is '+ movies[indexNumber]) 
    
//     res.send('done!')
// })

//============================Solution:2============================================================


router.get('/movies/:indexNumber', function(req, res){
    let movies = ["strangerThings","theConjuring","dark","HauntingofTheHillHouse"]
    for (let i=0; i<movies.length; i++){
        if (req.params.indexNumber < movies.length){
            let indexNumber = req.params.indexNumber;
            console.log('the name of the movie is '+ movies[indexNumber]) 
            res.send('done!')
        }
        else {
            res.send("please use a valid index !")
        }
        
    }
})

//============================solution:3===============================================================



// router.get('/films', function(req , res){
//     let films = [
//         {
//             "id": 1,
//             "name": "trangerThings"
//         },
//         {
//             "id": 2,
//             "name": "theConjuring"
//         },
//         {
//             "id": 3,
//             "name": "anabelleCreation"  
//         },
//         {
//             "id": 4,
//             "name": "haunted"  
//         }
//     ]
//     res.send(films)
// })

// //====================================solution:4==============================================================
    
// router.get('/films/:filmId', function(req, res){
//     let films = [
//         {
//             "id": 1,
//             "name": "trangerThings"
//         },
//         {
//             "id": 2,
//             "name": "theConjuring"
//         },
//         {
//             "id": 3,
//             "name": "anabelleCreation"  
//         },
//         {
//             "id": 4,
//             "name": "haunted"  
//         }
//     ]
//     for (let i=0; i<films.length; i++){
//         let indexNumber = req.params.filmId;
//         if (indexNumber <= films.length && indexNumber > 0){
//             console.log('the name of the movie is '+ JSON.stringify(films[indexNumber-1])) 
//             res.send('done!')
//         }
//         else {
//             res.send("No film exist with this id !")
//         }
        
//     }
// })

//=========================================solution:5===========================================================


module.exports = router;