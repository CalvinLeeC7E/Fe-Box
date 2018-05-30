const gulpProcessDev = require('./index.dev')
const gulpProcessPro = require('./index.pro')
const gulpProcessMiniDev = require('./mini-program.dev')
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

function autoReload ({dir, port}) {
  const bs = require('browser-sync').create()
  bs.init({
    server: {
      baseDir: dir,
      directory: true
    },
    startPath: 'src/index.html',
    port: port,
    reloadDelay: 0,
    timestamps: true,
    notify: {
      styles: [
        "margin: 0",
        "padding: 5px",
        "position: fixed",
        "font-size: 10px",
        "z-index: 9999",
        "bottom: 0px",
        "right: 0px",
        "border-radius: 0",
        "border-top-left-radius: 5px",
        "background-color: rgba(60,197,31,0.5)",
        "color: white",
        "text-align: center"
      ]
    }
  })
  return bs
}

module.exports = {
  dev (dir, options) {
    config.dev.baseDir = dir
    converPath(dir, config.dev)
    let bs = autoReload({dir, port: options.port})
    gulpProcessDev(config.dev, bs)
  },
  pro (dir) {
    config.pro.baseDir = dir
    converPath(dir, config.pro)
    gulpProcessPro(config.pro)
  },
  wxssDev (dir) {
    config.wxssDev.baseDir = dir
    converPath(dir, config.wxssDev)
    gulpProcessMiniDev(config.wxssDev)
  }
}