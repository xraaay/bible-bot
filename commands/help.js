const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Gives a list of commands or information about a command',
	aliases: ['commands'],
	usage: '[command name]',
	args: false,
	execute(message, args) {
	

		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('The Pope')
			.setURL('https://discord.js.org/')
			// .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription('Command List')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addFields(

				{ name: 'b!reminder', value: 'Set a reminder'},
				{ name: 'b!hungry', value: 'Decide what to eat through RNG'},
				{ name: 'b!8Ball', value: 'Ask a \'yes\' or \'no\' question'},
				{ name: 'b!poll', value: 'Create a poll with reactions to vote'},
			)
			.setTimestamp()
			.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		message.reply(exampleEmbed)
	},
};

