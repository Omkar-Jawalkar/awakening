import userService from "./userService.js";
import prisma from "../prisma/client.js";

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

export default {
    googleOAuthCallback,
    findUserById,
    logout,
};
