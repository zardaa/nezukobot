exports.donate = (id, ZARDA, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
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
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${ZARDA}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *NEZUKOBOT*
╚════════════════════`
}

