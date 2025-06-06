import passport from "passport";
import authService from "../services/authService.js";

const googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"],
    session: true,
});

const googleAuthCallback = passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
});

const authSuccess = (req, res) => {
    if (req.user) {
        const token = authService.generateToken(req.user);
        const refreshToken = authService.generateRefreshToken(req.user);
        res.redirect(
            `awakening://auth-success?token=${token}?refreshToken=${refreshToken}?id=${req.user.id}`
        );
    } else {
        res.redirect("/login");
    }
};

// Logout controller
const logout = async (req, res) => {
    try {
        await authService.logout(req);
        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Logout failed" });
    }
};

// Get current user
const getCurrentUser = (req, res) => {
    if (req.user) {
        res.status(200).json({ user: req.user });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
};

const generateTokenUsingRefreshToken = (req, res) => {
    try {
        const token = authService.verifyRefreshToken(req.body.refreshToken);
        console.log("token,", token);
        if (token) {
            const newToken = authService.generateToken(token);
            res.status(200).json({ token: newToken });
        } else throw new Error("Error Generating Token Using Refresh Token");
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Generating Token",
        });
    }
};

export default {
    googleAuth,
    googleAuthCallback,
    authSuccess,
    logout,
    getCurrentUser,
    generateTokenUsingRefreshToken,
};
