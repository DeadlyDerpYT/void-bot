const Discord = require("discord.js");
const client = new Discord.Client();

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
	const cussWords = ['arse', 'ass', 'asswhole', 'asshole', 'a r s e', 'a s s', 'a s s w h o l e', 'a s s h o l e', 'bastard', 'b a s t a r d', 'bitch', 'b i t c h', 'child-fucker', 'child fucker', 'c h i l d - f u c k e r', 'c h i l d f u c k e r', 'cunt', 'c u n t', 'fuck', 'f u c k', 'holy shit', 'h o l y s h i t', 'mother fucker', 'motherfucker', 'm o t h e r f u c k e r', 'shit', 's h i t', 'shitass', 's h i t a s s', 'shit ass', 'son of a bitch', 's o n o f a b i t c h', 'son of a whore', 's o n o f a w h o r e', 'twat', 't w a t'];
});
client.on('message', message => {
	if (message.author.bot) return;
	var saymessage = message.author.username + "said: " + message.content;;
	return client.channels.get('454825710545010698').send(saymessage).catch(console.error);
});
