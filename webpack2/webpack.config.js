'use strict';
var path = require('path');
var precss       = require('precss');  //Precss 可以在 CSS 文件中使用 Sass 类型的 Markup
var autoprefixer = require('autoprefixer'); //根据 Can I use 的 数据，按需给无前缀代码自动加厂商前缀。
// var cssnext = require('cssnext'); //CSS 的转译器（transpiler），根据目前仍处于草案阶段、未被浏览器实现的标准把代码转译成符合目前浏览器实现的 CSS
// var cssnano = require('cssnano'); //使用 cssnano 执行各种优化，删除空白和注释，并且压缩代码
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var webpack = require('webpack');


const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
var plugins = [
      new webpack.LoaderOptionsPlugin({
              options: {
                      postcss: function () {
                              return [precss, autoprefixer,cssnext,cssnano];
                        //        return [precss, autoprefixer];
                      }
              }
      }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "commons",
    filename: "commons.js",
    minChunks: 2,
  }),
  new ExtractTextPlugin({
    filename: "[name].bundle.css",
    allChunks: true
  })
]
if (isProd) {
        plugins.push(
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
                compress: {
                  warnings: false,
                  screw_ie8: true,
                  conditionals: true,
                  unused: true,
                  comparisons: true,
                  sequences: true,
                  dead_code: true,
                  evaluate: true,
                  if_return: true,
                  join_vars: true,
                },
                output: {
                  comments: false
                }
        }))
} else {
        plugins.push(new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: '',
            server: {
                //指定服务器启动根目录
                baseDir: './'
            }
        }))

}
module.exports = {
  devtool:isProd ? 'source-map' : 'eval',    //不能和UglifyJsPlugin插件一起用，会引起报错
  context: __dirname + "/src",
  entry: {
    app: "./app.jsx",
    vendor: ['react']
  },
  // 多个文件打包成一个文件
  // entry: {
  //   app: ["./home.js", "./events.js", "./vendor.js"],
  // },
  //多个文件多个输出
  // entry: {
  //   home: "./home.js",
  //   events: "./events.js",
  //   contact: "./contact.js",
  // },
  //输出多个文件
  // output: {
  //   path: __dirname + "/dist",
  //   filename: "[name].bundle.js",
  // }
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },

  resolve: {
      // modules: [path.resolve(__dirname, "src"), "node_modules"],    预期查找模块顺序
       extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx']
  },
  module: {
          rules:[
                  {
                          test: /\.jsx?$/,
                          loader: 'babel-loader',
                          exclude: /node_modules/,
                          query: {
                              presets:  ['es2015', 'react', 'stage-0']
                          }
                  },
                  {
                      test: /\.scss$/,
                      loader:  ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader?sourceMap' })
                  },
                  {
                      test: /\.css$/,
                      loader:  ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader?sourceMap' })
                  },

                  {
                      test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=/asset/[name].[ext]'
                  }
          ]
  },
plugins:plugins
};
