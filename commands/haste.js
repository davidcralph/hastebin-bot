const { post } = require("node-superfetch");

exports.run = async(client, msg, args) => {
    if (!args[0]) return msg.channel.send(":x: I can't post nothing to Hastebin!");
    const res = await post(`${client.config.hasteurl}/documents`)
                     .send(args.slice(0).join(" "));
    msg.channel.send(`:white_check_mark: Posted text to Hastebin at this URL: ${client.config.hasteurl}/${res.body.key}`);
}
