import express from "express";
import scoreController from "../controllers/scoreController.js";

const router = express.Router();

router.get("/getHomepageData", scoreController.getHomepageData);
export default router;
