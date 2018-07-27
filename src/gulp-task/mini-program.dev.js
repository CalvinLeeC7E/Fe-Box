const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const gulpRename = require('gulp-rename')
const utils = require('../../utils/index')
const GulpTools = require('../../utils/gulp-tools')

function index (config) {
  utils.print('Mini-Program Sass loader start...')
  stdProcess(config)
  watch(config)
}

function stdProcess (config) {
  sassLoader(config)
}

function watch (config) {
  let watcher = gulp.watch(config.sass)
  watcher.on('change', (event) => {
    stdProcess(config)
  })
}

function sassLoader (config) {
  // sass -> wxss
  gulp.src(config.sass)
    .pipe(gulpSass.sync().on('error', GulpTools.onError))
    .pipe(gulpRename({
      extname: '.wxss'
    }))
    .pipe(gulp.dest(config.cssOutput))
  utils.print('Mini-Program Sass rebuild finish!')
}

module.exports = index