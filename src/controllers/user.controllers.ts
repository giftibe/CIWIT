import userServices from '../services/user.services';
import { Request, Response } from 'express';
const { findByEmail, createUser, deleteUser, findByusername } = userServices;

class userControllers {
    async createAUser(req: Request, res: Response) {

        try {
            //checks if email is already in use
            let searchMail = await findByEmail(req.body.email)
            if (searchMail) {
                return res.status(409).send({
                    message: 'email already exist',
                    success: true,
                });
            }
            //checks if username already exist
            if (await findByusername(req.body.username)) {
                return res.status(409).send({
                    message: 'username already exist',
                    success: true,
                });
            }

            //Now creates user if above conditons are satified
            const newUser = await createUser(req.body);
            return res.status(201).send({
                message: 'User created',
                success: true,
                newUser,
            });
        } catch (err) {
            return res.status(500).send({
                message: err,
                success: false
            });
        }
    }

    async deleteByEmail(req: Request, res: Response) {

        try {
            const { email } = req.body

            //checks if email is already in use
            if (await findByEmail(email)) {
                await deleteUser(email)
                return res.status(201).send({
                    message: 'account deleted',
                    success: true,
                })
            } else {
                return res.status(409).send({
                    message: 'email already exist',
                    success: true,
                });

            }

        } catch (err) {
            res.status(500).send({ message: err, success: false });

        }
    }

}

export default new userControllers();