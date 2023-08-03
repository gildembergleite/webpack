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
      port: 9001,
      historyApiFallback: true,
      open: true,
      hot: true,
      compress: true,
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:9001',
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
      }),
      new ModuleFederationPlugin({
         name: 'App',
         remotes: {
            HomeApp: 'HomeApp@http://localhost:9002/remoteEntry.js',
            ContactApp: 'ContactApp@http://localhost:9003/remoteEntry.js',
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
