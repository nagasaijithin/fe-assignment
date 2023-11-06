const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
require("babel-register");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
  },
};
