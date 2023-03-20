import { Request, Response } from 'express'
import messageServices from '../services/message.services';
import userServices from '../services/user.services';
const { findByusername } = userServices
const { sendText, getAllTexts } = messageServices


class messageController {

    async sendAText(req: Request, res: Response) {
        // const {chat, sender, receiver} = req.body
        try {
            //check if the receiver exists
            const findSender = await findByusername(req.body.sender)
            const findReceiver = await findByusername(req.body.receiver)
            if (!findReceiver && !findSender) {
                return res.status(404).send({
                    message: 'please check your sender or reciever contact',
                    success: false
                })
            }

            const message = req.body
            await sendText(message)
            return res.status(200).send({ message: 'message sent successfully', success: true })

        } catch (err) {
            return res.status(500).send({ message: err, success: false })
        }
    }

    async getAllMessages(req: Request, res: Response) {
        try {
            //check if the reciever exists in your list
            const receiver = req.body.reciever
            const findReceiver = await findByusername(req.body.receiver)

            if (findReceiver) {
                await getAllTexts(receiver)
                return res.status(201).send({
                    message: 'messages retrieved',
                    success: true
                })

            } else {
                return res.status(201).send({
                    message: 'no such contact on your list',
                    success: false
                })
            }

        } catch (err) { return res.status(500).send({ message: err, success: false }) }
    }
}
