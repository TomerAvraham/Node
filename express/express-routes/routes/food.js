import express from "express";
import foodArr from "../data/food.js";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send(foodArr);
});

router.get("/getOne/:id", (req, res) => {
  const { id } = req.params;
  const food = foodArr.find((f) => f.id == id);
  if (food === undefined) {
    return res.send("Sorry, we ran out of this meal");
  }
  res.send(food);
});

export default router;
