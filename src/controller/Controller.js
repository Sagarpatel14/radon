const bookModel = require('../model/bookModel')



const creatData = async function(req , res){
    let Data = req.body;
    let saveData = await bookModel.create(Data);
    res.send({msg : saveData})
}

const getBookdata = async function(req , res){
    let allUser = await bookModel.find();
    res.send({msg : allUser})
}

module.exports.creatData = creatData;
module.exports.getBookdata = getBookdata;