const db = require("../models/index");
const jwt = require("jsonwebtoken");

exports.createPost = (req, res, next) => {
  const token = req.body.headers.Authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN);
  const userId = decodedToken.userId; 

  db.user
    .findOne({
      where: { id: userId},
    })

    .then((user) => {
      if (user) {
        db.post
          .create({
            content: req.body.body.content,
            title: req.body.body.title,
            userId: user.id,
          })
          .then(() => res.status(201).json({ message: "message créé" }))
          .catch((error) => res.status(400).json({ error: "erreur" }));
      } else {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
    })
    .catch((error) => res.status(500).json({ error: "erreur catch" }));
};
