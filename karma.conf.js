// Karma configuration
// Generated on Wed Aug 24 2016 20:13:24 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [ 
    
    '../../../js/jquery.js',   
     '../../../js/ezto_ext_api_local.js',
    '../../../js/component/**/*.js',
    '../../../js/component/common/util.js',
    '../../../js/function_local.js',
    '../../../Jasmine/spec/ScaleComponentSpecFile.js',
       
    ],

    // list of files to exclude
    exclude: [
      'no',
      '../../../js/TegrityPlaybackAPI.js',
      '../../../js/bootstrap.js',
      '../../../js/bootstrap.min.js',
      '../../../js/bootstrap_custom.js',
      '../../../js/custom.js'    
       
         
      
    ],
     plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-junit-reporter'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],


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
    browsers: ['PhantomJS'],
    
    junitReporter: {
      outputDir: 'C:/Users/1261660/Desktop/jenikinsreport', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'JunitTEST.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {} // key value pair of properties to add to the <properties> section of the report
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
