let fs = require('fs') 
let chalk = require('chalk')

  // OWNER
owner = [
['6281283516246', 'Maximus Store', true]
]

  // MODERATOR
mods = ['6281283516246'] 

  // PREMIUM USERS
prems = ['6281283516246']

  // APIKEYS
global.lann = 'apikeylu'
global.btc = 'apikeylu'
global.rose = 'apikeylu'

  // name: 'https://website'
global.APIs = {
  neoxr: 'https://api.neoxr.eu.org/',
  lol: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.life',
  TioXD: 'https://api.botcahx.biz.id',
  lann: 'https://api.betabotz.org',
} 

  // 'https://website': 'APIKEY'
global.APIKeys = {
  'https://api.neoxr.eu.org/': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://api.botcahx.live': 'apikeylu',
  'https://api.itsrose.life': 'apikeylu',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'sᴛɪᴄᴋᴇʀ ʙʏ'
  var sticker_author = '𝙰𝚁𝙲𝙷𝙸𝙽𝙾 © 2024'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// ALL GLOBAL
global.nameown = 'Maximus Store'
global.nomorown = '6281283516246'
global.namebot = '𝙰𝚁𝙲𝙷𝙸𝙽𝙾'
global.waown = 'wa.me/6281283516246'
global.mail = 'maximusstoreindonesia@gmail.com'
global.fb = 'https://facebook.com/maximusstoreindonesia'
global.ig = 'https://instagram.com/maximusstore.id'
global.gcbot = 'https://chat.whatsapp.com/LZCnnSQFPkF3C6zrDcH5n8'
global.wait = '*𝙰𝚁𝙲𝙷𝙸𝙽𝙾 processing...*'
global.eror = '*𝙰𝚁𝙲𝙷𝙸𝙽𝙾 system Failed*'
global.maxwarn = '2'
global.packname = sticker_name
global.author = sticker_author
global.qris = 'https://telegra.ph/file/f11ccd2ca8a5136aacfb3.jpg'
global.thum = 'https://telegra.ph/file/d2a75a5994bca85298e18.jpg'
global.datang = 'https://telegra.ph/file/526f7d8379c827725c659.jpg'
global.pergi = 'https://telegra.ph/file/61933c2746e61504de340.jpg'
global.wm = '© 𝙰𝚁𝙲𝙷𝙸𝙽𝙾 💕'
global.pricelist = '*LIMIT* kamu habis. kamu bisa order akses premium\n\n*PREMIUM USER PRICE LIST*\n\n*3 Day premium*\n- Harga: Rp. 5.000 IDR\n- ID Pesanan: 3day\n\n*7 Day premium*\n- Harga: Rp. 10.000 IDR\n- ID Pesanan: 7day\n\n*30 Day premium*\n- Harga: Rp. 15.000 IDR\n- ID Pesanan: 30day\n\n*60 Day premium*\n- Harga: Rp. 30.000 IDR\n- ID Pesanan: 60day\n\n\n*Example:* .premium <ID Pembayaran>\n*Example:* .premium 30day'

Intervalmsg = 1800 //detik
multiplier = 1000 // The higher, The harder levelup

rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
