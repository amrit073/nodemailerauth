const router = require('express').Router();
const { createUser, verifyUser, userArea } = require('../auth/controller');


router.post('/create', createUser)

router.get('/verify', verifyUser)

router.get('/protected', userArea)

module.exports = { router }

