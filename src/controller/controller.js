const bookModel = require('../model/bookModel')
const authorModel = require('../model/authorModel')



const creatBook = async function(req , res){
    let Data = req.body;
    let saveBookData = await bookModel.create(Data);
    res.send({msg : saveBookData})
}



const creatAuthor = async function(req , res){
    let Data = req.body;
    let saveAuthorData = await authorModel.create(Data)
    res.send({msg : saveAuthorData})
}


const findBooks = async function(req , res){
    let Data = await authorModel.find({authorName : "Chetan Bhagat"}).select({author_id : 1, _id :0});
    let fdBooks = await bookModel.find({author_id : Data[0].author_id}).select({bookName : 1, _id : 0});
    res.send({msg : fdBooks})
}


const findAuthor = async function(req , res){
    let Data = await bookModel.findOneAndUpdate({bookName : "Two States"},{$set:{price : 100}},{new:true});
    let fdAuthor = await authorModel.find({author_id : Data.author_id}).select({authorName : 1, _id : 0});
    let prices = Data.price
    res.send({msg : fdAuthor,prices})
}


const findBookCost = async function (req, res) {
    let Data = await bookModel.find( { price : { $gte : 50 , $lte : 100}} ).select({author_id : 1, _id :0});
    for ( let i =0; i<Data.length; i++){
        let xyz = await authorModel.findOne({ "author_id" : Data[i].author_id})
        res.send({ msg : xyz.authorName})
    }
}
    





module.exports.creatBook = creatBook;
module.exports.creatAuthor = creatAuthor;
module.exports.findBooks = findBooks;
module.exports.findAuthor = findAuthor;
module.exports.findBookCost = findBookCost;



