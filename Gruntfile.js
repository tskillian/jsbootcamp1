module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      myFiles: ['*.js', 'public/*.js']
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
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['jshint']
    }
  });


  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-bower-install-task');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks
  grunt.registerTask('default', ['jshint','bower_install']);
  grunt.registerTask('test', ['mocha_phantomjs']);

};