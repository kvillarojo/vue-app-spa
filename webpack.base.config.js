const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  devServer: {
    inline: false
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  },
  mode: 'development',
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: 'css-loader',
          'scss': 'css-loader|sass-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
