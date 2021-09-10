exports.run = (client, msg) => {
  msg.channel.send(`:ping_pong: | Pong! The ping is **${(client.ws.ping)}**ms.`);
};
