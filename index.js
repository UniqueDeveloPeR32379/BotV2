const Client = require('./structures/Client');
const client = new Client();

/* client.run();
//client.

Parameter | Type | Default | Description

options | object | none
options.main | boolean | false | Dictates if it's the main Guardian instance
options.evalID | string | null | The sole userID that can run the eval command
*/

client.run({ main: true, evalID: process.env.evalID });
client.login(process.env.TOKEN);

//Client.user.setActivity("Heelo");

// Uptime Robot
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
