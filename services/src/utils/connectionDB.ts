import mongoose from 'mongoose'

import config from 'config'

export default async function connectionDB() {
    const dbUri = config.get<string>('connectionString');
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(dbUri);
    } catch (error) {
        process.exit(1)
    }
}