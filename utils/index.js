const chalk = require('chalk')

function print (mess) {
  let date = new Date()
  let dateTime = [date.getHours(), date.getMinutes(), date.getSeconds()].map(item => item.toString().padStart(2, 0)).join(':')
  mess = `[${dateTime}] ${mess}`
  console.log(chalk.cyan(mess))
}

module.exports = {
  print
}
