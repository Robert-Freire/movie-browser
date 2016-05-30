'use strict';  
var webpack = require('webpack');

var APP = __dirname + '/app';

module.exports = {
    context: APP,
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: 'app'
    },
    resolve: {
        extensions: ['', '.ts']
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
};