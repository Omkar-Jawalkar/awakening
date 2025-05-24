module.exports = {
    env: {
        node: true,
        es2022: true,
    },
    extends: [
        "airbnb-base",
        "plugin:node/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "script", // Node uses CommonJS by default
    },
    rules: {
        "node/no-unsupported-features/es-syntax": [
            "error",
            { ignores: ["modules"] },
        ],
        "no-console": "off", // Allowing console logs in Node
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true },
        ],
        "node/no-unpublished-require": "off", // Relax for development
        "no-process-exit": "off", // Allow process.exit()
        "consistent-return": "warn", // Warn instead of error
    },
};
