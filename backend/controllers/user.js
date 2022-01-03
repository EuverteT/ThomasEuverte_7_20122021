const db = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  db.user
    .findOne({
      where: { email: req.body.email },
    })

    .then((user) => {
      if (user) {
        return res.status(401).json({ error: "Email déjà utilisé!" });
      }
      bcrypt.hash(req.body.password, 5).then((hash) => {
        db.user.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
          isAdmin: false,
        })
      })
        .then(() => res.status(201).json({ message: "Utilisateur créé" }))
        .catch(error => res.status(400).json({ error }));
      
    })

    .catch((error) => res.status(500).json({ error: "error" }));
};

exports.login = (req, res, next) => {
  db.user
    .findOne({ where: { email: req.body.email } })

    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé! " });
      }

      bcrypt.compare(req.body.password, user.password)
      .then(valid => {
          if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect! ' });
          }
          res.status(200).json({
              email: user.email,
              lastName: user.lastName,
              firstName: user.firstName,
              userId: user.id,
              token: jwt.sign(
                  { userId: user.id },
                  process.env.TOKEN,
                  { expiresIn: '2h' }
              )
          });
      })
      .catch( error => res.status(500).json({ error }))

    })

     .catch( error => res.status(500).json({ error: "error" }));

  };

  exports.getAccount = (req, res, next) => {
    
    db.user
      .findOne({ 
        attributes: ['id'],
        where: { id: req.params.id } })
  
      .then((user) => {

        if (!user) {
          return res.status(401).json({ error: "Une erreur s'est produite ici => utilisateur inexistant" });
        }
        
        res.status(200).json(user);
      })
  
       .catch( error => res.status(500).json({ error: "Une erreur s'est produite" }));
  
    };