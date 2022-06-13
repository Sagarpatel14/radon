const userModel = require("../Model/userModel");

const createUser = async function (req ,res){
    let Data = req.body;
    let userDarta = await userModel.create(Data);
    res.send({msg : userDarta})
}


module.exports.createUser = createUser