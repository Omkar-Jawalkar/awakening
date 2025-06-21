import express from "express";
import taskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/getTaskById", taskController.getTask);
router.post("/createTask", taskController.createTask);
router.delete("/deleteTask", taskController.deleteTask);
router.put("/updateTask", taskController.updateTask);
router.get("/getAllTasksUsingDate", taskController.getAllTasksUsingDate);

export default router;
