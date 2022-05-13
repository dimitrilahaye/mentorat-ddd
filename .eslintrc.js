module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "@thetribe/eslint-config-typescript",
        "eslint:recommended",
        "prettier",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "google",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["tsconfig.json", "tsconfig.dev.json"],
        sourceType: "module",
    },
    ignorePatterns: [
        "/lib/**/*", // Ignore built files.
        "/*.ts",
        "/*.js",
    ],
    plugins: ["@typescript-eslint", "import"],
    rules: {
        quotes: ["error", "double"],
        "import/no-unresolved": 0,
        "max-classes-per-file": 0,
        "require-jsdoc": 0,
    },
};
