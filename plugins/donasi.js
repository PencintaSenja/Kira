let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl [085974577067]
│ • Gopay [085974577067]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285974577067
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa xl"
3.)Dan terus masukkan nomor kami 085974577067
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
