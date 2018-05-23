const gulpProcessDev = require('./index.dev')
const path = require('path')
const config = require('./config')

function pathMaker (baseDir, dir) {
  return path.join(baseDir, dir)
}

module.exports = {
  dev (dir) {
    config.dev.baseDir = dir
    Object.keys(config.dev).forEach(key => {
      config.dev[key] = pathMaker(dir, config.dev[key])
    })
    gulpProcessDev(config.dev)
  }
}