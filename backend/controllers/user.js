const db = require('../models/index');

exports.signup = (req, res, next) => {
   
    db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        isAdmin: false
    })

    .then(function (newUser) {
        return res.status(201).json({
          userId: newUser.id,
        });
      })
      .catch(function (err) {
        return res.status(500).json({ error: "error" });
      });

};

exports.login = (req, res, next) => {
   

};