// middleware/publicAuth.js
import auth from "./auth.js";

const publicRoutes = [
    "/api/v0/auth/google",
    "/api/v0/auth/google/callback",
    "/api/v0/auth/generateTokenUsingRefreshToken",
    "/api/v0/login",
    "/api/v0/signup",
];

const authUnless = (req, res, next) => {
    if (publicRoutes.some((route) => req.path.startsWith(route))) {
        return next();
    }
    return auth.authenticate(req, res, next);
};

export default authUnless;
