const orderModel = require("../Model/orderModel");
const productModel = require("../Model/productModel");
const userModel = require("../Model/userModel");

const createOrder = async function (req ,res){
    let Data = req.body;
    let orderData = await orderModel.create(Data);
    res.send({msg : orderData})
}


module.exports.createOrder = createOrder