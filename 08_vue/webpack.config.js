const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const PROJECT_PATH = __dirname.replace(/\\/g, '/')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    require('unplugin-auto-import/webpack')({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        'vue',
        {
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRoute',
            'useRouter',
          ],
        },
      ],
      dts: PROJECT_PATH + '/config/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: PROJECT_PATH + '/config/.eslintrc-auto-import.json',
      },
    }),
    new MiniCssExtractPlugin({}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      Vue: 'vue/dist/vue.runtime.esm.js',
    },
    extensions: ['.*', '.js', '.vue', '.json'],
  },
}
