const gulp = require('gulp')
const del = require('del')
const copy = require('gulp-copy')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const ts = require('gulp-typescript')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

function clean() {
	return del('public')
}

function assets() {
	return gulp.src('src/assets/**/*', {
			read: false
		})
		.pipe(copy('.'))
		.pipe(gulp.dest('public'))
}

function styles() {
	return gulp.src('src/sass/**/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed',
			includePaths: 'node_modules/normalize-scss/sass'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/css'))
}

function scripts() {
	return gulp.src('src/ts/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(ts.createProject('tsconfig.json')()).js
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/js'))
}

function watch() {
	gulp.watch('src/sass/**/*.sass', styles)
	gulp.watch('src/ts/**/*.ts', scripts)
	gulp.watch('src/assets/**/*', assets)
}

exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.assets = assets
exports.watch = watch

const build = gulp.series(clean, gulp.parallel(styles, scripts, assets))

gulp.task('build', build)
gulp.task('default', build);