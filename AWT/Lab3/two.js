// read a data from file and display it to brower
// path resolve should be done automatically

var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {
    var filePath = path.resolve(__dirname, 'data.txt');
    var data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
    res.end(data);
});

server.listen(3000, function(){
    console.log('Check: http://localhost:3000');
});