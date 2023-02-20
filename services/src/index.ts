require("dotenv").config();

import express from 'express';
import config from 'config'
import connectionDB from './utils/connectionDB';
import router from './router';
import morgan from './utils/morganConfig'
import deserilizeUser from './middlewares/deserializeUser';

const app = express();

app.use(express.json());
//service KEEP LOG REQUEST
app.use(morgan)


app.use(deserilizeUser)
app.use(router)

        
app.listen(config.get('port'), async () => {
   try {
    await connectionDB()
    console.log("service is running ", config.get("port"))
   } catch (error) {
    console.log(error instanceof Error &&  error.message)
   }
})



