const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader','eslint-loader']
        },
        { test: /\.css$/, loader: 'style-loader!css-loader' } 
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template:  path.resolve('./index.html'),
      }),
      
    ]
  };