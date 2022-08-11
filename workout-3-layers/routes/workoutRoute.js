const workoutController = require("../controllers/workoutController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(workoutController.getAllWorkouts)
  .post(workoutController.createOneWorkout);

router
  .route("/:id")
  .get(workoutController.getOneWorkout)
  .put(workoutController.updateOneWorkout)
  .delete(workoutController.deleteOneWorkout);

module.exports = router;
