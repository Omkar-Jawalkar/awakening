import express from "express";
import meditationController from "../controllers/meditationController.js";

const router = express.Router();

router.post("/createMeditation", meditationController.createMeditation);
router.get(
    "/getAllMeditationsByDate",
    meditationController.getAllMeditationsUsingDate
);
router.delete("/deleteMeditation", meditationController.deleteMeditation);
router.put("/updateMeditation", meditationController.updateMeditation);

export default router;
