const notifier = require('./notifier')
const gulpSass = require('gulp-sass')

function onError (error) {
  let errorLines = (error.messageFormatted || '').split(/\n/).map(item => item.trim())
  let errorMess = [errorLines[1] || '', errorLines[2] || ''].join('\n')
  notifier.messWithTitle('Error', errorMess)
  gulpSass.logError.call(this, error)
}

module.exports = {
  onError
}