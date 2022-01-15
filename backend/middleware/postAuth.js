const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(
    "_____________________________________________________________________________________________"
  );
if (req.headers.authorization === "" || !req.headers.authorization) {
    console.log("req.headers.authorization ABSENT");
  } 
  next();
};
