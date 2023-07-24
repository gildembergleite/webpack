const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    shared: 'lodash',
    main: {
      import: './src/main.js',
      dependOn: 'shared',
    },
    test: {
      import: './src/test.js',
      dependOn: 'shared',
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash', // Shimming
    })
  ]
}
