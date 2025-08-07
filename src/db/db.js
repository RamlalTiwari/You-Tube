import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`);
        console.log(`\n MongoDb Connected | DB-HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("db Error:", error);
        process.exit(1);
    }
}

export default connectDB;