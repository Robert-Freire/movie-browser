// Karma configuration
// Generated on Wed Jun 08 2016 14:12:47 GMT+0200 (W. Europe Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        '*.ts',
        'node_modules/angular-mocks/angular-mocks.js',
        '*.spec.ts',
        '*.js'      
    ],


    // list of files to exclude
    exclude: [ '*config.js', '*conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.ts': ['webpack'],
        '**/*.spec.ts': ['webpack']
    },

    webpack: {
        entry: './index.ts',
        output: {
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        resolveLoader: {
            root: __dirname + '/node_modules'
        },
        plugins: [
        ],
        module: {
            loaders: [
                {test: /\.ts$/, loader: 'ts-loader'}
            ]
        },
        node: {
          fs: "empty"
        }
    },

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        noInfo: true
    },

    node: {
      fs: "empty"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
