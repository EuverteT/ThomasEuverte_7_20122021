const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//router.get('/:id', auth, userCtrl.getAccount);
//router.put('/:id', auth, userCtrl.modifyAccount);
//router.delete('/:id', auth, userCtrl.deleteAccount);

//router.get('/users', auth, userCtrl.getAllAcounts);

module.exports = router;