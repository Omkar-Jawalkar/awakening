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
        // Generate JWT token if using token-based auth
        // const token = authService.generateToken(req.user);
        res.redirect(`http://localhost:3000/auth-success`);
        // res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
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

export default {
    googleAuth,
    googleAuthCallback,
    authSuccess,
    logout,
    getCurrentUser,
};
