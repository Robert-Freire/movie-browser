'use strict';  
var webpack = require('webpack');

//    path = require('path');

var APP = __dirname; // + '/app';

module.exports = {
    context: APP,
    entry: './out/index.js',
    output: {
        filename: './app/bundle.js'
    },

    // Turn on sourcemaps
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },

    // // Add minification
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ],

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
}