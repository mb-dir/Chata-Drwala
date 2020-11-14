const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


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
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                loader: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                loader: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './src/pages' },
                { from: './src/assets', to: './assets' },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "okolica-atrakcje.html",
            template: "./src/pages/okolica-atrakcje.html",
        }),
        new HtmlWebpackPlugin({
            filename: "pszczelarstwo.html",
            template: "./src/pages/pszczelarstwo.html",
        }),
        new HtmlWebpackPlugin({
            filename: "galeria.html",
            template: "./src/pages/galeria.html",
        }),
    ],
    devServer: {
        port: 9000,
    }
};