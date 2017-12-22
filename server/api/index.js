import { Router } from 'express'

import users from './users'
import article from './articles'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(article)

export default router
