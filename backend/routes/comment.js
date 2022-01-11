const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

const auth = require('../middleware/auth');

router.post('/:postId', commentCtrl.createComment);
router.get('/:postId', commentCtrl.getAllComments);
router.delete('/:commentId', commentCtrl.deleteComment);


module.exports = router;