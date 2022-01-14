// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  // 'rules' to add or remove checks
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "no-var": "error",
    "no-param-reassign": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-debugger": "error",
    "no-alert": "error",
    "prefer-const": "error",
    "no-console": ["error", { allow: ["error"] }],
    semi: ["error", "always"],
    "@next/next/no-img-element": "off"
  },
  globals: {
    GLOBAL: false,
    it: false,
    expect: false,
    describe: false,
    window: true,
    process: true
  }
};
