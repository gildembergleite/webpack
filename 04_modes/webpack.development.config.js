const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    compress: true,
    port: 8000,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  output: {
    filename: 'bundle_dev.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  plugins: [
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Webpack Modes'
    })
  ]
}