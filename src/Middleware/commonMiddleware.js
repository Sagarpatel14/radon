const productModel = require("../Model/productModel");
const userModel = require("../Model/userModel");


const mid1 = function (req, res, next){
    let headersValue = req.headers.isfreeappuser;
    if (headersValue === undefined){
        res.send({msg : "please give mandatory isFreeAppUser value"})
    } else {
        next();
    }
}


const mid2 = async function(req, res, next){
    let Data = req.body;
    let productIdData = await productModel.findOne({_id : Data.productId});
    let userIdData = await userModel.findOne({_id : Data.userId})

    if (productIdData && userIdData) {
        next();
    } else if (!productIdData || !userIdData){
        return res.send("please provide product id and user id");
    }

}


const mid3 = async function( req, res, next){
    let headersValue = req.headers.isfreeappuser;
    let Data = req.body;
    let productIdData = await productModel.findOne({_id : Data.productId});
    let userIdData = await userModel.findOne({_id : Data.userId})

    if(headersValue){
        next();
    }else{
        if(productIdData.price < userIdData.balance){
            const rqrdValue = userIdData.balance - productIdData.price;
        const userBalance = await userModel.findOneAndUpdate({_id : Data.userId},{$set:{balance:rqrdValue}},{new:true})
        }else{
            return res.send({msg : "not enough balance"})
        }
    }
}


module.exports.mid1 = mid1;
module.exports.mid2 = mid2;
module.exports.mid3 = mid3;