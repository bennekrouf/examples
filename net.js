var net = require('http');

var server = function(req, res){
    console.log("Hello");
};

var app = net.createServer(server());

app.listen(process.env.PORT);