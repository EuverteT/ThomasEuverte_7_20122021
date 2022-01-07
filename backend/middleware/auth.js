const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //const sessionId = localStorage.getItem('userId'); // localStorage is not defined, voir pour mettre l'Id dans le state?
    //console.log("AUTH connectedUserId", sessionId);

    try {
        
        const token = req.body.headers.Authorization.split(' ')[1];
        console.log("AUTH token", token);
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        console.log("AUTH decodedToken", decodedToken)
        const userId = decodedToken.userId;
        console.log("AUTH decodedToken.userId", decodedToken.userId);
        
        if (connectedUserId !== userId) {
            throw 'User ID non valable!';
        } else {
            next();
        }
    } catch (error) {
        res.status(403).json({ error: error | 'Unauthorized request' });
    }
};