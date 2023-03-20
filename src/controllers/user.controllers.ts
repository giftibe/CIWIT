import userServices from '../services/user.services';
import express, { Request, Response } from 'express';
// const { findByEmail, createUser, deleteUser, findByusername } =
//     userServices;

export default class userControllers {
    async createUser(req: Request, res: Response) {
        let success: boolean = false;
        const email = req.body.email
        const username = req.body.username

        try {
            //checks if email is already in use
            if (await userServices.findByEmail(email)) {
                return res.status(409).send({
                    message: 'email already exist',
                    success: true,
                });
            }
            //checks if username already exist
            if (await userServices.findByusername(username)) {
                return res.status(409).send({
                    message: 'username already exist',
                    success: true,
                });
            }

            //Now creates user if above conditons are satified
            const newUser = await userServices.createUser(req.body);
            return res.status(201).send({
                message: 'User created',
                success: true,
                newUser,
            });
        } catch (err) {
            return res.status(500).send({ message: err, success: false });
        }
    }

    async deleteByEmail(req: Request, res: Response) {

        try {
            const { email } = req.body

            //checks if email is already in use
            if (await userServices.findByEmail(email)) {
                await userServices.deleteUser(email)
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