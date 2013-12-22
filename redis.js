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
console.log(reply); // reply with list length
});i


// retrieving form the list :
client.lrange("messages", 0, -1, function(err, messages){
console.log(messages); // return all items of the list
});


var storeMessage = function(name, data){
	var message = JSON.stringify({name: name, data: data});
	redisClient.lpush("messages", message, function(err, response){
		redisClient.ltrim("messages", 0, 10); // keep newest 10 items
	
	});

}

// output from list
client.on('join', function(name){
	redisClient.lrange("messages", 0, -1, function(err, messages){
		messages = messages.reverse(); //reverse to emit on right order
		
		message.forEach(function(message){
			message = JSON.parse(message);
			client.emit("messages", message.name + ": " + message.data);
		
		});
	});

})

// add a list of chatters

client.on('join', function(name){
	// notify all others
	client.broadcast.emit("add chatter", name);
	redisClient.sadd("chatters", name);
});

// Notify chatters
client.on('join', function(name){
	client.broadcast.emit('add chatter', name);
	redisClient.smembers('name', function(err, names){
		names.forEach(function(name){
			client.emit('add chatter', name);
		
		});
	
	});
// add name to chatters set
redisClient.sadd("chatters", name);


});

// remove a chatter
client.on('disconnect', function(name){
	client.get('nickname', function(err, name){
		client.broadcast.emit("remove chatter", name);
		redisClient.srem("chatters", name);
	})
});



