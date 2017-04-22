import gulp from "gulp";
import sass from "gulp-sass";
import minifyCSS from 'gulp-minify-css';
import sourcemaps from 'gulp-sourcemaps';
import csscomb from 'gulp-csscomb';
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import styledocco from 'gulp-styledocco';
import autoprefixer from "gulp-autoprefixer";
import scsslint from 'gulp-scss-lint';
import cache from 'gulp-cached';
import remember from 'gulp-remember';
import sassGlob from 'gulp-sass-glob';
import PATH from '../../config';

// <!-- ************************************************************
//
// complile
//
// ************************************************************ -->

gulp.task("compileSCSS", ()=>{

    gulp.src([PATH.dev.scss + '**/*.scss','!' + PATH.dev.scss + '**/!*.scss'])
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        // .pipe(cache('css_log'))
        // .pipe(scsslint({'maxBuffer': 100000,'config':'.scsslint.yml'}))
        // .pipe(scsslint.failReporter())
        .pipe(sassGlob())
        .pipe(sass({outputStyle : 'expanded'}))
        // .pipe(autoprefixer('last 2 version'))
        .pipe(autoprefixer({browsers: ['last 3 versions','iOS 7'],cascade: true}))
        .pipe(csscomb())
        .pipe(gulp.dest(PATH.dev.css));

});

// <!-- ************************************************************
//
// minify
//
// ************************************************************ -->

gulp.task("minifyCSS", ()=>{

    gulp.src(PATH.dev.css + '**/*.css')
      .pipe(plumber())
      .pipe(minifyCSS())
      .pipe(gulp.dest(PATH.release.css));

});

// <!-- ************************************************************
//
// styleguide
//
// ************************************************************ -->

gulp.task("styleguide", ()=>{

    return sass(PATH.dev.scss, { 
            style: 'expanded',
            compass : true,
            sourcemap: true
        })
        .pipe(plumber())
        .pipe(gulp.dest('./styleguide'))
        .pipe(styledocco({
            out: './styleguide',
            name: 'My Project',
            'no-minify': true
        }))
});
