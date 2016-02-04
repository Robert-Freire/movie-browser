'use strict';  
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
//    path = require('path');

var APP = __dirname; // + '/app';

module.exports = {
    context: APP,
    entry: './app/index.ts',
    output: {
        filename: 'bundle.js',
        path: 'dist'
    },

    // Turn on sourcemaps
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },

    plugins: [
        // Adds minification
        // new webpack.optimize.UglifyJsPlugin(),

        // copies/generates the index.html file to the dist folder
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        })
    ],

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.html$/, exclude: /node_modules/, loader: 'raw' }
        ]
    }
}