const Discord = require("discord.js");
const client = new Discord.Client();
const profanities = require('profanities');

const prefix = "!=";
const help = new Discord.RichEmbed().setTitle("!-=-=-=-=VoidBot Help=-=-=-=-!").setDescription("").setColor("#0000FF").setThumbnail("http://33.media.tumblr.com/317d0faf24bfe6c3ab4ac75489f6bc9e/tumblr_nlwjfmpOLk1taknieo1_250.gif").setFooter("!-=-=-=Version 1.0 | By Dominic (Dom)#9540=-=-=-!").setTimestamp();
client.login("NDU0ODA5OTMzOTAxNDYzNTUy.Dfy40Q.Iybz5nK1RYyCuTY6JZCBoE-BM4c");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setActivity(' |=help | By Dom ');
    client.user.setStatus('online');
});
client.on('message', message => {
  if (message.content === "!=help") {
   message.author.send(help); 
  }
});
client.on('message', message => {
	for (x = 0; x < profanities.length; x++) {
		if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
			message.channel.send('No Cussing Please!');
			message.delete();
			return;
		}
	}
});
client.on('message', message => {
	if (message.author.bot) return;
	var saymessage = message.author.username + "said: " + message.content;;
	return client.channels.get('454825710545010698').send(saymessage).catch(console.error);
});
client.on('message', message => {
	if (message.content === 'https://' || message.content === 'www.' || message.content === '.com') {
		message.channel.send('No Links  please!');
		message.delete();
	}
});
