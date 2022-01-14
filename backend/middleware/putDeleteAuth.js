const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {


if (req.params.id) {
    console.log("cas req.params.id , req.params.id =", req.params.id);

    try {
      console.log(
        "________________________AUTH (en cours de vérification du NIVEAU) _________________________"
      );
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.TOKEN);
      console.log("decodedToken", decodedToken);
      const isAdmin = decodedToken.isAdmin;
      const userId = decodedToken.userId;
      const reqId = req.params.id;
      console.log(userId);
      console.log(
        "_____________________________________________________________________________________________"
      );
      if (isAdmin) {
        console.log(
          "________________________AUTH NIVEAU 3  => TOKEN OK_(ADMIN ACCESS)__________________________________________"
        );
        next();
      } else {
        if (userId === reqId) {
          console.log(
            "________________________AUTH NIVEAU 2  => TOKEN OK_(DELETE AND MODIF ACCESS)__________________________________________"
          );
          next();
        } else userId !== reqId;
        {
          console.log(
            "________________________AUTH NIVEAU 1  => TOKEN OK_(READ ONLY ACCESS)__________________________________________"
          );
          next();
        }
      }
    } catch (error) {
      res.status(403).json({ error: error | "Unauthorized request" });
    }
  }
}