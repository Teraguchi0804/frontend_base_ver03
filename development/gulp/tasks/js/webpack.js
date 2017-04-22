import gulp from "gulp";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import es2015 from 'babel-preset-es2015';
import webpack from 'webpack-stream';
// import webpack from 'gulp-webpack';
import sourcemaps from "gulp-sourcemaps";
import PATH from '../../config';

gulp.task('webpack', ()=>{

	gulp
	// .src(PATH.dev.devjs + 'src/es6/main.js')
			.src(PATH.dev.devjs + 'src/**/*.js')
			.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
			.pipe(webpack(require('../../webpack.config.js')))
			.pipe(gulp.dest(PATH.dev.js));

	// gulp
	//   .src(PATH.dev.devjs + 'src/**/*.js')
	//   .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	//   .pipe(webpack(require('../../webpackCommon.config.js')))
	//   .pipe(gulp.dest(PATH.dev.js + 'common/'));

});


// gulp.src(config.webpack.src)

//   .pipe(webpack({entry: config.webpack.entry, output: config.webpack.output}))
//   .pipe(gulpif(config.js.uglify, uglify()))
//   .pipe(gulp.dest(config.js.dest));

// });
