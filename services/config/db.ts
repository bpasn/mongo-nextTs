import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve('.env') })
const localDB: string | undefined = process.env.CONNECTION_STRING;
import d from './default'
import { config } from 'config';
const connectionTodb = async () => {
    const dbUri = config.get<string>
}
// const connectDB = async () => {
//   await Mongoose.connect(localDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   console.log("MongoDB Connected")
// }