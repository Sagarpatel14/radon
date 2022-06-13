const orderModel = require("../Model/orderModel");
const productModel = require("../Model/productModel");
const userModel = require("../Model/userModel");

const createOrder = async function (req ,res){
    let Data = req.body;
    let userId = req.body.userId
    let productId = req.body.productId
    let userIdData = await userModel.find().select("_id")
    let productIdData = await productModel.find().select("_id")
    for( let i= 0; i<userIdData.length; i++){
        if(userId === userIdData[i] && productId === productIdData[i]){
            let orderData = await orderModel.create(Data);
            res.send({msg : orderData})
        }
    }
    // let orderData = await orderModel.create(Data);
    // res.send({msg : orderData})
}


module.exports.createOrder = createOrder