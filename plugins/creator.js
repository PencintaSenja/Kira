let handler = function (m) {
  // this.sendContact(m.chat, '6285974577067', 'Devara', m)
  this.sendContact(m.chat, '6285974577067', 'Admin Devara', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
