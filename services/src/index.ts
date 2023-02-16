import express, { Request, Response } from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv'
import path from 'path';
import config from 'config'
import connectionDB from './utils/connectionDB';
import router from './router';
dotenv.config({ path: path.resolve('.env') })

const app = express();
app.use(express.json())
app.use(router)


app.listen(config.get('port'), async () => {
    await connectionDB()
    console.log("service is running " , config.get("port"))
})



