import express from 'express';
const app = express();
import {Router} from '../src/routes/index.routes'
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
app.use(cors());

app.use(express.json());

//imports
import database from './database/db';

app.use('/api', Router)

app.listen(process.env.PORT, () => {
    database();
    console.log(`server running`);
});
