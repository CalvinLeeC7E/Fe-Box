const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const gulpPostcss = require('gulp-postcss')
const gulpAutoprefixer = require('autoprefixer')
const del = require('del')
const chalk = require('chalk')

function index (config) {
  _print('sass loader start...')
  stdProcess(config)
  watch(config)
}

function watch (config) {
  let watcher = gulp.watch(config.sass)
  watcher.on('change', (event) => {
    stdProcess(config)
  })
}

function _print (mess) {
  let date = new Date()
  let dateTime = [date.getHours(), date.getMinutes(), date.getSeconds()].join(':')
  mess = `[${dateTime}] ${mess}`
  console.log(chalk.cyan(mess))
}

async function stdProcess (config) {
  await delDiv(config)
  sassLoader(config)
}

function delDiv (config) {
  return del(config.outputBaseDir)
}

function sassLoader (config) {
  // sass -> css -> autoprefixer
  gulp.src(config.sass)
    .pipe(gulpSass())
    .pipe(gulpPostcss([gulpAutoprefixer()]))
    .pipe(gulp.dest(config.cssOutput))
  _print('sass rebuild finish!')
}

module.exports = index