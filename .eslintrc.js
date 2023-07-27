module.exports = {
"extends": [
    "plugin:react/recommended",
    'airbnb',
    'airbnb-typescript',
],
"parser": "@typescript-eslint/parser",
"parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    project: "./tsconfig.json"
},
"plugins": [
    "react",
    "@typescript-eslint"
],
}
