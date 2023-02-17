import mongoose, { ConnectOptions } from 'mongoose'

import config from 'config'

export default async function connectionDB() {
    const dbUri = config.get<string>('connectionString');
    try {
        const option: ConnectOptions = {
            serverSelectionTimeoutMS: 10 * 1000, // Defaults to 30000 (30 seconds)
        }
        console.log("CREATE CONNECTION ...")
        mongoose.set("strictQuery", true)
        await mongoose.connect(dbUri, option);
        console.log("DATABASE IS CONNECTED..")
    } catch (error) {
        console.log(`DATABASE IS NOT CONNECTED WITH ERROR: ${error instanceof Error && error.message}`)
        process.exit(1)
    }
}