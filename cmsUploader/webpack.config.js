const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require( 'webpack' );
module.exports = {
  module: {
    
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' } ,

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  },devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      MODE_ENV: JSON.stringify('dev'),
      FILE_SAVE_PORT: 8000,
      FILE_SAVE_ADDRESS: JSON.stringify('localhost')
  })
  ],
  
};