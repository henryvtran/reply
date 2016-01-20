var options = {
    Hungry: 'Always'
	Food: 'Burgers and fries',
	Drinks: 'Soda and Smoothies'
}

var reply = require('./..');

reply.get(options, function(err, answers){
	console.log("\nResults:");
	console.log(answers);
});