const bookModel = require('../model/bookModel')



const creatBook = async function(req , res){
    let Data = req.body;
    let saveData = await bookModel.create(Data);
    res.send({msg : saveData})
}

//=======================================solution:01============================================================


const bookList = async function(req , res){
    let allBooks = await bookModel.find().select({ bookName : 1 ,authorName : 1, _id : 0 });
    res.send({msg : allBooks})
}

//=========================================solution:02============================================================


const getBooksInYear = async function(req , res){
    let myYear = req.body.year
    let allBooks = await bookModel.find({myYear : year}).select({bookName : 1, _id : 0});
    res.send({msg : allBooks})
}


//============================================solution:03===========================================================



const getParticularBooks = async function(req , res){
    let myData = req.body
    let allBooks = await bookModel.find(myData);
    res.send({msg : allBooks})
}


//===========================================solution:04==========================================================



const getXINRBooks = async function(req , res){
    let allBooks = await bookModel.find({  "PriceodBOok.indianPrice"  : {$in : ["600","450","500"]}  }).select({bookName : 1, _id : 0});
    res.send({msg : allBooks})
}



//=============================================solution:05========================================================



const getRandomBooks = async function(req , res){
    let allBooks = await bookModel.find({ $or : [{totalPages : {$gt : 500}},{stockAvailable : true}]}).select({bookName : 1, _id : 0}).count()
    res.send({msg : allBooks})
}

//=================================solution:06=======================================================================


module.exports.creatBook = creatBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;
