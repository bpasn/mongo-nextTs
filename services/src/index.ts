import express from 'express';
import dotenv from 'dotenv'
import path from 'path';
import config from 'config'
import connectionDB from './utils/connectionDB';
import router from './router';
import morgan from './utils/morganConfig'
dotenv.config({ path: path.resolve('.env') })

const app = express();
app.use(express.json())
//service KEEP LOG REQUEST
app.use(morgan)



app.use(router)

app.listen(config.get('port'), async () => {
    await connectionDB()
    console.log("service is running ", config.get("port"))
})



