const notifier = require('node-notifier')

function message (mess) {
  if (!mess) return
  notifier.notify(mess)
}

function messWithTitle (title, mess) {
  notifier.notify({
    title: title,
    message: mess
  })
}

module.exports = {
  message,
  messWithTitle
}
