const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
    fs.readFile('html/form.html', 'utf-8', (error, data) => {
        if (error) {
            res.writeHead(500, { 'content-type': 'text/plain' })
            res.end('internal server error')
            return;
        }
        res.writeHead(200, { 'content-type': 'text/html' })
        if (req.url == '/') {
            res.write(data);
        } else if (req.url == '/submit') {
            let dataBody = [];
            req.on('data', (ch) => {
                dataBody.push(ch);
            });
            req.on('end', ()=> {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = querystring.parse(rawData);
                let dataString = "My name is "+ readableData.name+ " and my email id is "+ readableData.email; 
                console.log(dataString);
                fs.writeFileSync("text/"+readableData.name+".txt", dataString);
                console.log('file created');
            });
            res.write('<h2> Data Submitted</h2>')
        }
        res.end()
    })

}).listen(3000);