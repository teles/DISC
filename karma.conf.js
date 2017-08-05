// Karma configuration
// Generated on Tue Aug 01 2017 01:22:24 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    plugins: [
        "karma-jasmine",
        "karma-phantomjs-launcher",
        "karma-coverage"
    ],

    // list of files / patterns to load in the browser
    files: [
        "./node_modules/angular/angular.js",
        "./node_modules/angular-mocks/angular-mocks.js",
        "./src/js/components/ajax/ajax.module.js",
        "./src/js/components/ajax/ajax.model.js",
        "./src/js/**/*.specs.js"
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "./src/js/**/!(*specs).js": "coverage"
    },


    // optionally, configure the reporter
    coverageReporter: {
        dir: "./coverage",
        reporters: [
            { type: "html", subdir: "html/" },
            { type: "cobertura", subdir: "cobertura/", file: "cobertura.xml"},
            { type: 'lcov', subdir: 'lcov/' }
        ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["coverage"],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    phantomjsLauncher: {
        exitOnResourceError: true
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};