const pixel = require('./index')
async function npm(name) {
   let name2 = await pixel.NpmPackage(name)
   return console.log(name2)
  }
npm('pixel-api-wrapper')

async function weather(location) {
    let content = await pixel.Weather(location)
    return console.log(content)
}
weather('USA')

async function github(username) {
    let content = await pixel.Github(username)
    return console.log(content)
}

github('PixelPasta')

async function spongebob(text) {
    let content = await pixel.spongebob(text)
    return console.log(content)
}

spongebob(`Pineapple has rights`)

async function changemymind(text) {
    let content = await pixel.changemymind(text)
    return console.log(content)
}

changemymind(`Pineapple doesn't belong on pizza`)

async function panik(panik1, kalm, panik2) {
    let content = await pixel.panik(panik1, kalm, panik2)
    return console.log(content)
}

panik(`query1`, `query2`, `query3`)

async function abandon(text) {
    let content = await pixel.abandon(text)
    return console.log(content)
}

abandon(`Pineapple has rights`)

async function trash(avatar) {
    let content = await pixel.trash(avatar)
    return console.log(content)
}

trash(`https://cravatar.eu/helmhead/9_cf/68.png`)

async function thisguy(avatar) {
    let content = await pixel.thisguy(avatar)
    return console.log(content)
}

thisguy(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)

async function tweet(avatar, username, text) {
    let content = await pixel.tweet(avatar, username, text)
    return console.log(content)
}

tweet(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`, `WonkyPigs`, `I put pineapple on pizza`)


async function fact() {
    let content = await pixel.fact()
    return console.log(content)
}

fact()

async function joke() {
    let content = await pixel.joke()
    return console.log(content)
}

joke()

async function riddle() {
    let content = await pixel.riddle()
    return console.log(content)
}

riddle()

async function quote() {
    let content = await pixel.quote()
    return console.log(content)
}

quote()

async function emojify(text) {
    let content = await pixel.emojify(text)
    return console.log(content)
}

emojify(`query`)

async function owoify(text) {
    let content = await pixel.owoify(text)
    return console.log(content)
}

owoify(`Hello! How are you?`)

async function cattext() {
    let content = await pixel.cattext()
    return console.log(content)
}

cattext()

async function reverse(text) {
    let content = await pixel.reverse(text)
    return console.log(content)
}

reverse(`Query`)

async function zalgo(text) {
    let content = await pixel.zalgo(text)
    return console.log(content)
}

zalgo(`Query`)

async function chatbot(message, name) {
    let content = await pixel.chatbot(message)
    return console.log(content)
}

chatbot("Hello! How are you? :)")

async function color(hex) {
    let content = await pixel.colorinfo(hex)
    return console.log(content) 
}

color(`5865F2`)

async function youtube(video) {
    let content = await pixel.youtube(video)
    return console.log(content)
} 

youtube(`Wait, you're not done building it?`)

async function spotify(song) {
    let content = await pixel.spotify(song)
    return console.log(content)
}

spotify(`Never gonna give you up`)

async function lyrics(song) {
    let content = await pixel.lyrics(song)
    return console.log(content)
}

lyrics(`Galdive - sorbet`)




async function gay(image) {
    let content = await pixel.gay(image)
    return console.log(content)
}

gay(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)

async function sepia(image) {
    let content = await pixel.sepia(image)
    return console.log(content)
}

sepia(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)

async function stonks(image) {
    let content = await pixel.stonks(image)
    return console.log(content)
}

stonks(`https://cdn.discordapp.com/avatars/652086748167405568/6c5b16281fb7b9c99eca91b5b7d5191f.png`)

async function notstonks(image) {
    let content = await pixel.notstonks(image)
    return console.log(content)
}

notstonks(`https://cdn.discordapp.com/avatars/652086748167405568/6c5b16281fb7b9c99eca91b5b7d5191f.png`)

async function triggered(image) {
    let content = await pixel.triggered(image)
    return console.log(content)
}

triggered(`https://cdn.discordapp.com/avatars/652086748167405568/6c5b16281fb7b9c99eca91b5b7d5191f.png`)

async function advice() {
    let content = await pixel.advice()
    return console.log(content)
}

advice()

async function grayscale(image) {
    let content = await pixel.grayscale(image)
    return console.log(content)
}

grayscale(`https://pixel-api-production.up.railway.app/image/grayscale/?image=https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)

async function eightball() {
    let content = await pixel.eightball()
    return console.log(content['reply'])
}

eightball()

async function wouldyourather() {
    let content = await pixel.wouldyourather()
    return console.log(content)
}

wouldyourather()

async function websitescreenshot(Link) {
    let content = await pixel.websitescreenshot(Link)
    return console.log(content)
}

websitescreenshot(`https://github.com/PixelPasta`)