const hastebin = require('hastebin-gen');
exports.run = (client, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send(":x: What do you want to post to Hastebin?") }
        hastebin(haste, type).then(r => {
            msg.channel.send(":white_check_mark: Posted text to Hastebin at this URL: " + r);
        }).catch(console.error);
}
