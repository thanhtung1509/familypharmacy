module.exports = function (grunt) {
	grunt.registerTask('test', [
    	'clean:server',
    	'bower:app',
    	'replace:test',
    	'concurrent:test',
    	'autoprefixer',
    	'connect:test',
    	'karma'
  	]);
};