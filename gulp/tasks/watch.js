var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch', ['lint', 'build'], function() {
    gulp.watch(config.src, config.tasks);
});
