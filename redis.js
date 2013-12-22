var redis = require('redis');
var client = redis.createClient();

client.set("message1", "bonjour");
client.set("message2", "gracias");

client.get("message1", function(err, reply){
	console.log(reply); // commands are not blocking !
});



// Add in a list

var message = "toto";

client.lpush("messages", message, function(err, reply){
console.log(reply);
});
