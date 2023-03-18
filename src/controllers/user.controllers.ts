import userServices from "../services/user.services";
import express, { Request, Response } from "express";

class userControllers {
    async createUser(req: Request, res: Response) {
        let success: boolean = false;
        try {
            const reqBody = req.body
            //if the room type doesn't exist, we create one
            const newUser = await userServices.createUser(req.body)
            res.status(201)
                .send({
                    message: 'error',
                    success: true,

                });
        }
        catch (err) {
            res.status(500)
                .send({ message: 'error', success: false });
        }
    }
}

export default new userControllers()