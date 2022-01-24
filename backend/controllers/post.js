const db = require("../models/index");
const jwt = require("jsonwebtoken");
const fs = require("fs");

exports.createPost = (req, res, next) => {

  console.log("req.body", req.body)

  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.TOKEN);
  const userId = decodedToken.userId;

  db.user
    .findOne({
      where: { id: userId },
    })

    .then((user) => {
      if (user) {

        db.post
          .create({
            content: req.body.content,
            title: req.body.title,
            userId: user.id,
            attachment: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: req.body.image,
          })
          .then(() => res.status(201).json({ message: "Post créé" }))
          .catch((error) => res.status(400).json({ error: "erreur catch" }));
      } else {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
    })
    .catch((error) => res.status(501).json({ error: "erreur catch" }));
};

exports.getAllPosts = (req, res, next) => {
  db.post
    .findAll({
      order: [["createdAt", "DESC"]],
    })
    .then((posts) => {
      res.status(202).json(posts);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
  const postId = JSON.parse(req.params.id);

  db.post
    .findOne({
      attributes: ["id", "userId", "title", "content", "attachment"],
      where: { id: postId },
    })

    .then((post) => {
      if (!post) {
        return res.status(401).json({ error: "Post inexistant" });
      }
      res.status(200).json(post);
    })
    .catch((error) => res.status(500).json({ error: "erreur" }));
};

exports.modifyPost = (req, res, next) => {};

exports.deletePost = (req, res, next) => {
  const postId = JSON.parse(req.params.id);
  console.log(req.params.id);

  db.post
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
