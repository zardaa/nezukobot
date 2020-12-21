exports.info = (id, ZARDA, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif) => {
	return `*MENU ${ZARDA}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${ZARDA}*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: LEON
║├≽️🛡️ *DESIGNER*: MASLENT
║├≽️🛡️ *YOUTUBE*: MASLENT YT
║├≽️🛡️ *saweria*: https://saweria.co/flickgaming
╠════════════════════
╠════════════════════
║  *${ZARDA}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *WhatsApp <Nomor>*
║│ _${nomer}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${ZARDA}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *NezukoBot*
╚════════════════════`
}
