var gulp = require('gulp');

var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');


var paths = {
    js: [
        'js/jquery.eventCalendar.js'
    ]
};

gulp.task('scripts', function () {
    return gulp.src(paths.js)
        .pipe(concat('jquery.eventCalendar.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('deploy', ['scripts']);

gulp.task('default', ['scripts'], function () {
    gulp.watch("js/jquery.eventCalendar.js", ['scripts']);
});
