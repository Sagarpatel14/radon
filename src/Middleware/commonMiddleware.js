

const isFreeAppUser = function (req, res, next){
    let headersValue = req.headers.isfreeappuser;
    if (headersValue === undefined){
        res.send({msg : "please give mandatory isFreeAppUser value"})
    } else {
        next();
    }
}

module.exports.isFreeAppUser = isFreeAppUser;