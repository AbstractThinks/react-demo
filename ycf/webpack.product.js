
var webpack = require('webpack');
var path = require('path');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app:'./src/app.jsx',
        vendor:['react']
    },
    output: {
        path: __dirname+'/build/',
        // publicPath: '/',
        filename: '/js/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:  ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", 'css!postcss')
            },
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=/asset/[name].[ext]'
            }
        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
                name: ['vendor'],
                minChunks: Infinity,
                filename: '/js/vendor.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
                output: {
                        comments: false,  // remove all comments
                },
                compress: {
                        warnings: false
                }
        }),
        new webpack.DefinePlugin({
                'process.env': {
                        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
        }),
        new ExtractTextPlugin('/style/app.css')
    ]

};
