/**
 * Handle 404 Not Found errors for API routes
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const apiNotFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found",
        error: {
            code: 404,
            details: `The requested API endpoint '${req.originalUrl}' does not exist`,
            timestamp: new Date().toISOString(),
        },
    });
};

/**
 * Format other errors consistently
 */
const apiErrorFormatter = (err, req, res, next) => {
    // If headers are already sent, delegate to default handler
    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || 500;
    const errorResponse = {
        success: false,
        message: err.message || "Internal server error",
        error: {
            code: statusCode,
            details: err.details || undefined,
            stack:
                process.env.NODE_ENV === "development" ? err.stack : undefined,
            timestamp: new Date().toISOString(),
        },
    };

    res.status(statusCode).json(errorResponse);
};

export default {
    apiNotFoundHandler,
    apiErrorFormatter,
};
