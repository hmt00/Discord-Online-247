const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Your Discord Account Is Online 24/7! - Subscribe HMT YT :D");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Discord Online 24/7 is Ready!");
  });
}

module.exports = keepAlive;
