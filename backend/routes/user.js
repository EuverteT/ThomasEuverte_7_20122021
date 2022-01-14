const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const getAuth = require('../middleware/getAuth');
const putDeleteAuth = require('../middleware/putDeleteAuth');

const multer = require('../middleware/multer-config');

router.post('/signup', userCtrl.signup); // OK
router.post('/login', userCtrl.login); // OK

router.get('/', getAuth, userCtrl.getAllAccounts); // OK
router.get('/:id', getAuth, userCtrl.getAccount); // OK

router.delete('/:id', getAuth, putDeleteAuth, userCtrl.deleteAccount); // OK pour admin

//router.put('/:id', userCtrl.modifyAccount); //facultatif


module.exports = router;