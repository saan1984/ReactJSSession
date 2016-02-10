var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

//TASK: transpile
gulp.task('transpile',function() {
	return browserify({
		entries:['./dev/example1.js', './dev/welcome-component.js'],
		extensions: ['*.js'],
		debug: true
	}).transform('babelify', {
		presets: ['es2015', 'react']
	}).bundle().on('error', function(err) {
		console.error(err); this.emit('end');
	}).pipe(source('bundle.js')).pipe(gulp.dest('dist'));
});
//TASK: copy
gulp.task('copy', function() {
	return gulp.src(['./dev/example1.html']).pipe(gulp.dest('dist'));
});

//TASK: build
gulp.task('build',['transpile', 'copy']);

gulp.task('watch', ['build'], function() {
	gulp.watch('./**/*.js', ['build']);
});

gulp.task('default', ['watch']);