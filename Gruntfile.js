module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        options: {
          bundleOptions: {
            debug: true
          }
        },
        files: {
          'build/my-api.js': ['src/my-api/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);

};