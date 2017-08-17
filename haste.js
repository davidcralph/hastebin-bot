const Discord = require("discord.js")
const hastebin = require('hastebin-gen');
const bot = new Discord.Client()
const prefixes = {}
const prefix = "hb!"
var silenced = {}

bot.on('ready', () => {
    console.log('beep boop')
    bot.user.setGame("with Hastebin")
    bot.user.setStatus('dnd');
});

bot.on("message", msg => {
    if (!msg.guild) { return }
    if (msg.content.startsWith(prefix) && !prefixes[msg.guild.id]) { prefixes[msg.guild.id] = prefix }
    if (silenced[msg.author.id] && silenced[msg.author.id].type == "user" && silenced[msg.author.id].active) { return; }
    if (silenced[msg.guild.id] && silenced[msg.guild.id].type == "guild" && silenced[msg.guild.id].active) { return; }
    if (!msg.content.startsWith(prefixes[msg.guild.id])) { return; }
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefixes[msg.guild.id].length)
    let args = msg.content.split(" ").slice(1)
    if (cmd == "ping") {
        msg.channel.send(`Pong! The ping is **${(bot.ping).toFixed(0)}**ms! :ping_pong:`)
    }

    if (cmd == "stats") {
        msg.channel.send(`I am on **` + bot.guilds.size + `** servers with **` + bot.users.size + `** members in them.`)
    }

    if (cmd == "invite") {
        msg.channel.send(`Invite me here: https://discordapp.com/oauth2/authorize?client_id=347684379914403840&scope=bot `)
    }

    if (cmd == "help") {
        msg.channel.send("Here are my commands: ```help, ping, stats, haste and invite```")
    }

    if (cmd == "haste") {
        let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.sendMessage(":x: What do you want to post to Hastebin?") }
        hastebin(haste, type).then(r => {
            msg.channel.sendMessage(":white_check_mark: Posted text to Hastebin at this URL: " + r);
        }).catch(console.error);
    }

});

bot.on('guildCreate', (guild) => {
    guild.defaultChannel.send("Hello, I am Hastebin Bot and I post data to Hastebin. Do **hb!help** for my commands!")
});

bot.login("Nope")
