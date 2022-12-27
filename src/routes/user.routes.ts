const router = require('express').Router();
import { createUser, verifyUser, userArea } from '../auth/controller';
import { checkIfverified } from '../auth/middleware/user.middleware';


router.post('/create', createUser)

router.get('/verify', verifyUser)

router.get('/protected', checkIfverified, userArea)


export { router }

