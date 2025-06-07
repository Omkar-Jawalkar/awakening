import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import session from "express-session";
import prisma from "./prisma/client.js";
import passport from "./config/passport.js";
import errorHandlers from "./utils/errorHandlers.js";
import authUnless from "./middlewares/publicAuth.js";
import meditationRoutes from "./routes/meditationRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: [
            process.env.FRONTEND_URL || "http://localhost:3000",
            "http://localhost:5173",
            "file://",
            "app://",
        ],
        credentials: true,
    })
);
app.use(helmet());
app.use(morgan("combined"));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: process.env.NODE_ENV === "production" },
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authUnless);

// Health check endpoint
app.get("/api/health", (req, res) => {
    const response = {
        status: "ok",
        message: "Server is running",
        timestamp: new Date().toISOString(),
    };

    res.status(200).json(response);
});

// API Routes
app.use("/api/v0/users", userRoutes);
app.use("/api/v0/auth", authRoutes);
app.use("/api/v0/meditation", meditationRoutes);

app.use("/api", errorHandlers.apiNotFoundHandler);
app.use((req, res, next) => {
    res.status(404).send("Not Found");
});

app.use(errorHandlers.apiErrorFormatter);

// Server startup
const PORT = process.env.PORT || 4000;

async function startServer() {
    async function init() {
        try {
            await prisma.$connect();
            console.log("✅ Prisma connected to database");
        } catch (error) {
            console.error("❌ Prisma connection error:", error);
            process.exit(1);
        }
    }
    init();

    const server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });
}

startServer();
