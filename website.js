const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      fs.readFile("html/index.html", "utf-8", (error, data) => {
        if (error) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.end("internal server error");
          return false;
        }
        res.write(data);
        res.end();
      });
    } else if (req.url == "/style.css") {
      fs.readFile("html/style.css", "utf-8", (error, data) => {
        if (error) {
          res.writeHead(500, { "content-type": "text/plain" });
          res.end("css not found");
          return false;
        }
        res.writeHead(200, { "content-type": "text/css" });
        res.end(data);
      });
    }
  })
  .listen(3200);
