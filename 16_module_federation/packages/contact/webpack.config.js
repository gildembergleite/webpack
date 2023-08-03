const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   devServer: {
      static: {
         directory: path.join(__dirname, './dist'),
      },
      port: 9003,
      historyApiFallback: true,
      open: true,
      hot: true,
      compress: true,
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:9003',
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
      }),
      new ModuleFederationPlugin({
         name: 'ContactApp',
         filename: 'remoteEntry.js',
         exposes: {
            './ContactPage': './src/Contact',
         },
      }),
   ],
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: require.resolve('babel-loader'),
            options: {
               presets: [require.resolve('@babel/preset-react')],
            },
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
         },
      ],
   },
   resolve: {
      extensions: ['.js', '.jsx', '.json'],
   },
}
