module.exports = (client, msg) => {
      if (msg.author.bot || msg.content.indexOf(client.config.prefix) !== 0) {
            return;
      }

      const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
      const cmd = client.commands.get(args.shift().toLowerCase());
      
      if (!cmd) {
            return;
      }

      try {
            cmd.run(client, msg, args);
      } catch (e) {
            console.log(e);
            msg.channel.send(':x: | Something went wrong ```' + e + '```');
      }
};