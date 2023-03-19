import express, { Application } from 'express'
const app: Application = express()
const Router = express.Router()

import userControllers from '../controllers/user.controllers'
const{createUser} = new userControllers()

Router.post('/user', createUser)

