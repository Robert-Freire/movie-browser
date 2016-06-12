'use strict';  
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

var APP = path.join(__dirname, '/app'); ;

module.exports = {
    context: APP,
    entry: './index.ts',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    resolveLoader: {
        root: path.join(__dirname, '/node_modules')
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8082,
            proxy: 'http://localhost:8080/'
        })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};