var gulp = require('gulp'),
	sass = require('gulp-sass'),
	imagemin = require('gulp-imagemin'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify');

/*
 * Environment
 */

var srcPath = './src',
	distPath = './public/assets',
	paths = {
		src: {
			styles: srcPath + '/styles/',
			scripts: srcPath + '/scripts/',
			images: srcPath + '/images/'
		},
		dist: {
			styles: distPath + '/styles/',
			scripts: distPath + '/scripts/',
			images: distPath + '/images/'
		}
	};

/*
 * Tasks
 */

/* static analysis tool for JavaScript */
gulp.task('jshint', function() {
	gulp.src(paths.src.scripts + "**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

/* uglify javascript */
gulp.task('scripts', ['jshint'], function() {
	gulp.src(paths.src.scripts + "**/*.js")
		//.pipe(uglify())
		.pipe(gulp.dest(paths.dist.scripts));
});

/* compile scss */
gulp.task('styles', function() {
	gulp.src(paths.src.styles + "*.scss")
		.pipe(sass())
		.pipe(gulp.dest(paths.dist.styles));
});

/* minifies the images */
gulp.task('images', function() {
	gulp.src(paths.src.images + "**/*.{gif,jpeg,jpg,png}")
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest(paths.dist.images));
});

/* default task */
gulp.task('default', ['styles', 'images', 'scripts'], function() {
});

/* streaming build */
gulp.task('watch', ['default'], function() {
	gulp.watch(paths.src.styles + '**/*', ['styles']);
	gulp.watch(paths.src.images + '**/*', ['images']);
	gulp.watch(paths.src.scripts + '**/*', ['scripts']);
});