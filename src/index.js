import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config()

connectDB();

















/**
 * //DataBase Connection First Approach All Code In Index File
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listen On ${process.env.PORT}`);
        })
    }
    catch(error) {
        console.log("Error:", error);
        throw err
    }
})
 */
