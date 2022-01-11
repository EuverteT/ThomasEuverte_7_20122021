const db = require("../models/index");
const jwt = require("jsonwebtoken");

exports.createComment = (req, res, next) => {
  const token = req.body.headers.Authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN);
  const userId = decodedToken.userId;

  db.post
    .findOne({
      where: { postId: req.body.postId },
    })
    .then((post) => res.status(201).json())
    .catch((error) => res.status(500).json({ error: "erreur catch" }));

  db.user
    .findOne({
      where: { id: userId },
    })

    .then((user) => {
      if (user) {
        db.post
          .create({
            content: req.body.body.content,
            postId: postId,
            userId: user.id,
          })
          .then(() => res.status(201).json({ message: "Post créé" }))
          .catch((error) => res.status(400).json({ error: "erreur catch" }));
      } else {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
    })
    .catch((error) => res.status(500).json({ error: "erreur catch" }));
};

exports.getAllComments = (req, res, next) => {
  db.comment
    .findAll({
      order: [["createdAt", "DESC"]],
    })
    .then((posts) => {
      res.status(202).json(posts);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {
    const postId = JSON.parse(req.params.id);

    db.comment
      .findOne({
        attributes: ["id"],
        where: { id: postId },
      })
      .then((post) => {
        if (!post) {
          return res.status(401).json({ error: "Post inexistant" });
        }
        db.post
          .destroy({
            attributes: ["id"],
            where: { id: postId },
          })
          .then(() => res.status(200).json({ message: "Post supprimé" }))
          .catch(() => res.status(500).json({ error: "erreur catch" }));
      })
      .catch((error) => res.status(500).json({ error: "erreur catch" }));
  
};
