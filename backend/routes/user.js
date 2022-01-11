const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

router.get('/:id', userCtrl.getAccount);
router.put('/:id', userCtrl.modifyAccount);
router.delete('/:id', userCtrl.deleteAccount);
router.get('/', userCtrl.getAllAccounts);

module.exports = router;