const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    devtool: "source-map",
    mode: "development",

    entry: {
        index: "./src/scripts/index.js",
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: __dirname + "/dist",
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};