
var webpack = require('webpack');
var path = require('path');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './src/app.jsx'
    ],
    output: {
        path: __dirname+'/build/',
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
                loader: ExtractTextPlugin.extract("style", 'css!sass')
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
        new ExtractTextPlugin('/style/app.css')
        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: 3000,
        //     files: '',
        //     server: {
        //         //指定服务器启动根目录
        //         baseDir: './'
        //     }
        // })
    ]

};
