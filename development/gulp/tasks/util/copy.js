import gulp from 'gulp';
import PATH from '../../config';

// gulp.task('copy', ()=>{

//     gulp
//       .src(PATH.dev.root + '**/*')
//       // .pipe(gulp.dest('../../../figaro/htdocs/brand-special/tiffany/'));
//       .pipe(gulp.dest('../../../figaro/htdocs/brand-special/tiffany_product/'));

// });

gulp.task('copyResource', ()=>{

    gulp
      .src(PATH.dev.resource + '**/*')
      // .pipe(gulp.dest('../../../figaro/htdocs/brand-special/tiffany/'));
      .pipe(gulp.dest(PATH.release.resource));

});

