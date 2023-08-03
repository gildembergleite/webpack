const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   devServer: {
      static: {
         directory: path.join(__dirname, './dist'),
      },
      port: 9002,
      historyApiFallback: true,
      open: true,
      hot: true,
      compress: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
      }),
      new ModuleFederationPlugin({
         name: 'HomeApp',
         filename: 'remoteEntry.js',
         exposes: {
            './Home': './src/Home',
         },
         shared: {
            react: {
               singleton: true,
               eager: true,
               requiredVersion: false,
            },
            'react-dom': {
               singleton: true,
               eager: true,
               requiredVersion: false,
            },
         },
      }),
   ],
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
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
   target: 'web',
}
