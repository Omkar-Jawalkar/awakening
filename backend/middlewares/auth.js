import authService from "../services/authService.js";

const authMiddleware = {
    // Verify JWT from Authorization header
    authenticate: (req, res, next) => {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

        if (!token) {
            return res.status(401).json({ message: "Authentication required" });
        }

        const decoded = authService.verifyToken(token);
        if (!decoded) {
            return res
                .status(403)
                .json({ message: "Invalid or expired token" });
        }

        req.user = decoded; // Attach user to request
        next();
    },

    // Optional: Role-based access control
    authorize: (roles) => {
        return (req, res, next) => {
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({ message: "Unauthorized access" });
            }
            next();
        };
    },
};

export default authMiddleware;
