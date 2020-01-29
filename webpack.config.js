const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const SRC_DIR = path.resolve('src');
module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', SRC_DIR],
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        `${SRC_DIR}/index.js`,
    ],
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        })
    ]
};