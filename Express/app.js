/*
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
  */

// using express create server

const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/home", (req, res) => {
  res.send("Hello we are at home");
});

app.listen(port, () => console.log(`server running at ${port}`));
