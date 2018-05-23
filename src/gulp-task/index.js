const gulpProcessDev = require('./index.dev')
const config = require('./config')

module.exports = {
  dev (div) {
    config.dev.baseDiv = div
    gulpProcessDev(config.dev)
  }
}