import express from 'express';
const router = express.Router();

import messageController from "../controllers/message.controller";
const { sendAText, getAllMessages} = messageController

router.post('/messages', sendAText)
router.get('/messages', getAllMessages)

export default router