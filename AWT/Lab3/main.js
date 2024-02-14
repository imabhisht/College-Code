const http = require('http');
const https = require(`https`);

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req.headers)
    res.end('<h1>Hello World</h1>');
}).listen(3000, () => console.log('Server running http://localhost:3000'));

