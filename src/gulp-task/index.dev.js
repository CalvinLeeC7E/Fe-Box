const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const gulpPostcss = require('gulp-postcss')
const gulpAutoprefixer = require('autoprefixer')
const del = require('del')
const utlis = require('../../utils/index')
let bsHandler = null

function index (config, bs) {
  bsHandler = bs
  utlis.print('Sass loader start...')
  stdProcess(config)
  watch(config)
}

function watch (config) {
  let watcher = gulp.watch(config.sass)
  watcher.on('change', (event) => {
    stdProcess(config)
  })
}

async function stdProcess (config) {
  await delDiv(config)
  sassLoader(config)
}

function delDiv (config) {
  return del(config.outputBaseDir, {force: true})
}

function sassLoader (config) {
  // sass -> css -> autoprefixer
  gulp.src(config.sass)
    .pipe(gulpSass())
    .pipe(gulpPostcss([gulpAutoprefixer()]))
    .pipe(gulp.dest(config.cssOutput))
  utlis.print('Sass rebuild finish!')
  liveload()
}

function liveload () {
  if (bsHandler) bsHandler.reload()
}

module.exports = index