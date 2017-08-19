exports.run = (client, msg, args) => {
    msg.channel.send(`I am on **${client.guilds.size}** with **${client.users.size}** users!`)   

}