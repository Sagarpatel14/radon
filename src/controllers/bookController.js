const { default: mongoose } = require("mongoose")
const bookModel= require("../models/bookModel")
const isValidObject = function(ObjectId){
    return mongoose.Types.ObjectId.isValid(ObjectId)
}


const createBook= async function (req, res) {
    let book = req.body;
    let authorId = req.body.authorId;
    let publisherId = req.body.publisherId
    if(!authorId){
        return res.send({msg : "author id is required"})
    }
    if(!isValidObject(authorId)){
        return res.send({msg : "author id is not valid"})
    }
    if(!publisherId){
        return res.send({msg : "publishers id is required"})
    }
    if(!isValidObject(publisherId)){
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
    let updated = await bookModel.find()
    res.send({data:updated })
}


const updateCertainFields = async function (req, res) {
    let updated = await bookModel.updateMany({}, {$set : {isHardCover : true}}, {new : true})
    res.send({data:updated })
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.addNewField = addNewField
module.exports.updateCertainFields = updateCertainFields
