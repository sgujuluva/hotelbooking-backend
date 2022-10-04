import express from "express";
import dotenv from "dotenv"

const app = express();

app.listen(4050, () => {
    console.log("Server connected in port 4050")
})