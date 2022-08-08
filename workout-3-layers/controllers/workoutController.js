const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const workouts = workoutService.allWorkouts();
  res.status(200).json({ status: "SUCCESS", data: workouts });
};

const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.oneWorkout(req.params.id);
  if (oneWorkout === undefined) {
    return res
      .status(404)
      .json({ status: "FAILED", message: "Workout not found" });
  }

  res.status(200).json({ status: "SUCCESS", data: oneWorkout });
};

const createOneWorkout = (req, res) => {
  if (
    !req.body.name ||
    !req.body.mode ||
    !req.body.equipment ||
    !req.body.exercises ||
    !req.body.trainerTips
  ) {
    return res
      .status(418)
      .json({ status: "FAILED", message: "Missing workout information" });
  }

  workoutService.createWorkout(req.body);

  res.send("create One workout");
};

const updateOneWorkout = (req, res) => {
  res.send("update One workout");
};

const deleteOneWorkout = (req, res) => {
  res.send("delete One workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
