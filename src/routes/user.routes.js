const router = require('express').Router();
const { createUser, verifyUser, userArea } = require('../auth/controller');
const { checkIfverified } = require('../auth/middleware/user.middleware')


router.post('/create', createUser)

router.get('/verify', verifyUser)

router.get('/protected', checkIfverified, userArea)

module.exports = { router }

