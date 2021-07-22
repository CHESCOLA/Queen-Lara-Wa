
const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Chescola = require('../events');
const DEL = "Delet all messages from you"



 Chescola.addCMD({pattern: 'del', fromMe: true, desc: DEL}, (async (message, match) => {

    await message.sendMessage('```Deleting all...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```🗑All deleted....```');
}));
