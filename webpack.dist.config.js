var webpack           = require('webpack');
var config            = require('./webpack.config');
var path              = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


config.output = {
  filename: 'bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'build')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }    
  }),

   new CopyWebpackPlugin([
            { from: '../index.html', to: '../build/index.html' }
   ])
]);

module.exports = config;