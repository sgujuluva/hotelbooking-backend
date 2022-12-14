import express from "express";
import dotenv, { config } from "dotenv";
import mongoose from "mongoose"

dotenv.config();

const app = express();

app.use(express.json);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
.then(() =>{
    console.log("Database connected!")
})
.catch(error => {
    console.log(error.message)
})



app.listen(4050, () => {
    console.log("Server connected in port 4050")
})