exports.info = (id, NezukoBot, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${NezukoBot}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${NezukoBot}*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: ZARDA
║├≽️🛡️ *DESIGNER*: NEZUKOBOT
╠════════════════════
╠════════════════════
║  *${NezukoBot}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${NezukoBot}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY NezukoBot*
╚════════════════════`
}
