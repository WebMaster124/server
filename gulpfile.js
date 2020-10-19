const gulp = require('gulp');
//const sass = require('gulp-sass');
const concat = require('gulp-concat');
//const cp = require('child_process');

//gulp.task('sass', tfSass);
gulp.task('js', tfJs);
gulp.task('watch', tfWatch);
//gulp.task('build', ['sass', 'js', 'watch']);
gulp.task('default', ['js', 'watch']);

gulp.task('test', function() {
	return cp.exec('wscript gulp-complete-msg.vbs');
});

gulp.task('ionic:watch:before', ['default', 'watch'])

function tfSass() {
	return gulp.src('./scss/app.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./www/css'));
}

function tfJs() {
	return gulp.src('./js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./www/js'));
}
 
function tfWatch() {
	//gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./js/**/*.js', ['js']);
}

//var paths = {
// sass:       ['./scss/app.scss'],
 //html:       ['./www/build/index.html'],
 //templates:  ['./www/js/**/*.html', './www/templates/**/*.html'],
// vendor:     ['./www/lib/ionic/js/ionic.bundle.js'],
// js:         ['./www/js/app.js']
//};

/*gulp.task('build-css', function() {
 console.log('build-css STARTED');
 gulp.src(paths.sass)
   .pipe(sass({errLogToConsole: true}))
   .pipe(gulpif(argv.production, minifyCss({keepSpecialComments: 0})))
   .pipe(gulpif(argv.production, rename({extname: '.min.css'})))
   .pipe(gulp.dest('./www/css/'))
   .on('end', function() {
     console.log('build-css DONE');
   });
});*/

/*gulp.task('build-js', function() {
 console.log('build-js STARTED');
 return browserify(paths.js)
   .bundle()
   .pipe(source('app.bundle.js'))
   .pipe(gulp.dest('./www/js/bundles/'))
   .on('end', function() {
     console.log('build-js DONE');
   });
});*/

/*gulp.task('uglify', function() {
 if (argv.production) {
   console.log('uglify STARTED');
   return gulp.src('./www/js/bundles/app.bundle.js')
     .pipe(uglify())
     .pipe(rename({suffix: '.min'}))
     .pipe(gulp.dest('./www/js/bundles/'))
     .on('end', function() {
       console.log('uglify DONE');
     });
 }
});

gulp.task('build-html', function() {
 console.log('build-html STARTED');
 gulp.src(paths.html)
   .pipe(preprocess({context: {ENVIRONMENT: argv.production ? 'production' : 'development'}}))
   .pipe(gulp.dest('./www/'))
   .on('end', function() {
     console.log('build-html DONE');
   });
});*/