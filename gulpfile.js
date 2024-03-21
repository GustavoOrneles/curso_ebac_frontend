const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');
const sassCompiler = require('sass');
const sass = require('gulp-sass')(sassCompiler);
const sourcemaps = require('gulp-sourcemaps');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.watch = function () {
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/styles/main.scss', { ignoreInitial: false }, gulp.series(compilaSass));
}

exports.default = gulp.series(comprimeImagens, comprimeJavaScript, compilaSass, exports.watch);
