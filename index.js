const { links } = require('express/lib/response')
const fetch = require('node-fetch')

exports.NpmPackage = async function(name) {
     if (!name) {
         return {error: "No Name Provided!"}
     }
     else {
         let content = await fetch(`https://pixel-api-production.up.railway.app/data/npm/?name=${name}`)
        content = await content.json()
         return content
     }
  }

exports.Weather = async function(location) {
    if (!location) {
        return {error: "No Location provided"}
    }
    else {
        let content = await fetch(`https://pixel-api-production.up.railway.app/data/weather/?location=${location}`)
      
        content = await content.json()
        if (content.error) {
            return content
        }
        else {
            return content
        }
         
    }
}

exports.Github = async function(username) {
    if (!username) {
        return {error: "No User Provided"}
    }
    else {
        let content = await fetch(`https://pixel-api-production.up.railway.app/data/github-user/?username=${username}`)
        content = await content.json()
        return content
    }
}

exports.spongebob = async function(text) {
    if (!text) {
        return {error: "No text provided"}
    }
    else {
        text = text.replace(/\s/g, '%20')
        return `https://pixel-api-production.up.railway.app/image/spongebobburn/?text=${text}`
    }
}

exports.changemymind = async function(text) {
    if (!text) {
        return {error: "No Text Provided"}
    }
    else {
        text = text.replace(/\s/g, '%20')
        return `https://pixel-api-production.up.railway.app/image/changemymind/?text=${text}`
    }
}

exports.panik = async function(panik1, kalm, panik2) {
    if (!panik1) {
        return {error: "No Top Text Provided"}
    }
    if (!panik2) {
        return {error: "No Top Text Provided"}
    }
    if (!kalm) {
        return {error: "No Middle Text Provided"}
    }
    else {
        panik1 = panik1.replace(/\s/g, '%20')
        panik2 = panik2.replace(/\s/g, '%20')
        kalm = kalm.replace(/\s/g, '%20')
        return `https://pixel-api-production.up.railway.app/image/panik/?panik1=${panik1}&kalm=${kalm}&panik2=${panik2}`
    }
}

exports.abandon = async function(text) {
    if (!text) {
        return {error: "No Text Provided"}
    }
    else {
        text = text.replace(/\s/g,'%20')
        return `https://pixel-api-production.up.railway.app/image/abandon/?text=${text}`
    }
}

exports.trash = async function(avatar) {
    if (!avatar) {
        return {error: "No Image Provided"}
    }
    else {
        return `https://pixel-api-production.up.railway.app/image/trash/?image=${avatar}`
    }
}

exports.thisguy = async function(avatar) {
    if (!avatar) {
        return {error: "No image Provided"}
    }
    else {
        return `https://pixel-api-production.up.railway.app/image/this-guy/?image=${avatar}`
    }
}

exports.tweet = async function(avatar, username, text) {
    if (!avatar) {
        return {error: "No Image Provided"}
    }
    if (!username) {
        return {error: "No username Provided"}
    }
    if (!text) {
        return {error: "No Text Provided"}
    }
    else {
        text = text.replace(/\s/g,'%20')
        username = username.replace(/\s/g,'%20')
        return `https://pixel-api-production.up.railway.app/image/tweet?username=${username}&text=${text}&image=${avatar}`
    }
}

exports.fact = async function() {
    let content = await fetch(`https://pixel-api-production.up.railway.app/fact`)
    content = await content.json()
    return content.fact
}

exports.joke = async function() {
    let content = await fetch(`https://pixel-api-production.up.railway.app/fun/joke`)
    content = await content.json()
    return content.joke
}

exports.riddle = async function() {
    let content = await fetch(`https://pixel-api-production.up.railway.app/fun/riddle`)
    content = await content.json()
    return {
        riddle: content.riddle,
        answer: content.answer
    }
}

exports.quote = async function() {
    let content = await fetch(`https://pixel-api-production.up.railway.app/fun/quote`)
    content = await content.json()
    return {
        quote: content.quote,
        author: content.author
    }
}

exports.emojify = async function(text) {
    if (!text) {
        return {error: "No Text Provided"}
    }
    else {
        text = text.replace(/\s/g, "%20")
        let content = await fetch(`https://pixel-api-production.up.railway.app/text/emojify/?text=${text}`) 
        content = await content.json()
        return content.emojified
    }
}

exports.owoify = async function(text) {
    if (!text) {
        return {error: "No text Provided"}
    }
    else {
        text  = text.replace(/\s/g, "%20")
        let content = await fetch(`https://pixel-api-production.up.railway.app/text/owoify/?text=${text}`)
        content = await content.json()
        return content.text
    }
} 

exports.cattext = async function() {
    let content = await fetch(`https://pixel-api-production.up.railway.app/text/cat-text`)
    content = await content.json()
    return content.text
}

