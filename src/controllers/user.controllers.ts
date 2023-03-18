import userServices from "../services/user.services";
import express, { Request, Response } from "express";
const { findByEmail, createUser, deleteUser, findByusername } = new userServices


class userControllers {
    async createUser(req: Request, res: Response) {
        let success: boolean = false;
        const { email, username } = req.body


        try {
            const reqBody = req.body

            //checks if email is already in use
            if (await findByEmail(email)) {
                res.status(409)
                    .send({
                        message: 'email already exist',
                        success: true,
                    });
            }
            //checks if username already exist
            if (await findByusername(username)) {
                res.status(409)
                    .send({
                        message: 'username already exist',
                        success: true,
                    });
            }

            //Now creates user if above conditons are satified
            const newUser = await createUser(req.body)
            res.status(201)
                .send({
                    message: 'User created',
                    success: true,
                });

        }
        catch (err) {
            res.status(500)
                .send({ message: err, success: false });
        }
    }
}

export default new userControllers()