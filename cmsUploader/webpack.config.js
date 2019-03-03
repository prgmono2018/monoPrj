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
    /*  {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000' },*/
        {
          test: /\.(pdf|jpg|png|gif|svg|ico)$/,
          use: [
              {
                  loader: 'url-loader'
              },
          ]
      },
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