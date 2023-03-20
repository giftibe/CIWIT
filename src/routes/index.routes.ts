import express from 'express'
const Router = express.Router()

import userRouter from './user.routes'
import messageRouter from './message.routes'

Router.use('/v1', userRouter);
Router.use('/v1', messageRouter);

export {Router}