exports.reverse = async function(text) {
   if (!text) {
       return {error: "No Text Provided"}
   }
   else {
       text = text.replace(/\s/g, "%20")
       let content = await fetch(`https://pixel-api-production.up.railway.app/text/reverse/?text=${text}`)
       content = await content.json()
       return content.text
    }
}

exports.zalgo = async function(text) {
    if (!text) {
        return {error: "No Text Provided"}
    }
    else {
        text = text.replace(/\s/g, "%20")
        let content = await fetch(`https://pixel-api-production.up.railway.app/text/zalgo?text=${text}`)
        content = await content.json()
        
        return content.zalgo
    }
}

exports.chatbot = async function(message) {
    if (!message) {
        return {error: "No Message Provided"}
    }
    let content = await fetch(`https://pixel-api-production.up.railway.app/fun/chatbot/?message=${message}`)
    content = await content.json()
    return { message: content.message}
}

exports.colorinfo = async function(hex) {
    if (!hex) {
        return {error: "no hex code provided"}
    }
return `https://pixel-api-production.up.railway.app/data/colorinfo/?hex=${hex.replaceAll("#", "")}`
}

exports.youtube = async function(video) {
    if (!video) {
        return {error: "no video provided"}
    }
 let content = await fetch(`https://pixel-api-production.up.railway.app/data/youtube/?video=${video.replaceAll(" ", "%20")}`)
 content = await content.json()
 return {
     title: content.title,
     description: content.description,
     author: content.author,
     channel: content.channel,
     video: content.video,
     views: content.views,
     thumbnail: content.thumbnail,
     thumbnail_nsfw_score: content.thumbail_nsfw_score
 }
}

exports.spotify = async function(song) {
    if (!song) {
        return {error: "No Song Provided"}
    }
    let content = await fetch(`https://pixel-api-production.up.railway.app/data/spotify/?search=B${song.replaceAll(" ", "%20")}`)
    content = await content.json()
    return content
 }

exports.lyrics = async function(song) {
     if (!song) {
         return {error: "No Song Provided"}
     }
     let content = await fetch(`https://pixel-api-production.up.railway.app/data/lyrics/?song=${song}`)
     content = await content.json()
     return content
}

exports.encode = async function(text) {
    if (!text) {
        return {error: "No Text Provided"}
    }
    let content = await fetch(`https://pixel-api-production.up.railway.app/text/encode-binary?text=${text}`)
    content = await content.json()
    return content
}

exports.decode = async function(text) {
    if (!text) {
        return {error: "No Text Provided"}
    }
    let content = await fetch(`https://pixel-api-production.up.railway.app/text/decode-binary?text=${text}`)
    content = await content.json()
    return content
}

exports.gay = async function(image) {
    if (!image) {
        return {error: "No Image Provided"}
    }
    return `https://pixel-api-production.up.railway.app/image/gay/?image=${image}`
}

exports.sepia = async function(image) {
    if (!image) {
        return {error: "No Image Provided"}
    }
    return `https://pixel-api-production.up.railway.app/image/sepia/?image=${image}`
}

exports.stonks = async function(image) {
    if (!image) {
        return {error: "No Image Provided"}
    }
    return `https://pixel-api-production.up.railway.app/image/stonks/?image=${image}`
}

exports.notstonks = async function(image) {
    if (!image) {
        return {error: "No Image Provided"}
    }
    return `https://pixel-api-production.up.railway.app/image/notstonks/?image=${image}`
}

exports.triggered = async function(image) {
    if (!image) {
        return {error: "No Image Provided"}
    }
    return `https://pixel-api-production.up.railway.app/image/triggered/?image=${image}`
}

exports.advice = async function() {
   let content = await fetch(`https://pixel-api-production.up.railway.app/fun/advice`)
   content = await content.json()
  
   return content
}

exports.grayscale = async function(image) {
    if (!image) {
        return {error: "No Image Provided"}
    }
    return `https://pixel-api-production.up.railway.app/image/grayscale/?image=${image}`
}

exports.eightball = async function() {
    let content = await fetch(`https://pixel-api-production.up.railway.app/fun/8ball`)
    content = await content.json()
    return content
}

exports.wouldyourather = async function() {
    let content = await fetch(`https://pixel-api-production.up.railway.app/fun/wouldyourather`)
    content = await content.json()
    return content
}

exports.websitescreenshot = async function(link) {
    if (!link) {
        return {error: "No Link Provided"}
    }
    return `https://pixel-api-production.up.railway.app/fun/websitescreenshot/?link=${link}`
}

exports.translate = async function(to, from, text) {
    if (!to) return {error: "No To language Provided"}
    if (!from) return {error: "No From language provided"}
    if (!text) return {error: "No Text Provided"}
    let content = await fetch(`https://pixel-api-production.up.railway.app/data/translate/?to=${to}&from=${from}&text=${text}`)
    content = content.json()
    return content
}