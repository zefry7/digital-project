const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")


module.exports = (env) => {
    return {
        target: "web",
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
            clean: true
        },
        devServer: {
            static: path.resolve(__dirname, "dist"),
            port: 8000,
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/i,
                    use: "ts-loader",
                    exclude: /node_modules/
                }, 
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
                }, 
                {
                    test: /\.(png|jpg|jpeg|svg)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "./img/[name][ext]"
                    }
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "./fonts/[name][ext]"
                    }
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
            new MiniCssExtractPlugin({
                filename: "style.css"
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: "public/img", to: "img"
                    }
                ]
            })
        ],
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx", ".css"]
        }
    }
}