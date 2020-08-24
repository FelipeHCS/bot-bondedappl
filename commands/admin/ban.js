
const Discord = require('discord.js');
const execute = (bot, message, args) => {
    message.delete();

    if(!message.member.hasPermission("ADMINISTRATOR"))return message.reply("Quem você acha que é?")

    const user = message.mentions.users.first() || args[0];

    let reason = args[1];
    
    if(args.length === 0) return message.reply(`Utilize ${process.env.BOT_PREFIX}ban <@usuario> <@motivo>`);
    if(user.id === '726806968479514737') return message.reply("Você não pode banir o próprio bot.");
    if(user.id === '443535787573772298') return message.reply("Você não pode banir o fundador do Servidor!")


    const bChannel = message.guild.channels.cache.get('706552904022229065');

    if(!user){
      return message.reply("Você deve informar o usuário!")
    }
    if (!reason){
        return message.reply("Informe o motivo!")
    }
  
      if (user) {
        message.guild.member(user).ban(reason);
        bChannel.send(`${user} Foi banido do servidor!`);
    } 

}
module.exports = {
    name: "ban",
    execute,
}