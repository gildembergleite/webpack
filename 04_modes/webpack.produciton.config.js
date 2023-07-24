const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle_prod.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  }
}