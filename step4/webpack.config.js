'use strict';  
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var APP = __dirname ;

module.exports = {
    context: APP,
    entry: './index.ts',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts']
    },
    resolveLoader: {
        root: __dirname + '/node_modules'
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
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
};