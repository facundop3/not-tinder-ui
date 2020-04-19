module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    jest: true,
  },
  rules: {
    "react/jsx-props-no-spreading": ["error", { "custom": "ignore" }],
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
  globals: {
    fetch: false,
  },
};
