import express from 'express'
const app = express();
import userRouter from './user.routes'

export default app.use('/v1', userRouter);