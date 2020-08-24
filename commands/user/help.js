const Discord = require("discord.js");
const dotenv = require("dotenv");

const execute = (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Bem vindo usuário! Segue os comandos para você utilizar:")
    .setColor(`#050000`)
    .addField(`${process.env.BOT_PREFIX}Userinfo = mostra informações do usuário.`)
    .addField(`${process.env.BOT_PREFIX}Clear = Limpar mensagens de 0 à 100 no chat.`)
    .addField(`${process.env.BOT_PREFIX}Servidor = Mostra informações do servidor.`)
    message.channel.send(embed);
}
module.exports = {
    name: "help",
    execute,
}