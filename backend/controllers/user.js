const db = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;

  if (
    email == null ||
    email == "" ||
    firstName == null ||
    firstName == "" ||
    lastName == null ||
    lastName == "" ||
    password == null ||
    password == ""
  ) {
    return res.status(400).json({ error: "Formulaire incomplet" });
  }

  db.user
    .findOne({
      where: { email: req.body.email },
    })

    .then((user) => {
      if (user) {
        return res.status(401).json({ error: "Email déjà utilisé!" });
      }
      bcrypt
        .hash(req.body.password, 5)
        .then((hash) => {
          db.user.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            isAdmin: false,
          });
        })
        .then(() => res.status(201).json({ message: "Utilisateur créé" }))
        .catch((error) => res.status(400).json({ error }));
    })

    .catch((error) => res.status(500).json({ error: "error" }));
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email == null || email == "" || password == null || password == "") {
    return res.status(400).json({ error: "Champs manquants" });
  }

  db.user
    .findOne({ where: { email: req.body.email } })

    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé" });
      }

      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
          }
          res.status(200).json({
            email: user.email,
            lastName: user.lastName,
            firstName: user.firstName,
            userId: user.id,
            isAdmin: user.isAdmin,
            token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.TOKEN, {
              expiresIn: "2h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })

    .catch((error) => res.status(500).json({ error: "erreur" }));
};

exports.getAccount = (req, res, next) => {
  const userId = JSON.parse(req.params.id);

  db.user
    .findOne({
      attributes: ["id", "firstName", "lastName", "email", "isAdmin"],
      where: { id: userId },
    })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur inexistant" });
      }
      res.status(200).json(user);
    })
    .catch((error) => res.status(500).json({ error: "erreur" }));
};

exports.modifyAccount = (req, res, next) => {};

exports.deleteAccount = (req, res, next) => {
  const userId = JSON.parse(req.params.id);
  console.log("req.params.id", req.params.id);

  db.user
    .findOne({
      attributes: ["id"],
      where: { id: userId },
    })

    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur inexistant" });
      }
      db.user
        .destroy({
          attributes: ["id"],
          where: { id: userId },
        })
        .then(() => res.status(200).json({ message: "Compte supprimé" }))
        .catch(() => res.status(500).json({ error: "erreur" }));
    })

    .catch((error) => res.status(500).json({ error: "erreur" }));
};

exports.getAllAccounts = (req, res, next) => {
  db.user
    .findAll()
    .then((users) => res.status(202).json(users))
    .catch((error) => res.status(400).json({ error: "erreur" }));
};
