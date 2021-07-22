/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Queen Lara @Chescola t.me/Kasun
# Get more about devaoloper https://kasun.ml
*/

const Chescola = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('ttp');
const ANIM = "Get random anime waifu wallpapers"

if (Config.WORKTYPE == 'private') {

    Chescola.addCMD({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

        var lasiyasimg = await axios.get(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Chescola.addCMD({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var lasiyasimg = await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    
        Chescola.addCMD({ pattern: 'a2tp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var lasiyasimg = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    



}

// ##############################################################################################################################################################################################################################################################
else if (Config.WORKTYPE == 'public') {

    Chescola.addCMD({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

        var lasiyasimg = await axios.get(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));


    Chescola.addCMD({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

     var lasiyasimg = await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
            Chescola.addCMD({ pattern: 'a2tp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var lasiyasimg = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));


// =======================================================================================================================================================================================================================

    Chescola.addCMD({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

        var lasiyasimg = await axios.get(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

    }));


    Chescola.addCMD({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);

     var lasiyasimg = await axios.get(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
            Chescola.addCMD({ pattern: 'a2tp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
                var XX = match[1]
     var lasiyasimg = await axios.get(`https://lolhuman.herokuapp.com/api/attp2?apikey=e1ee2b3d3b00e58f2511ad95&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.client.sendMessage(message.jid,Buffer.from(lasiyasimg.data), MessageType.sticker, { mimetype: Mimetype.webp })

    }));
    

}
