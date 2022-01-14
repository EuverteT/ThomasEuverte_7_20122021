const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(
    "_____________________________________________________________________________________________"
  );




if (req.headers.authorization === "" || !req.headers.authorization) {
    console.log("pas le cas req.headers.authorization");
   console.log(req.body.headers.Authorization)
  } 

  next();

};
