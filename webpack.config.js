const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = (env, argv) => {
    return {
        entry: [
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/dev-server",
            "./app/index.js",
            "@babel/polyfill"
        ],
        output: {
            filename: "index.bundle.js",
            path: path.resolve(__dirname, "static/dist")
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ]
                        }
                    }
                },

                {
                    test: /\.css$/,
                    use: [{ loader: "style-loader" }, { loader: "css-loader" }]
                },
                {
                    test: /\.scss$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" },
                        { loader: "sass-loader" }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    loader: "file-loader",
                    query: {
                        name: "[name].[ext]",
                        outputPath: "img/",
                        publicPath: "dist/img"
                    }
                }
            ]
        },
        devServer: {
            hot: true,
            publicPath: "http://localhost:8080/dist/",
            watchContentBase: true,
            contentBase: path.join(__dirname, "static")
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                // Options...
            })
        ]
    };
};
