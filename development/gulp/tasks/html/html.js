import gulp from "gulp";
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concat from 'gulp-concat';
import ejs from "gulp-ejs";
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import htmlhint from 'gulp-htmlhint';
import cache from 'gulp-cached';
import ssi from "gulp-ssi";
import fs from "fs";
import PATH from '../../config';

// <!-- ************************************************************
//
// compile
//
// ************************************************************ -->

gulp.task("compileHTML", ()=>{

  // metaData.jsonの読み込み
  var json = PATH.dev.ejs + 'inc/metaData.json';
  var data = JSON.parse(fs.readFileSync(json, 'utf8'));

  gulp.src([PATH.dev.ejs + 'page/**/*.ejs','!' + PATH.dev.ejs + '**/_*.ejs','!' + PATH.dev.ejs + 'page/_src/**/*.ejs'])
      .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
      // .pipe(cache('html_log'))
      .pipe(ejs({data: data}))
      .pipe(rename({extname: '.html'})) //出力ファイル名を指定
      // .pipe(rename({extname: '.php'})) //出力ファイル名を指定
      .pipe(ssi({root: PATH.root + '../../../'}))
      .pipe(htmlhint('/.htmlhintrc')) 
      // .pipe(htmlhint.reporter())
      // .pipe(htmlhint.failReporter())
      .pipe(gulp.dest(PATH.dev.root))

});

// <!-- ************************************************************
//
// minify
//
// ************************************************************ -->

gulp.task("minifyHTML", ()=>{

    gulp.src(PATH.dev.root + '**/*.html')
          .pipe(plumber())
          // .pipe(htmlhint({"tag-pair": true}))
          // .pipe(htmlhint.reporter())
          // .pipe(htmlmin({
          //       collapseWhitespace: true,
          //       removeComments: true
          //   })
          // )
          .pipe(gulp.dest(PATH.release.root));

});
