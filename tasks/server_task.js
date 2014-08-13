module.exports = function (grunt) {

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
      if (target === 'dist') {
        return grunt.task.run(['build', 'connect:dist:keepalive']);
      }

      grunt.task.run([
        'clean:server',
        'wiredep',
        'concurrent:server',
        'autoprefixer',
        'connect:livereload',
        'watch'
      ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
      grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
      grunt.task.run(['serve:' + target]);
    });
};