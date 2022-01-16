const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const getAuth = require('../middleware/getAuth');
const putDeleteAuth = require('../middleware/putDeleteAuth');

const multer = require('../middleware/multer-config');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

router.get('/', getAuth, userCtrl.getAllAccounts);
router.get('/:id', getAuth, userCtrl.getAccount);

router.delete('/:id', getAuth, putDeleteAuth, userCtrl.deleteAccount);

//router.get('/:id', getAuth, userCtrl.getOneAccount); //facultatif
//router.put('/:id', userCtrl.modifyAccount); //facultatif


module.exports = router;