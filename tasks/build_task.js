module.exports = function (grunt) {
	grunt.registerTask('build', [
	    'clean:dist',
	    'wiredep',
	    'bower:app',
	    'replace:test',
	    'useminPrepare',
	    'concurrent:dist',
	    'autoprefixer',
	    'concat',
	    'ngAnnotate',
	    'copy:dist',
	    'cdnify',
	    'cssmin',
	    // Below task commented out as r.js (via grunt-contrib-requirejs) will take care of this
	    // 'uglify',
	    'filerev',
	    'usemin',
	    'requirejs:dist',
	    'htmlmin'
  	]);
};