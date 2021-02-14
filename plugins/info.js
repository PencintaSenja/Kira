let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick
Kalau cuman bisa marah marah mending bikin bot sendiri

Rec: Devara
Github: 
https://github.com/PencintaSenja

*Sosmed :*
Instagram: @firdausss.31
➥ YouTube:
youtube.com/Devara

*Thanks To :*
Antilag
Ainch
Rapli and pren
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0859-7457-7067
║>Request? Wa.me/6285974577067
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

