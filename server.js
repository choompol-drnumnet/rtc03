const express = require("express");
const app = express();
const PORT = 6003;
app.use('/rtc03', express.static('public'));
const server = require('http').Server(app);
server.listen(PORT);
