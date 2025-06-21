import workoutService from "../services/workoutService.js";


export const getWorkouts = async (req, res, next) => {
    try {
        const userId = req.query.userId;
        const workouts = await workoutService.getWorkouts(userId);
        res.status(200).json(workouts);
    } catch (error) {
        next(error);
    }
}
export const createWorkout = async (req, res, next) => {
    try {
        const workoutData = req.body;
        const workout = await workoutService.createWorkout(workoutData);
        res.status(201).json(workout);
    } catch (error) {
        next(error);
    }
}
export const deleteWorkout = async (req, res, next) => {
    try {
        const workoutId = req.query.id;
        const workout = await workoutService.deleteWorkout(workoutId);
        res.status(200).json(workout);
    } catch (error) {
        next(error);
    }
}
export const updateWorkout = async (req, res, next) => {
    try {
        const workoutId = req.query.id;
        const workoutData = req.body;
        const workout = await workoutService.updateWorkout(workoutId, workoutData);
        res.status(200).json(workout);
    } catch (error) {
        next(error);
    }
}
export default {
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
};