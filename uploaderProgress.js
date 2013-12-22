// A tester avec curl --upload-file nom_fichier http://localhost:8080

var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	var newFile = fs.createWriteStream("readme_copy.md");
	var fileBytes = req.headers['content-length'];
	var uploadedBytes = 0;

	req.pipe(newFile);

	req.on('data', function(chunk){
		uploadedBytes += chunk.length;
		var progress = (uploadedBytes / fileBytes) * 100;
		res.write("progress : " + parseInt(progress, 10) + "%\n");
	});

}).listen(8080);
