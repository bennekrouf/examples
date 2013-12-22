// A tester avec curl --upload-file nom_fichier http://localhost:8080


var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	var newFile = fs.createWriteStream("readme_copy.md");
	req.pipe(newFile);

	req.on('end', function(){
		res.end('uploaded!');
	});
}).listen(8080);
