const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

const getAuth = require('../middleware/getAuth');
const postAuth = require('../middleware/postAuth');
const putDeleteAuth = require('../middleware/putDeleteAuth');
const multer = require('../middleware/multer-config');

router.post('/', postAuth, postCtrl.createPost); // OK

router.get('/', getAuth, postCtrl.getAllPosts); // OK
router.get('/:id', getAuth, postCtrl.getOnePost);

router.delete('/:id', getAuth, putDeleteAuth, postCtrl.deletePost); // OK pour Admin

//router.put('/:id', postCtrl.modifyPost); //facultatif



module.exports = router;