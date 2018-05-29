module.exports = (client, msg) => {
  if (msg.author.bot) return;
  if (!msg.guild) return;
  if (msg.content.indexOf(client.config.prefix) !== 0) return;
  const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, msg, args);
};
