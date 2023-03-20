import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());


//imports
import database from './database/db';
import route from '../src/routes/user.routes'


app.use('/api/v1', route)

app.listen(process.env.PORT, () => {
    database();
    console.log(`server running`);
});
