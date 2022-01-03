const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Récupération du token dans le header authorization
        const decodedToken = jwt.verify(token, process.env.TOKEN); // On décode le token avec la fonction VERIFY
        const userId = decodedToken.userId; // On récupère le userId présent dans le token
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) { // On vérifie le userId du corps de la requete avec celui du token
            throw 'User ID non valable!';
        } else {
            next();
        }
    } catch (error) {
        res.status(403).json({ error: error | 'Unauthorized request' });
    }
};