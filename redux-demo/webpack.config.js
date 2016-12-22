
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
          './clock/src/app.js'
  ],
  output: {
    path: __dirname + '/build/js/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets:  ['es2015', 'react', 'stage-0']
        }
      }, {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
        },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name='+__dirname+'/build/asset/[name].[ext]'}
    ]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin(__dirname+'/build/style/app.css')
  ]
};
