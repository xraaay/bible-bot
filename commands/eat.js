require('dotenv').config();
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
			term: 'tacos',
			location: 'new york',
		})
			.then(response => {
				// console.log(response.jsonBody);
				const arr = [];
				for(let i = 0; i < 10; i++) {
					arr.push(response.jsonBody.businesses[i].name);
				}
				message.reply(JSON.stringify(arr));
			})
			.catch(e => {
				console.log(e);
			});
	},
};