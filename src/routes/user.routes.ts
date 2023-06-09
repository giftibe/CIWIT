import express from 'express'
const router = express.Router()

import userControllers from '../controllers/user.controllers'
const { createAUser } = userControllers

router.post('/users', createAUser)

export default router