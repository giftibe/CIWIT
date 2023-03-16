import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());


//imports
import database from './database/db';




app.listen(process.env.PORT, () => {
    database();
    console.log(`server running`);
});
