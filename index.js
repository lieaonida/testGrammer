var http = require('http');

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('hello world');
}).listen(8080);

console.info('program is running at http://localhost:8080');