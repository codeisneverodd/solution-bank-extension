const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        background: './src/extensionScripts/background.js',
        content: './src/extensionScripts/content.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: true,
        }),
        new CopyPlugin({
            patterns: [
                { from: "public-assets/manifest.json", to: "manifest.json" },
                { from: "public-assets/assets", to: "assets" },
            ],
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-react", {
                            "runtime": "automatic"
                        }], '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],

    },
};
