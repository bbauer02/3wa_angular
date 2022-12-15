import mongoose from "mongoose";
import dotenv from "dotenv";

import { PastrieModel } from "./models/Pastrie.js";
import { pastries } from "./mocks/mock-pastries-node.js";

dotenv.config();

const {
  APP_LOCALHOST: hostname,
  APP_PORT: port,
  APP_ADDRESS_MONGOOSE,
  APP_COLLECTION_MONGOOSE,
} = process.env;

mongoose.connect(
  `mongodb://${APP_ADDRESS_MONGOOSE}/${APP_COLLECTION_MONGOOSE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export const init = async () => {
  try {
    await PastrieModel.deleteMany();
    const res = await PastrieModel.insertMany(pastries);
    return res;
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

init().then(console.log);