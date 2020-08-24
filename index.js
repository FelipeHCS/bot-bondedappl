const Discord = require("discord.js");
const dotenv = require("dotenv"); // Arquivos de pastas. 
const fs = require("fs"); // Serve para ler os conteúdos de algo!
const path = require("path"); // Puxar as pastas.

dotenv.config(); /*Configuração DOTENV*/

const bot = new Discord.Client()
bot.commands = new Discord.Collection();
bot.queues = new Map();

const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"));

const folders = fs.readdirSync(path.join(__dirname, "/commands"))
for (var folder of folders) {
    const files = fs.readdirSync(path.join(__dirname, "/commands", folder)).filter((filename) => /^.*\.(t|j)s$/.test(filename))
    for (var filename of files) {
        const command = require(`./commands/${folder}/${filename}`);
        bot.commands.set(command.name, command);
    }
}

for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

console.log(bot.commands); /*Mapa dos comandos no terminal */

bot.on('ready', () => { /*Atividade do bot (LET STATUS)*/
    let activities = [
        `Digite p.help`,
        `Minecraft`,
        `Call Of Duty Modern Warfare`,
        `X-Plane 11`,
        `Grand Theft Auto V`,
        `Digite p.help`,
        `Arma 3`,
        `PUBG`,
        `Digite p.help`,
        `Bonde da PPL, V 2.0`,
        `Criado por @Felipe Hilário #5995`,
        `Digite p.help`
    ],
        i = 0; /*Não deixa as frases se repetirem!*/
    setInterval(() => bot.user.setActivity(`${activities[i++ %
        activities.length]}`, {
        type: "PLAYING"
    }), 1000 * 60); /*Tempo de intervalo.*/

    console.log(`--------------------//Status do Bot//-----------------\n 
    ${bot.user.username} foi conectado com sucesso e já estamos em ${bot.guilds.cache.size} servidores ( ͡° ͜ʖ ͡°) \n 
    ----------------//Status do Bot//-----------------`);
}); /*Mensagem no terminal */

//Comando react

bot.on('raw', async dados => {
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if (dados.d.message_id !== "747435414431989841") return //Id da mensagem

    let servidor = bot.guilds.cache.get("655860344215830608")//Id do Servidor
    let membro = servidor.members.cache.get(dados.d.user_id)//Id do membro

    let cargo1 = servidor.roles.cache.get('677287648439697408') // Id do cargo 1
    let cargo2 = servidor.roles.cache.get('736187242065690695') // Id do cargo 2
    let cargo3 = servidor.roles.cache.get('677496352560644097') // Id do cargo 3
    let cargo4 = servidor.roles.cache.get('677497427262963742') // Id do cargo 4
    let cargo5 = servidor.roles.cache.get('710589633410498751') // Id do cargo 5
    let cargo6 = servidor.roles.cache.get('747442161489936394') // Id do cargo 6
    let cargo7 = servidor.roles.cache.get('677497804519637013') // Id do cargo 7

    if (dados.t === "MESSAGE_REACTION_ADD") {
        if (dados.d.emoji.name === "🥂") {
            if (membro.roles.cache.has(cargo1)) return
            membro.roles.add(cargo1)
        } else if (dados.d.emoji.id === "747440667617132576") {
            if (membro.roles.cache.has(cargo2)) return
            membro.roles.add(cargo2)
        } else if (dados.d.emoji.name === "🐂") {
            if (membro.roles.cache.has(cargo3)) return
            membro.roles.add(cargo3)
        } else if (dados.d.emoji.name === "👅") {
            if (membro.roles.cache.has(cargo4)) return
            membro.roles.add(cargo4)
        } else if (dados.d.emoji.id === "747438866721407013") {
            if (membro.roles.cache.has(cargo5)) return
            membro.roles.add(cargo5)
        } else if (dados.d.emoji.id === "747439188391100427") {
            if (membro.roles.cache.has(cargo6)) return
            membro.roles.add(cargo6)
        } else if (dados.d.emoji.name === "👮‍♂️") {
            if (membro.roles.cache.has(cargo7)) return
            membro.roles.add(cargo7)
        }
    }
    if (dados.t === "MESSAGE_REACTION_REMOVE") {
        if (dados.d.emoji.name === "🥂") {
            if (membro.roles.cache.has(cargo1)) return
            membro.roles.remove(cargo1)
        } else if (dados.d.emoji.id === "747440667617132576") {
            if (membro.roles.cache.has(cargo2)) return
            membro.roles.remove(cargo2)
        } else if (dados.d.emoji.name === "🐂") {
            if (membro.roles.cache.has(cargo3)) return
            membro.roles.remove(cargo3)
        } else if (dados.d.emoji.name === "👅") {
            if (membro.roles.cache.has(cargo4)) return
            membro.roles.remove(cargo4)
        } else if (dados.d.emoji.id === "747438866721407013") {
            if (membro.roles.cache.has(cargo5)) return
            membro.roles.remove(cargo5)
        } else if (dados.d.emoji.id === "747439188391100427") {
            if (membro.roles.cache.has(cargo6)) return
            membro.roles.remove(cargo6)
        } else if (dados.d.emoji.name === "👮‍♂️") {
            if (membro.roles.cache.has(cargo7)) return
            membro.roles.remove(cargo7)
        }
    }
})

bot.on("guildMemberAdd", async (member) => { /*Mensagem de boas vindas ao usuário!*/

    let channel = bot.channels.cache.get(""); // Id do canal.
    let emoji0 = member.guild.emojis.cache.find(emoji0 => emoji0.name === '9190_rainbow_hype'); /*Emoji*/
    let emoji1 = member.guild.emojis.cache.find(emoji1 => emoji1.name === '9791_Arrow_Right');
    let emoji2 = member.guild.emojis.cache.find(emoji2 => emoji2.name === '3983_My_best_verified');

    let embed0 = new Discord.MessageEmbed()
        .setColor('#50ff00')
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Boas Vindas! ${emoji}`)
        .setDescription(`${member.user} Boas Vindas ao servidor ${massage.guild.name}, agora estamos com ${member.guilds.memberCount} no servidor.`)
        .addField(`${emoji2} Cargos`, 'Em caso de dúvidas mencione algum admin: <@&677274985123020882>')
        .addField(`${emoji1} Add Cargos`, 'Adicione alguns cargos, vá até <#747435270688735253>')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();

    await channel.send(embed0)
}

)
bot.on('message', (message) => { /*Caso o usuário mande um comando errado ele ira retornar:*/
    if (!message.content.toLowerCase().startsWith(process.env.BOT_PREFIX) || message.author.bot || message.channel.type == "dm") return;

    const args = message.content.toLowerCase().slice(process.env.BOT_PREFIX.length).split(" ");
    const command = args.shift();
    try {
        bot.commands.get(command).execute(bot, message, args);
    } catch (e) {
        return message.reply("não reconheço este comando :(");
    }
})

bot.login(process.env.BOT_TOKEN);
