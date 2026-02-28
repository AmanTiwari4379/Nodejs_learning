const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>This is write method</h1>');
    res.end('Hello World!');
}).listen(3000);