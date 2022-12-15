import express from "express";
const router = express.Router();
import { PastrieModel } from "../models/Pastrie.js";

router.get("/", async (req, res) => {

  try {
    const pastries = await PastrieModel.find({}, { ingredients: 0 });
    const ingrediens = await PastrieModel.find({}, { ingredients: 1 });

    res.json({ pastries, ingrediens });
  } catch (err) {
    res.json({ error: "no dataset" });
  }
});

router.get("/pastrie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pastries = await PastrieModel.find({ _id: id }, { ingredients: 0 });
    const ingrediens = await PastrieModel.find({ _id: id }, { ingredients: 0 });

    res.json({ pastries, ingrediens });
  } catch (err) {
    res.json({ error: "no dataset" });
  }
});

router.get("/ingrediens/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ingrediens = await PastrieModel.find(
      { _id: id, ingredients: { $exist: true } },
      { ingredients: 1 }
    );
    res.json({
     ingrediens
    });
  } catch (err) {
    res.json({ error: "no dataset" });
  }
});

export default router;
