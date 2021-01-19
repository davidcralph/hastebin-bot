exports.run = (client, msg, args) => {
    msg.channel.send(`:robot: | I am on **${client.guilds.cache.size}** guilds with **${client.users.cache.size}** users!`);
}