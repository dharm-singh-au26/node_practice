const http = require("http");

const utility = require("./utility");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello world");
  })
  .listen(3000);
