const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete();

    let embed0 = new Discord.MessageEmbed()
        .setColor('#050505')
        .setThumbnail(`https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/79705613_3285117584862819_1469857389170655232_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeEmDpziFqV8x6_ullwxr3q_V_OtX4mqqrRX861fiaqqtOsgOdxnlScUwzusISZzVvxCmyd6BlZ4Ct29g9oCy-s7&_nc_ohc=po2B_m1SVuIAX9IUf2v&_nc_ht=scontent-gru1-1.xx&oh=42cf2a153c533ff68c7a6a784ae74449&oe=5F676820`)
        .addField('Dono do Servidor:', `<@443535787573772298>`)
        .addField('Jogos:', 'Arma 3, X-plane 11, GTA V, Raimbow Six, Call of duty Modern Warfare, Pubg')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed0)
    }
    module.exports = {
        name: "servidor",
        execute,
    } 