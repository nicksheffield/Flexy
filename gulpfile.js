var gulp         = require('gulp')                       // the main guy
var rename       = require('gulp-rename')                // rename files in a stream
var beautify     = require('gulp-cssbeautify')           // make files human readable
var minifycss    = require('gulp-minify-css')            // minify css code
var autoprefix   = require('gulp-autoprefixer')          // prefix any css with low support


gulp.task('css', function(){
	// prepare css code
	var stream = gulp.src('./src/flexy.css')               // grab our stylus file
		.pipe(autoprefix('last 2 versions'))             // autoprefix the css code
		.pipe(beautify())                                // make css really readable
		.pipe(gulp.dest('./'))                  // save it into the dist folder
		.pipe(minifycss())                               // minify it
		.pipe(rename('flexy.min.css'))                   // add .min to the filename
		.pipe(gulp.dest('./'))                  // save it into the dist folder
	
	return stream
})

gulp.task('watch', ['css'], function(){
	gulp.watch(['src/flexy.css'], ['css'])      // watch for changes and run the css task
})

gulp.task('default', ['css'])