var socket = require('socket.io')
,express = require('express')
,http = require('http');
;

var app = express();
var server = http.createServer(app);


var io = socket.listen(server);

io.sockets.on('connection', function(client){
	console.log('Client connected...');

	client.emit('messages', {hello: 'world'});

});

app.get('/', function(req, res){

	res.sendfile(__dirname+'/socket.html');

});


server.listen(3000);

