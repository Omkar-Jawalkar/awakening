import express from "express";
import workoutController from "../controllers/workoutController.js";

const router = express.Router();

router.get("/getWorkoutById", workoutController.getWorkouts);
router.post("/createWorkout", workoutController.createWorkout);
router.delete("/deleteWorkout", workoutController.deleteWorkout);
router.get("/updateWorkout", workoutController.updateWorkout);

export default router;
