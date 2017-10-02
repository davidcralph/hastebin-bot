exports.run = (client, msg, args) => {
        msg.channel.send(`Pong! The ping is **${(client.ping).toFixed(0)}**ms! :ping_pong:`)
}
