module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      myFiles: ['app.js', './public/contactlist.js']
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['./bower_components/**'], dest: './public'}
        ]
      }
    },
    clean: {
      build: {
        src: ["./bower_components"]
      }
    },
    mocha_phantomjs: {
      all: ['test/TestRunner.html']
    }
  });


  // Load JS Hint
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-bower-install-task');

  // Default tasks
  grunt.registerTask('default', ['jshint','bower_install']);
  grunt.registerTask('test', ['mocha_phantomjs']);

};