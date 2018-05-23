const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const gulpPostcss = require('gulp-postcss')
const gulpAutoprefixer = require('autoprefixer')
const gulpCleanCss = require('gulp-clean-css')
const del = require('del')
const utils = require('../../utils/index')

function index (config) {
  utils.print('CSS dist start...')
  stdProcess(config)
  utils.print('CSS dist finish!')
}

async function stdProcess (config) {
  await delDiv(config)
  sassLoader(config)
}

function delDiv (config) {
  return del(config.outputBaseDir, {force: true})
}

function sassLoader (config) {
  // sass -> css -> autoprefixer -> mini
  gulp.src(config.sass)
    .pipe(gulpSass())
    .pipe(gulpPostcss([gulpAutoprefixer()]))
    .pipe(gulpCleanCss())
    .pipe(gulp.dest(config.cssOutput))
}

module.exports = index