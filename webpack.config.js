// Imports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
require("@babel/register");
// Webpack Configuration
const config = {
  // Entry
  entry: path.join(__dirname, './client/src/index.js'),
  
  // Output
  output: {
    path: path.resolve(__dirname, './client/src/dist'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/src/index.html'),
      filename: 'index.html',
      hash: true
    })
  ],
  // OPTIONAL
  // Reload On File Change
  watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './client/src/dist'),
    compress: true,
    port: 9091
  }
};
// Exports
module.exports = config;