import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import prisma from "./prisma/client.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        credentials: true,
    })
);
app.use(helmet());
app.use(morgan("combined"));

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
// app.use("/api/auth", require("./routes/auth.routes"));
// Add more routes here...

// Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// Server startup
const PORT = process.env.PORT || 4000;

async function startServer() {
    async function init() {
        try {
            await prisma.$connect();
            console.log("✅ Prisma connected to database");

            app.listen(3000, () => {
                console.log("Server running on port 3000");
            });
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
