const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

const getAuth = require('../middleware/getAuth');
const putDeleteAuth = require('../middleware/putDeleteAuth');

//router.post('/:postId', getAuth, commentCtrl.createComment); // en cours

//router.get('/:postId', getAuth, commentCtrl.getAllComments); // en cours

//router.delete('/:commentId', putDeleteAuth, commentCtrl.deleteComment); // en cours


module.exports = router;