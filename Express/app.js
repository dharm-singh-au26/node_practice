const http = require("http");

const utility = require("./utility");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    let sum = utility(2, 5);
    // console.log(sum);
    res.end("hello world" + "sum" + sum);
  })
  .listen(3000);
