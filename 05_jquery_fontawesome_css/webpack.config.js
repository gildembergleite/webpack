const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  }, 
  module: { 
    rules: [
      { 
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: 'asset/resource',
      }
    ]
  },
}