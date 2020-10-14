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
		// TODO: use roles to determine location
		// TODO: use reactions to pick? or response
		// const url = 'https://api.yelp.com/v3/businesses/search?term=taco';

		// console.log(yelp_token);
		// message.reply();
		client.search({
			term: args[0],
			location: args[1],
		})
			.then(response => {
				console.log(args);
				// console.log(response.jsonBody);
				// const arr = [];
				// for (let i = 0; i < 10; i++) {
				// 	arr.push(response.jsonBody.businesses[i].name);
				// }
				const business = response.jsonBody.businesses[0];
				const embed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle(business.name)
					.setURL(business.url)
					.addFields(
						{ name: 'Categories', value: business.categories.map(item => item.title) },
						{ name: 'Price', value: business.price },
						{ name: 'Address', value: `${business.location.display_address[0]}, ${business.location.display_address[1]}` },
						{ name: 'Phone', value: business.display_phone, inline: true },
						{ name: 'Rating', value: business.rating },
					)
					.setImage(business.image_url)
					.setTimestamp();
				message.reply(embed);
			})
			.catch(e => {
				console.log(e);
			});
	},
};