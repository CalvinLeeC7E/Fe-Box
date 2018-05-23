#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const gulpProcess = require('../src/gulp-task/index')
const httpServer = require('http-server')

program
  .version('0.1.0')
  .command('css-dev [targetDir]')
  .option('-p, --port <port>', 'use specified port (default: 8080)')
  .option('-h, --host <host>', 'use specified host (default: 0.0.0.0)')
  .action((dir = '.', {host = '0.0.0.0', port = '8080'}) => {
    let server = httpServer.createServer({
      root: dir
    })
    server.listen(port, host, function () {
      console.log(chalk.yellow(`http-server start`))
      console.log(chalk.yellow(`listent on http://${host}:${port}`))
      // start gulp
      gulpProcess.dev(dir)
    })
  })

program.parse(process.argv)