#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const gulpProcess = require('../src/gulp-task/index')

program
  .version(require('../package.json').version)
  .description('i200 fe-cli')

// css-dev 用来构建开发版css
program
  .command('css-dev [targetDir]')
  .option('-p, --port <port>', 'use specified port (default: 8080)')
  .option('-h, --host <host>', 'use specified host (default: 0.0.0.0)')
  .action((dir = '.', {host = '0.0.0.0', port = '8080'}) => {
    gulpProcess.dev(dir, {host, port})
  })

// css-dist 用来构架生产环境css
program
  .command('css-dist [targetDir]')
  .action((dir = '.') => {
    gulpProcess.pro(dir)
  })

program.parse(process.argv)