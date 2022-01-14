const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log(
    "_____________________________________________________________________________________________"
  );

  console.log(
    "__________________PARTIE COMMUNE, CONCERNE LA REQUETE___________________________________________________________________"
  );

  if (req.headers.authorization === "" || !req.headers.authorization) {
    console.log("pas le cas req.headers.authorization");
   console.log(req.body.headers.Authorization)
  } 
  
  
  
  else {
    if (req.params.id === "" || !req.params.id) {
      console.log("pas le cas req.params.id");

      try {
        console.log(
          "_____________________________________________________________________________________________"
        );

        console.log(
          "________________________AUTH (en cours de vérification du NIVEAU) _________________________"
        );
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        console.log("decodedToken", decodedToken);
        const isAdmin = decodedToken.isAdmin;
        console.log(
          "________________________________________________________________________________"
        );
        if (isAdmin) {
          console.log(
            "______________________________________________________________________________"
          );
  
          console.log(
            "________________________GET ACCESS  => TOKEN OK_(ADMIN ACCESS)____________________________________________________________"
          );
          next();
        } else {
          console.log(
            "______________________________________________________________________________"
          );
  
          console.log(
            "________________________GET ACCESS => TOKEN OK_(USER ACCESS)_______________________________________________________________"
          );
          next();
        }
      } catch (error) {
        res.status(403).json({ error: error | "Unauthorized request" });
      }
    }

    if (req.params.id) {
      console.log("cas req.params.id , req.params.id =", req.params.id);
      next();
    }
    

  }
};
