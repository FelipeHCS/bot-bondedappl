const Discord = require("discord.js");
const dotenv = require("dotenv");
const execute = (bot, message, args) => {

    if (args[0]) {
        
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Quem você acha que é?");

        let user = message.mentions.users.first() || message.guild.users.get(args[0])
        
        let embed0 = new Discord.MessageEmbed()
            .setColor('#e4b400')
            .setAuthor(user.tag, user.displayAvatarURL())
            .addField('Nome:', `${user.username}`)
            .addField('Id', `${user.id}`)
            .addField('Status:', `${user.presence.status?user.presence.status : "Não está online"}`)
            .addField('Atividade:', `${user.presence.activities?user.presence.activities : "Não está em nenhuma atividade"}`)
            .addField('Dúvidas?', 'Em caso de dúvidas mencionem o cargo: <@&731272603767144478>')
            .setFooter(bot.user.username, bot.user.displayAvatarURL())
            .setTimestamp()

        message.channel.send(embed0);
    } else if (!args[0]) {


        let embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle("User Info:")
            .setAuthor(message.author.tag, message.member.user.displayAvatarURL())
            .setColor('#e4b400')
            .setImage('https://media.giphy.com/media/fYXzt6IWhHs7oh34kg/giphy.gif')
            .addField('Nome:', ` ${message.author.username}`)
            .addField('Id:', `${message.author.id}`)
            .addField('Status:', ` ${message.author.presence.status?message.author.presence.status:"Não está online"}`)
            .addField('Atividade:', `${message.author.presence.activities?message.author.presence.activities: "Não está em nenhuma atividade"}`)
            .addField('Dúvidas?', 'Em caso de dúvidas mencionem o cargo: <@&731272603767144478>')
            .setFooter(bot.user.username, bot.user.displayAvatarURL());
        message.channel.send(embed);
    }
}
module.exports = {
    name: "userinfo",
    execute,
}

