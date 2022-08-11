const DB = require("../data/DB");
const uuid = require("uuid");
const { workouts } = DB;
const moment = require("moment");
const saveToDatabase = require("../utils/saveToDatabase");

const allWorkouts = () => {
  return workouts;
};

const oneWorkout = (id) => {
  const oneWorkout = workouts.find((workout) => workout.id === id);
  return oneWorkout;
};

const createWorkout = (body) => {
  const now = moment().format("MM/DD/YYYY, hh:mm:ss A");
  const newWorkout = {
    ...body,
    id: uuid.v4(),
    createdAt: now,
    updateAt: now,
  };
  workouts.push(newWorkout);
  saveToDatabase("workouts", workouts);
  return newWorkout;
};

const deleteWorkout = (id) => {
  const deleteIndex = workouts.findIndex((workout) => workout.id === id);
  if (deleteIndex <= -1) return false;
  workouts.splice(deleteIndex, 1);
  saveToDatabase("workouts", workouts);
  return true;
};

[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const updateWorkout = (id, body) => {
  const updateIndex = workouts.findIndex((workout) => workout.id === id);
  if (updateIndex <= -1) return false;
  const updateWorkout = {
    ...workouts[updateIndex],
    ...body,
    updateAt: moment().format("MM/DD/YYYY, hh:mm:ss A"),
  };
  workouts[updateIndex] = updateWorkout;
  saveToDatabase("workouts", workouts);
  return updateWorkout;
};

module.exports = {
  allWorkouts,
  oneWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
