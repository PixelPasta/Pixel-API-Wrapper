### Thank you for using Pixel API :)

- [Support Server](https://discord.gg/GDbTdhKs9c)
- [Access the API directly](https://pixelpasta.github.io/API.html)


## To install the package - 
```
npm install pixel-api-wrapper
```

# <u> Usage </u>
# Data endpoints
## Npm Package Query -
```js
const pixel = require('pixel-api-wrapper')
async function npm(name) {
   let name2 = await pixel.NpmPackage(name)
   return console.log(name2)
  }
npm('discord.js')
// Returns an object with package details
```
> Example Response:
> 
> {"name":"discord.js","version":"13.6.0","description":"A powerful library for interacting with the Discord API","licence":"Apache-2.0","author":"hydrabolt, crawl, spaceeec"}
## Weather Query - 
```js
const pixel = require('pixel-api-wrapper')
async function weather(location) {
    let content = await pixel.Weather(location)
    return console.log(content)
}
weather('USA')
// Returns an object with weather details
```
> Example Response:
>
> {"info":{"location":"Concord Regional Airport","country":"United States of America","region":"Concord"},"weather":{"temp_c":0,"temp_f":32,"feels_c":-2.2,"feels_f":28,"condition":"Clear",
"icon":"https://cdn.weatherapi.com/weather/64x64/night/113.png"}}
## Github User -
```js
async function github(username) {
    let content = await pixel.Github(username)
    return console.log(content)
}

github('PixelPasta')
//returns an object with user details
```
>Example Response:
>
>{"username":"PixelPasta","avatar_url":"https://avatars.githubusercontent.com/u/80410384?v=4","github_page":"https://github.com/PixelPasta","bio":"I make games and discord bots :)","created_at":"2021-03-10T15:30:47Z"}
## Color Info from hex code - 
```js
async function color(hex) {
    let content = await pixel.colorinfo(hex)
    return console.log(content) 
}

color(`5865F2`)
// returns an image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/data/colorinfo/?hex=5865F2">
## youtube search - 
```js
async function youtube(video) {
    let content = await pixel.youtube(video)
    return console.log(content)
} 

youtube(`Wait, you're not done building it?`)
// returns an object
```
>Example Response
>
>{"title":"\"Wait you're not done building it?\" [Original]","description":"Yes, I am the original creator of this viral video, also I don't care if you repost it just credit it Instagram ...","author":"Nick Aston",
"channel":"https://www.youtube.com/c/NickAston",
"video":"https://youtu.be/qDAd8qkIwsg",
"views":"668,992 views",
"thumbnail":"https://i.ytimg.com/vi/qDAd8qkIwsg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQIb03Gssa-p8naTa3FNq_Qx2uzg",
"thumbail_nsfw_score":0.008482174947857857}
## Spotify search - 
```js
async function spotify(song) {
    let content = await pixel.spotify(song)
    return console.log(content)
}

spotify(`Never gonna give you up`)
// returns an object
```
>Example Response
>
>{
  name: 'Never Gonna Give You Up',
  url: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT',
  explicit: false,
  artists: 'Rick Astley',
  album: {
    album_name: 'Whenever You Need Somebody',
    release_date: '1987-11-12',
    total_tracks: 10,
    external_url: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT',
    images: {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b2735755e164993798e0c9ef7d7a',
      width: 640
    }
  }
}
## Lyrics search - 
```js
async function lyrics(song) {
    let content = await pixel.lyrics(song)
    return console.log(content)
}

lyrics(`Galdive - sorbet`)
// returns an object
```
>Example Response
>
>{
  lyrics: 'Come on Sunday\n' +
    '\n' +
    "It's a bright Monday everybody's going blind\n" +
    'Looking for the weekend honey is a long way drive\n' +
    'Hold on to your sunnies, it is only Tuesday\n' +
    'Maybe time could fly so high\n' +
    'Till you and I meet again for a while\n' +
    '\n' +
    'Come on Sunday\n' +
    "I've been waiting up on that sorbet\n" +
    "Maybe five or six I'll meet you halfway\n" +
    'Take off all your things\n' +
    'Then you and I could be together in this place\n' +
    'Together chasing waves\n' +
    "It's the day for you and I\n" +
    '\n' +
    "It's a busy subway, Wednesday is looking tight\n" +
    'Hello again Thursday, honey is a long way drive\n' +
    "I forget all the highways, pretend today's Friday\n" +
    'Maybe time could fly so high\n' +
    'Till you and I meet again for a while\n' +
    '\n' +
    'Come on Sunday\n' +
    "I've been waiting up on that sorbet\n" +
    "Maybe five or six I'll meet you halfway\n" +
    'Take off all your things\n' +
    'Then you and I could be together in this place\n' +
    'Together chasing waves\n' +
    "It's the day for you and I\n" +
    '\n' +
    'Come on Sunday\n' +
    "I've been waiting up on that sorbet\n" +
    "Maybe five or six I'll meet you halfway\n" +
    'Take off all your things\n' +
    'Then you and I could be together in this place\n' +
    'Together chasing waves\n' +
    "It's the day for you and I"
}
## Translate - 
```js
async function translate(to, from, text) {
    let content = await pixel.translate(to, from, text)
    return console.log(content)
}

translate(`English`, `Japanese`, `Sushi ga oishi desu nee`)
// returns an object
```
>Example Response
>
>{ translated: 'Sushi is delicious' }
# Website Favicon - 
```js
async function favicon(url) {
    let content = await pixel.favicon(url)
    console.log(content)
}

favicon(`pixelpasta.github.io`)
// returns an image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/data/favicon/?url=pixelpasta.github.io">
# Book Information Search - 
```js
async function book(query) {
    let content = await pixel.book(query)
    console.log(content)
}

book(`Re:Zero`)
// returns image url
```
>Example Response
>
>{
  title: 'Re:ZERO -Starting Life in Another World-, Vol. 1 (light novel)',
  authors: [ 'Tappei Nagatsuki' ],
  publisher: 'Yen Press LLC',
  publish_date: '2016-07-19',
  description: "Subaru Natsuki was just trying to get to the convenience store but wound up summoned to another world. He encounters the usual things--life-threatening situations, silver haired beauties, cat fairies--you know, normal stuff. All that would be bad enough, but he's also gained the most inconvenient magical ability of all--time travel, but he's got to die to use it. How do you repay someone who saved your life when all you can do is die?",
  pageCount: 240,
  categories: [ 'Fiction' ],
  cover_image: 'http://books.google.com/books/content?id=UhWzCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
}
## Minecraft Java server information - 
```js
async function minecraftserver(ip) {
    let content = await pixel.minecraftserver(ip)
    console.log(content)
}

minecraftserver(`mc.hypixel.net`)
// returns object
```
>Example Response
>
>{
>version: { name: 'Requires MC 1.8 / 1.18', protocol: 47 },
  players: { online: 49325, max: 200000, sample: [] },
  motd: {
    raw: '§f                §aHypixel Network §c[1.8-1.18]§f\n' +
      '    §e§lEASTER EVENT §7- §b§lMINIGAME, SALE, AND MORE!',
    clean: '                Hypixel Network [1.8-1.18]\n' +
      '    EASTER EVENT - MINIGAME, SALE, AND MORE!',
    html: '<span><span style="color: #FFFFFF;">                </span><span style="color: #55FF55;">Hypixel Network </span><span style="color: #FF5555;">[1.8-1.18]</span><span style="color: #FFFFFF;">\n' +
      '    </span><span style="color: #FFFF55; font-weight: bold;">EASTER EVENT </span><span style="color: #AAAAAA;">- </span><span style="color: #55FFFF; font-weight: bold;">MINIGAME, SALE, AND MORE!</span></span>'
  },
  srvRecord: null,
  roundTripLatency: 52,
  favicon_url: 'https://pixel-api-production.up.railway.app/favicon/mc.hypixel.net'
}
# Meme Endpoints - 
## Spongebob burn - 
```js
async function spongebob(text) {
    let content = await pixel.spongebob(text)
    return console.log(content)
}

spongebob(`Pineapple has rights`)
// returns an image url
```
>Example response
>
><img src="https://pixel-api-production.up.railway.app/image/spongebobburn/?text=Pineapple%20has%20rights">

## Panik - 
```js
async function panik(panik1, kalm, panik2) {
    let content = await pixel.panik(panik1, kalm, panik2)
    return console.log(content)
}

panik(`query1`, `query2`, `query3`)
// returns an image url
```
>Example response
>
><img src="https://pixel-api-production.up.railway.app/image/panik/?panik1=query1&kalm=query2&panik2=query3">
## Change my mind - 
```js
async function changemymind(text) {
    let content = await pixel.changemymind(text)
    return console.log(content)
}

changemymind(`Pineapple doesn't belong on pizza`)
// returns an image url
```
>Example response
>
><img src="https://pixel-api-production.up.railway.app/image/changemymind/?text=Pineapple%20doesn't%20belong%20on%20pizza">
### Abandon -
```js
async function abandon(text) {
    let content = await pixel.abandon(text)
    return console.log(content)
}

abandon(`Pineapple has rights`)
// returns an image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/abandon/?text=Pineapple%20has%20rights">
## Trash -
```js
async function trash(avatar) {
    let content = await pixel.trash(avatar)
    return console.log(content)
}

trash(`https://cravatar.eu/helmhead/9_cf/68.png`)
// returns an image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/trash/?image=https://cravatar.eu/helmhead/9_cf/68.png">
## This Guy - 
```js
async function thisguy(avatar) {
    let content = await pixel.thisguy(avatar)
    return console.log(content)
}

thisguy(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/this-guy/?image=https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png">
## Tweet -
```js
async function tweet(avatar, username, text) {
    let content = await pixel.tweet(avatar, username, text)
    return console.log(content)
}

tweet(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`, `WonkyPigs`, `I put pineapple on pizza`)
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/tweet?username=WonkyPigs&text=I%20put%20pineapple%20on%20pizza&image=https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png">
## Gay - 
```js
async function gay(image) {
    let content = await pixel.gay(image)
    return console.log(content)
}

gay(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/gay/?image=https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png">
## Sepia -
```js
async function sepia(image) {
    let content = await pixel.sepia(image)
    return console.log(content)
}

sepia(`https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/sepia/?image=https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png">
## Stonks - 
```js
async function stonks(image) {
    let content = await pixel.stonks(image)
    return console.log(content)
}

stonks(`https://i.ibb.co/8N4Q2nF/st-small-507x507-pad-600x600-f8f8f8.jpg`)
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/stonks/?image=https://i.ibb.co/8N4Q2nF/st-small-507x507-pad-600x600-f8f8f8.jpg">
## Not Stonks - 
```js
async function notstonks(image) {
    let content = await pixel.notstonks(image)
    return console.log(content)
}

notstonks(`https://i.ibb.co/8N4Q2nF/st-small-507x507-pad-600x600-f8f8f8.jpg`)
```
>Example response
>
><img src="https://pixel-api-production.up.railway.app/image/notstonks/?image=https://i.ibb.co/8N4Q2nF/st-small-507x507-pad-600x600-f8f8f8.jpg">
## Triggered - 
```js
async function triggered(image) {
    let content = await pixel.triggered(image)
    return console.log(content)
}

triggered(`https://i.ibb.co/8N4Q2nF/st-small-507x507-pad-600x600-f8f8f8.jpg`)
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/triggered/?image=https://i.ibb.co/8N4Q2nF/st-small-507x507-pad-600x600-f8f8f8.jpg">
## Grayscale -
```js
async function grayscale(image) {
    let content = await pixel.grayscale(image)
    return console.log(content)
}

grayscale(`https://pixel-api-production.up.railway.app/image/grayscale/?image=https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png`)
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/grayscale/?image=https://pixel-api-production.up.railway.app/image/grayscale/?image=https://cdn.discordapp.com/avatars/728910914149023776/a_8349e9628120cb95c9694acdea8ea5cd.png">
# Pooh - 
```js
async function pooh(toptext, bottomtext) {
    let content = await pixel.pooh(toptext, bottomtext)
    console.log(content)
}

pooh('Windows users making a program to hack NASA', 'Linux users connecting to WiFi')
// returns image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/pooh/?toptext=Windows%20users%20making%20a%20program%20to%20hack%20NASA&bottomtext=Linux%20users%20connecting%20to%20WiFi">
# QR Code - 
```js
async function qrcode(url) {
    let content = await pixel.qrcode(url)
    console.log(content)
}

qrcode(`https://pixelpasta.github.io`)
// returns image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/qrcode/?url=https://pixelpasta.github.io">
# Drake - 
```js
async function drake(top, bottom) {
    let content = await pixel.drake(top, bottom)
    console.log(content)
}

drake(`Query`, `Query2`)
// returns image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/drake/?toptext=Query&bottomtext=Query2">
# Lisa Presentation -
```js
async function lisapresentation(text) {
    let content = await pixel.lisapresentation(text)
    console.log(content)
}

lisapresentation(`Query`)
// returns image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/lisapresentation/?text=Query">
# minecraft achievement - 
```js
async function minecraftachievement(text) {
    let content = await pixel.minecraftachievement(text)
    console.log(content)
}

minecraftachievement(`query`)
// returns image url
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/minecraft/?text=query">
# Minecraft Skin -
```js
async function minecraftskin({username, type}) {
    let content = await pixel.minecraftskin({username, type})
    console.log(content)
}

minecraftskin({username: 'ItsMePixel_', type: 'body'})
// returns image url
// type can be 'head', 'body' or 'avatar'
```
>Example Response
>
><img src="https://pixel-api-production.up.railway.app/image/skin/body/?username=ItsMePixel_">
# Fun Endpoints -
## Fact - 
```js
async function fact() {
    let content = await pixel.fact()
    return console.log(content)
}

fact()
// returns string
```
>Example Response
>
>"It would take approximately twenty-four trees that are on average six to eight inches in diameter to produce one ton of newsprint for the Sunday edition of the New York Times."
## Joke -
```js
async function joke() {
    let content = await pixel.joke()
    return console.log(content)
}

joke()
// returns string
```
>Example Response
>
>"Insanity is defined as doing the same thing over and over again, expecting different results."
## Riddle - 
```js
async function riddle() {
    let content = await pixel.riddle()
    return console.log(content)
}

riddle()
// returns object
```
>Example Response
>
>{"riddle":"What has a thumb and four fingers, but is not a hand?","answer":"Glove"}
## Quote -
```js
async function quote() {
    let content = await pixel.quote()
    return console.log(content)
}

quote()
// returns object
```
>Example Response
>
>{"quote":"Life isn't about finding yourself. Life is about creating yourself.","author":"George Bernard Shaw"}
## Chat Bot - 
```js
async function chatbot(message) {
    let content = await pixel.chatbot(message)
    return console.log(content)
}

chatbot("Hello! How are you? :)")
// returns an object
```
>Example Response
>
>{ message: "Hi, Loyal! Do you want me to tell you a story? I'm fine and excited to talk with you. How are you?"}
## advice - 
```js
async function advice() {
    let content = await pixel.advice()
    return console.log(content)
}

advice()
// returns an object
```
>Example Response
>
>{
  advice: "Never regret. If it's good, it's wonderful. If it's bad, it's experience."
}
## Would you rather - 
```js
async function wouldyourather() {
    let content = await pixel.wouldyourather()
    return console.log(content)
}

wouldyourather()
// returns object
```
>Example Reponse
>
>{
  option_1: { question: 'Always look 8 months pregnant', votes: '116,940' },
  option_2: { question: 'Always have a black eye', votes: '832,609' }
}
## ScreenShot Website
```js
async function websitescreenshot(Link) {
    let content = await pixel.websitescreenshot(Link)
    return console.log(content)
}

websitescreenshot(`https://github.com/PixelPasta`)
// returns image url
```
>Example Response
>
><img src='https://pixel-api-production.up.railway.app/fun/websitescreenshot/?link=https://github.com/PixelPasta'>
# Text Endpoints -
## Emojify - 
```js
async function emojify(text) {
    let content = await pixel.emojify(text)
    return console.log(content)
}

emojify(`query`)
// returns string
```
>Example Response
>
>":regional_indicator_q::regional_indicator_u::regional_indicator_e:
:regional_indicator_r::regional_indicator_y:"
## Owoify - 
```js
async function owoify(text) {
    let content = await pixel.owoify(text)
    return console.log(content)
}

owoify(`Hello! How are you?`)
// returns string
```
>Example Response
>
>"Hewwo owo  how awe you?"
## Cat Text -
```js
async function cattext() {
    let content = await pixel.cattext()
    return console.log(content)
}

cattext()
// returns string
```
>Example Response
>
>"=＾● ⋏ ●＾="
## Reverse - 
```js
async function reverse(text) {
    let content = await pixel.reverse(text)
    return console.log(content)
}

reverse(`query`)
// returns string
```
>Example Response
>
>"yreuq"
## Zalgo - 
```js
async function zalgo(text) {
    let content = await pixel.zalgo(text)
    return console.log(content)
}

zalgo(`Query`)
// returns string
```
>Example Response
>
>"Q̠̜̫͑̓̈́̌͡u̵̴̙̠͔̬̼̍e͓̱̳̎̔̇̀r̫͒ͥͧ̂y̦̾̒̂ͯͧ̀"
>
>⠀
## Encode binary - 
```js
async function encodebinary(text) {
   let content = await pixel.encode(text)
   return console.log(content)
}

encodebinary(`My name is Yoshikage Kira. I'm 33 years old.`)
// returns an object
```
>Example Response
>
>{"encoded":"01001101011110010010000... (I shortened the example response because of npm limitations"}
## Decode binary - 
```js
async function decodebinary(text) {
    let content = await pixel.decode(text)
    return console.log(content)
}

decodebinary("0100110101111001001000000110111001100001011011010110010100100000011010010111001100100000010110010110111101110011011010000110100101101011011000010110011101100101001000000100101101101001011100100110000100101110001000000100100100100111011011010010000000110011001100110010000001111001011001010110000101110010011100110010000001101111011011000110010000101110")
// returns an object
```
>Example Response
>
>{"decoded":"My name is Yoshikage Kira. I'm 33 years old."}
## Mocking Text - 
```js
async function mock(text) {
    let content = await pixel.mock(text)
    console.log(content)
}

mock(`Pineapple belongs on pizza`)
// returns object
```
>Example Response
>
>{"text":"piNEAPpLe beLoNgs oN pIZzA"}

