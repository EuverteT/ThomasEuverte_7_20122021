const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

const getAuth = require('../middleware/getAuth');
const putDeleteAuth = require('../middleware/putDeleteAuth');

router.post('/:postId', getAuth, commentCtrl.createComment);

router.get('/:postId', getAuth, commentCtrl.getAllComments);

router.delete('/:commentId', putDeleteAuth, commentCtrl.deleteComment);


module.exports = router;