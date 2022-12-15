import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";

const app = express();

dotenv.config();
const {
    APP_LOCALHOST: hostname,
    APP_PORT: port,
    APP_ADDRESS_MONGOOSE,
    APP_COLLECTION_MONGOOSE,
} = process.env;

mongoose.connect(
    `mongodb://${APP_ADDRESS_MONGOOSE}/${APP_COLLECTION_MONGOOSE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, () => {
    console.log(`Example app listening at http://${hostname}:${port}`);
});