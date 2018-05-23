const gulpProcessDev = require('./index.dev')
const gulpProcessPro = require('./index.pro')
const path = require('path')
const config = require('./config')

function pathMaker (baseDir, dir) {
  return path.join(baseDir, dir)
}

function converPath (basePath, configObj) {
  Object.keys(configObj).forEach(key => {
    configObj[key] = pathMaker(basePath, configObj[key])
  })
}

module.exports = {
  dev (dir) {
    config.dev.baseDir = dir
    converPath(dir, config.dev)
    gulpProcessDev(config.dev)
  },
  pro (dir) {
    config.pro.baseDir = dir
    converPath(dir, config.pro)
    gulpProcessPro(config.pro)
  }
}