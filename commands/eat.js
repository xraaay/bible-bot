require('dotenv').config();
const Discord = require('discord.js');
const yelp_token = process.env.YELP_TOKEN;
const yelp = require('yelp-fusion');
const client = yelp.client(yelp_token);

module.exports = {
	name: 'eat',
	description: '',
	args: false,
	execute(message, args) {
		// TODO: use roles to determine location?
		// TODO: use reactions to pick? or response?
		client.search({
			term: args[0],
			location: args[1],
		})
			.then(response => {
				const business = response.jsonBody.businesses[0];
				const fields = [];
				if(business.categories[0]){
					fields.push({ name: 'Categories', value: business.categories.map(item => item.title), inline: true })
				}
				if(business.price){
					fields.push({ name: 'Price', value: business.price, inline: true })
				}
				if(business.rating){
					fields.push({ name: 'Rating', value: business.rating, inline: true })
				}
				if(business.display_phone){
					fields.push({ name: 'Phone', value: business.display_phone })
				}
				if(business.location.display_address[0] && business.location.display_address[1]){
					fields.push({ name: 'Address', value: `${business.location.display_address[0]}, ${business.location.display_address[1]}`})
				}
				const embed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle(business.name)
					.setURL(business.url)
					.addFields(fields)
					.setImage(business.image_url)
					.setTimestamp();
				message.reply(embed);
			})
			.catch(e => {
				console.log(e)
				try {
					let errObj = JSON.parse(e.response.body)
					message.reply(`${errObj.error.code} // ${errObj.error.field}: ${errObj.error.description}`)
				}
				catch(ex) {
					message.reply('Something went wrong')
				}
			});
	},
};