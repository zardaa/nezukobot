exports.donate = (id, ZARDA, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${ZARDA}*
╠════════════════════
║├≽️⚜ *OVO*: 082397075810
║├≽️⚜ *PULSA*: 082397075810
║├≽️⚜ *GOPAY*: 082397075810
╠════════════════════
║  *${ZARDA}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│ *Group WhatsApp*
║│ _${groupwa}_
║│ *Instagram <Follow>*
║│ _${instagram}_
║│ *Creator ${ZARDA}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *NezukoBot*
╚════════════════════`
}

