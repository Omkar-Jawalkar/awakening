import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// Google OAuth routes
router.get("/google", authController.googleAuth);
router.get(
    "/google/callback",
    authController.googleAuthCallback,
    authController.authSuccess
);

// Session routes
router.get("/currentUser", authController.getCurrentUser);
router.post(
    "/generateTokenUsingRefreshToken",
    authController.generateTokenUsingRefreshToken
);
router.post("/logout", authController.logout);

export default router;
