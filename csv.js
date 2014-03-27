var csv = require('fast-csv');
var file = require('file');
var stream = file.createStream('data.csv');

var csvStream = csv()
.on('record', function(data){
    console.log(data)
})

.on('end', function(){
    console.log("done !! ");
});


stream.pipe(csvStream);