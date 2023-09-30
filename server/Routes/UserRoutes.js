import express from 'express'

import { GetUserById ,GetUserAll, UserDelete ,UserUpdate,registerUser, loginUser} from '../Controles/UserControl.js'

const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)

router.get('/:id', GetUserById)
router.get('/', GetUserAll)
router.delete('/:id', UserDelete)
router.put('/:id', UserUpdate)

export default router