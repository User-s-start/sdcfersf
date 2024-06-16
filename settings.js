require("./module")

global.owner = "6283857564133"
global.ownerStore = "6283857564133"
global.pairingNumber = "6289517657040"
global.namabot = "Rafael Store"
global.namaCreator = "Rafa Store"
global.namaStore = "RafaStore"
global.nodana = "089517657040"
global.nogopay = "083857564133"
global.antilink = false
global.versisc = '1.0.0'
global.namasc = 'Sc Store Rafael'
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.domainotp = "-" // Isi Sendiri
global.apikeyotp = "" // Isi Sendiri
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = "" // Biarin Aja
global.tekspushkonv2 = "" // Biarin Aja
global.tekspushkonv3 = "" // Biarin Aja
global.tekspushkonv4 = "" // Biarin Aja
global.packname = ""
global.author = "Sticker By RafaMods"
global.jumlah = "5"
global.youtube = "https://youtube.com/@RafaHost_" // Isi Sendiri
global.grup = "https://chat.whatsapp.com/L73t0dust3NGj8yIgvDhqb" // Isi Sendiri
global.telegram = "-" // Isi Sendiri
global.instagram = "-" // Isi Sendiri

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})