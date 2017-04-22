import gulp from "gulp";
import plumber from "gulp-plumber";
import rimraf from 'rimraf';
import PATH from '../../config';

// <!-- ************************************************************
//
// clearn
//
// ************************************************************ -->

gulp.task('clean', (callback)=>{

    rimraf(PATH.release.root, callback);
    
});