var socket = require('socket.io')
,express = require('express')
,http = require('http');
;

var app = express();
var server = http.createServer(app);


var io = socket.listen(server);

io.sockets.on('connection', function(client){
	console.log('Client connected...');

});

server.listen(3000);

