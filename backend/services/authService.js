import userService from "./userService.js";
import prisma from "../prisma/client.js";
import jwt from "jsonwebtoken";

// Google OAuth callback handler
const googleOAuthCallback = async (
    req,
    accessToken,
    refreshToken,
    profile,
    done
) => {
    try {
        let user = await prisma.user.findUnique({
            where: {
                googleId: profile.id,
            },
        });

        if (!user) {
            // Create new user if doesn't exist
            // @ts-ignore
            user = userService.createUser({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                phone: profile.phone,
            });
        }

        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
};

// Find user by ID
const findUserById = async (id) => {
    return userService.findUserById(id);
};

// Logout service
const logout = (req) => {
    return new Promise((resolve, reject) => {
        req.logout((err) => {
            if (err) reject(err);
            resolve(true);
        });
    });
};

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            name: user.name,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" } // Token expires in 24 hour
    );
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return null;
    }
};

const verifyRefreshToken = (refreshToken) => {
    try {
        return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
        return null;
    }
};

// Generate refresh token (long-lived)
const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user.id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "7d" } // Refresh token expires in 7 days
    );
};

export default {
    googleOAuthCallback,
    findUserById,
    generateToken,
    verifyToken,
    generateRefreshToken,
    logout,
    verifyRefreshToken,
};
