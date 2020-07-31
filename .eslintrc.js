module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        "require-yield": "off",
        "func-names": "off",
        curly: 2,
        camelcase: 2,
        "react/jsx-props-no-spreading": "off",
        "react/button-has-type": 0,
        "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
        "no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: true }],
        "no-use-before-define": "off",
        "react/prop-types": [0, { ignore: ["children"] }],
        "import/prefer-default-export": "off",
        "no-console": "off",
        "react/require-default-props": "off",
        "react/no-unescaped-entities": "off",
        "no-multi-spaces": "off",
        "react/no-array-index-key": "off",
        "no-nested-ternary": 2,
        "prefer-promise-reject-errors": "off",
        "no-underscore-dangle": "off",
        "prettier/prettier": [
            "error",
            {
                semi: false, // semicolon
                singleQuote: false,
                trailingComma: "all",
                printWidth: 120,
                tabWidth: 4,
            },
        ],
        "import/no-named-as-default": "off",
        "import/first": "off",
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
}
