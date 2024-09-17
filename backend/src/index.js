import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import app from "./app.js";
import connectDB from "./config/database.config.js";
import { APP_NAME } from "./constants.js";


// CONNECTING SERVER TO THE DATABASE
connectDB();

const PORT = process.env.PORT || 8000;

// STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT : ${PORT}`);
});

app.get(`/`, (req, res) => {
    res.send(`${APP_NAME} Services`);
});