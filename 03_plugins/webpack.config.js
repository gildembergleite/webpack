const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const DotenvPlugin = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[main]_[contenthash].js',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[style]_[contenthash].css',
      // clean: true,
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('1.1.0'),
      PORT: JSON.stringify('8080'),
    }),
    new DotenvPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    ],
  },
}
