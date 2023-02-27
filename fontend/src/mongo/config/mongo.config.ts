
import mongoose, { ConnectOptions } from 'mongoose';

import config from 'config';
export default async function connectionDB() {
    const dbUrl = config.get<string>('connectionString');
    try {
        const option:ConnectOptions = {
            serverSelectionTimeoutMS:10*1000
        }
        mongoose.set('strictQuery',true);

        await mongoose.connect(dbUrl,option);
        console.log("DATABASE IS CONNECTED ...")
    } catch (error) {
        console.log(`DATABASE IS NOT CONNECTED WITH ERROR : ${error instanceof Error && error.message}`)
        process.exit(1)
    }
}