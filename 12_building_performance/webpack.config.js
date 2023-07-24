const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: { 	
    rules: [
      // By excluding the node_modules folder and forwarding only the 
      // directories to be compiled, we increase build performance
      { 
        test: /\.js$/, 
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  optimization: {
    runtimeChunk: true
  }
}