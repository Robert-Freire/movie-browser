// 'use strict';  
// var webpack = require('webpack'),  
// path = require('path');

// var APP = __dirname + '/app';

// module.exports = {  
//     context: APP,
//     entry: {
//         app: ['webpack/hot/dev-server', './movies.js']
//     },
//     plugins: [  
// 	    new webpack.HotModuleReplacementPlugin()
// 	],
//     output: {
//         path: APP,
//         filename: 'bundle.js'
//     }
// };


'use strict';  
var webpack = require('webpack');

//    path = require('path');

var APP = __dirname + '/app';

module.exports = {
    context: APP,
    entry: './app.module.ts',
    output: {
        filename: './bundle.js'
    },

    // Turn on sourcemaps
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    // // Add minification
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ],

    module: {
        loaders: [
//            { test: /\.ts$/, loader: 'ts-loader'}
            { test: /\.ts$/, loader: 'webpack-typescript?target=ES5'}
        ]
    }
}