var gulp = require('gulp'),
    bower = require('gulp-bower'),
    browserSync = require('browser-sync').create();


gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest('./dist/bower_components'));
});

gulp.task('copy', function(){
    return gulp.src('./app/**')
        .pipe(gulp.dest('./dist'))
})

gulp.watch("app/**", ['copy']);
gulp.watch("app/**").on('change', browserSync.reload);

gulp.task('serve', ['bower', 'copy'], function () {

    browserSync.init({
        server: "./dist"
    });
});
//gulp.task('default', ['bower', 'icons', 'css']);
gulp.task('default', ['serve']);
