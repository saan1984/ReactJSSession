var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream');

//TASK: transpile
gulp.task('transpile',function() {
	return browserify({
		entries:['./dev/welcome-component.js', './dev/component-render.js'],
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
	return gulp.src(['./dev/demo.html']).pipe(gulp.dest('dist'));
});

//TASK: build
gulp.task('build',['transpile', 'copy']);

gulp.task('watch', ['build'], function() {
	gulp.watch('./**/*.js', ['build']);
});

gulp.task('default', ['watch']);