const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.config.js");

const baseProdConfig = merge(baseConfig, {
  plugins: [
    new MiniCssExtractPlugin({ filename: "bundle.css" })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1, minimize: true } },
          "postcss-loader"
        ],
        exclude: /node_modules/
      }
    ]
  }
});

const prodConfig = merge(baseProdConfig, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});

module.exports = {
  default: prodConfig,
  base: baseProdConfig
};
