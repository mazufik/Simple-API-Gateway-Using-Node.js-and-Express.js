import express from "express";
import fs from "fs";
import app from "./app.js";

const server = express();

// Load file config.json
const file = fs.readFileSync("./config.json");
const config = JSON.parse(file);

// Initiate config
app.init(server, config);

server.listen(config.server.port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port:${config.server.port}`);
});
