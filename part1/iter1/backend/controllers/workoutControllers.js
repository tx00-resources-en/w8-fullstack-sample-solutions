const Workout = require('../models/workoutModel');

// GET /api/workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.status(200).json(workouts);
};

// POST /api/workouts
const createWorkout = async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
};

// GET /api/workouts/:workoutId
const getWorkoutById = async (req, res) => {
  res.send("getWorkoutById");
};

// PUT /api/workouts/:workoutId
const updateWorkout = async (req, res) => {
  res.send("updateWorkout");
};

// DELETE /api/workouts/:workoutId
const deleteWorkout = async (req, res) => {
  res.send("deleteWorkout");
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};
