const workoutController = require("../controllers/workoutController");
const express = require("express");
const router = express.Router();

router.get("/", workoutController.getAllWorkouts);
router.get("/:id", workoutController.getOneWorkout);
router.post("/", workoutController.createOneWorkout);
router.put("/:id", workoutController.updateOneWorkout);
router.delete("/:id", workoutController.deleteOneWorkout);

module.exports = router;
