const http = require('http');

http.createServer((req, res)=> {
    res.writeHead(200, {'content-type': 'text/html'});
    if(req.url == '/'){
        res.write(`
        `);
    }else if(req.url == '/submit'){
        res.write('<h2>Data Submitted</h2>');
    }
    
    res.end();
}).listen(3000);