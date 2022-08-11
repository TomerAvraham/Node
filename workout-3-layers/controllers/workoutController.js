const workoutService = require("../services/workoutService");

function validateWorkoutBody(body) {
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return false;
  }
  return true;
}

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
  if (!validateWorkoutBody(req.body)) {
    return res
      .status(418)
      .json({ status: "FAILED", message: "Missing workout information" });
  }

  const newWork = workoutService.createWorkout(req.body);

  res.status(200).json({ status: "SUCCESS", data: newWork });
};

const updateOneWorkout = (req, res) => {
  if (!validateWorkoutBody(req.body)) {
    return res
      .status(418)
      .json({ status: "FAILED", message: "Missing workout information" });
  }

  const updateWorkout = workoutService.updateWorkout(req.params.id, req.body);

  if (!updateWorkout)
    return res
      .status(400)
      .json({ status: "FAILED", message: "Didn't update the workout" });

  res.status(200).json({ status: "SUCCESS", data: updateWorkout });
};

const deleteOneWorkout = (req, res) => {
  const isDeleted = workoutService.deleteWorkout(req.params.id);
  if (isDeleted) return res.status(200).json({ status: "SUCCESS", data: null });
  res.status(400).json({
    status: "FAILED",
    message: `Couldn't delete workout with the id ${req.params.id}`,
  });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
