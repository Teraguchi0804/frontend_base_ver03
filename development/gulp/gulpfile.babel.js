import gulp from 'gulp';
import runSequence from 'run-sequence';
import PATH from './config';
import requireDir from 'require-dir';
requireDir('./tasks',{recurse: true});

//--------------------------------------------------
//
//  watch
//
//--------------------------------------------------

gulp.task('watch', ()=>{
    gulp.watch([PATH.dev.root + '**/*.ejs',PATH.dev.image + '**/*.svg'],['compileHTML']);
    gulp.watch( PATH.dev.scss + '**/*.scss',['compileSCSS']);
    gulp.watch([PATH.dev.devjs + '**/*.js', PATH.dev.devjs + '**/*.es6'],['webpack','eslint']);
    gulp.watch([PATH.dev.devjs + '**/*.frag', PATH.dev.devjs + '**/*.vert'],['webpack']);
    gulp.watch([PATH.dev.root + '**/*.html',PATH.dev.css + '**/*.css',PATH.dev.js + '**/*.js'],['sync']);
});

//--------------------------------------------------
//
//  default
//
//--------------------------------------------------

gulp.task('default', [
                        'watch',
                        'compileHTML','compileSCSS',
                        'concatJSLibs','webpack','eslint',
                        'browserSync'
                    ]);

//--------------------------------------------------
//
//  pucblish
//
//--------------------------------------------------

gulp.task('publish', (callback)=>{

  return runSequence(
    'clean',
    ['compileHTML','compileSCSS','concatJSLibs'],
    // ['minifyHTML','minifyCSS','minifyJS','minifyIMG'],
    ['minifyHTML','minifyCSS','minifyJS'],
    callback
  );
  // return runSequence(
  //   'copy',
  //   callback
  // );

});