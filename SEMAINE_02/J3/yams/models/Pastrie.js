import mongoose from "mongoose";

export const PastriesSchema = new mongoose.Schema({
    ref: String,
    name: String,
    description: String,
    quantity: Number,
    order: Number,
    url: String,
    tags: [String],
    like: String,
    ingredients: [String],
    date : Date

  });

export const PastrieModel = mongoose.model("pastries", PastriesSchema);