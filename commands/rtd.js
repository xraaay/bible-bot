module.exports = {
	name: 'rtd', // name of the command
	description: 'Gives a random number between 1 and 6', // description, this will show up when they run help
	args: false, // whether passing arguments is required i.e. b!rtd 2 should roll 2 dice
	execute(message, args) { // this is where you write the function, it has two parameters 'message' and 'args'
		let rolls = args[0]; // grabbing the first argument
		if(!rolls) {
			rolls = 1; // if theres no arguments, default to 1 roll
		}
		let string; // create variable out here because scope
		let total; // basically if you did it inside of the loop you would keep rewriting the value instead of adding
		for(let i = 0; i <= rolls; i++) { // creating a loop to run as many times as the argument passed
			const randomNumber = Math.floor(Math.random() * 6) + 1; // generate a random number between 1-6
			if(!string) { // if string is falsey, that means this is the first roll // can also do other ways
				string = randomNumber; // setting string and total to a value since empty
				total = randomNumber;
			}	else {
				string = `${string} + ${randomNumber}`; // building the string
				total += randomNumber; // building the total
			}
		}

		const response = rolls < 1 ? 'You rolled a ' + total : `You rolled ${string} = ${total}`; // check if singular

		message.reply(response); // send the response
	},
};