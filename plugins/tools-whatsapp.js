const moment = require('moment-timezone');
const PhoneNum = require('awesome-phonenumber');
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

const handler = async (m, { conn, text, usedPrefix, command: cmd }) => {
  let num = m.quoted?.sender || m.mentionedJid?.[0] || text;
  if (!num) throw `*example*: @tag / 628xxx`;
  num = num.replace(/\D/g, '') + '@s.whatsapp.net';
  if (!(await conn.onWhatsApp(num))[0]?.exists) throw 'User not exists';
  let img = await conn.profilePictureUrl(num, 'image').catch(_ => 'https://telegra.ph/file/34d343582a1cf8f830a28.jpg');
  let bio = await conn.fetchStatus(num).catch(_ => {});
  let name = await conn.getName(num);
  let business = await conn.getBusinessProfile(num);
  let format = PhoneNum(`+${num.split('@')[0]}`);
  let country = regionNames.of(format.getRegionCode('international'));
  let wea = `• *Whatsapp*\n\n• *Country :* ${country.toUpperCase()}\n*• Name :* ${name ? name : '-'}\n*• Format Number :* ${format.getNumber('international')}\n*• Url Api :* wa.me/${num.split('@')[0]}\n*• Mentions :* @${num.split('@')[0]}\n*• Status :* ${bio?.status || '-'}\n*• Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t• *Info Bussines*\n\n• BusinessId :* ${business.wid}\n*• Website :* ${business.website ? business.website : '-'}\n*• Email :* ${business.email ? business.email : '-'}\n*• Category :* ${business.category}\n*• Address :* ${business.address ? business.address : '-'}\n*• Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*• Description* : ${business.description ? business.description : '-'}` : 'Standard WhatsApp Account'}`;
  if (img) {
    await conn.sendMessage(m.chat, {
      image: { url: img },
      caption: wea,
      mentions: [num]
    }, { quoted: m });
  } else {
    m.reply(wea);
  }
};

handler.help = ['stalkwa ⧼@user/number⧽'];
handler.tags = ['tools'];
handler.command = /^(stalkwa|wastalk)$/i;
handler.limit = true;

module.exports = handler;