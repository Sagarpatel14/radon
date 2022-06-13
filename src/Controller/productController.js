const productModel = require("../Model/productModel");

const createProduct = async function (req ,res){
    let Data = req.body;
    let productData = await productModel.create(Data);
    res.send({msg : productData})
}


module.exports.createProduct = createProduct