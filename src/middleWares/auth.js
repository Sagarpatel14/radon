

const jwt = require("jsonwebtoken");


const mid1 = function(req, res, next){
  //authentication
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

 //authorization
  let userToBeModified = req.params.userId
  let userLoggedIn = decodedToken.userId
  if(userToBeModified != userLoggedIn) {
      return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  }else{
    next();
  }
}




// const mid2 = function(req, res, next){
//   //userId for which the request is made. In this case message to be posted.
//     let userToBeModified = req.params.userId
//     //userId for the logged-in user
//     let userLoggedIn = decodedToken.userId

//     //userId comparision to check if the logged-in user is requesting for their own data
//     if(userToBeModified != userLoggedIn) {
//       return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
//     }else{
//       next();
//     }
// }

module.exports.mid1 = mid1
// module.exports.mid2 = mid2