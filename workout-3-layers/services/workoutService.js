const DB = require("../data/DB");
const { workouts } = DB;

const allWorkouts = () => {
  return workouts;
};

const oneWorkout = (id) => {
  const oneWorkout = workouts.find((workout) => workout.id === id);
  return oneWorkout;
};

const createWorkout = () => {};

module.exports = {
  allWorkouts,
  oneWorkout,
  createWorkout,
};
