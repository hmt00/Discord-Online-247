const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Nice!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Discord Online 24/7 is Ready!");
  });
}

module.exports = keepAlive;
