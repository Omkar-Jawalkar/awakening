import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/createUser", userController.createUser);
router.delete("/deleteUser", userController.deleteUser);

export default router;
