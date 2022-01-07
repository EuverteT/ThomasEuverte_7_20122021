const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    try {
        console.log("req.body.body.userId", req.body.body.userId);
        const token = req.body.headers.Authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        const userId = decodedToken.userId;
        console.log("AUTH decodedToken.userId", decodedToken.userId);
        
        if (req.body.body.userId !== userId) {
            throw 'User ID non valable!';
        } else {
            next();
        }
    } catch (error) {
        res.status(403).json({ error: error | 'Unauthorized request' });
    }
};