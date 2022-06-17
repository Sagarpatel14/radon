const { default: mongoose } = require("mongoose")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")
const authorModel = require("../models/authorModel")
const isValidObjectId = function(ObjectId){
    return mongoose.Types.ObjectId.isValid(ObjectId)
}


const createBook= async function (req, res) {
    let book = req.body;
    let authorId = req.body.authorId;
    let publisherId = req.body.publisherId
    if(!authorId){
        return res.send({msg : "author id is required"})
    }
    if(!isValidObjectId(authorId)){
        return res.send({msg : "author id is not valid"})
    }
    if(!publisherId){
        return res.send({msg : "publishers id is required"})
    }
    if(!isValidObjectId(publisherId)){
        return res.send({msg : "publishers id is not valid"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

    

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['authorId','publisherId'])
    res.send({data: specificBook})
}

const addNewField = async function (req, res) {
    let Data = await publisherModel.find({$or : [{publisherName : "Sharda Press"}, {publisherName : "Geeta Press"}]}).select("_id");
    for ( let i = 0; i<Data.length; i++){
        let updated = await bookModel.updateMany({publisherId : Data[i]._id},{ $set : {isHardCover : false}});
        res.send({msg : updated})
    }
   
}


const updateBooksPrice = async function (ewq,res){
    let Data1 = await authorModel.find({ rating : { $gt : 3.5}}).select("_id")
    
    for ( let i = 0; i<Data1.length; i++){
        let Data2 = await bookModel.updateMany({authorId : Data1[i]._id},{$inc:{price:10}},{new:true})
        
        res.send({msg : Data2})
    }
    // console.log(Data1);
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.addNewField = addNewField
module.exports.updateBooksPrice  = updateBooksPrice 
