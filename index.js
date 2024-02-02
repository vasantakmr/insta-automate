const express = require("express"),
  { urlencoded, json } = require("body-parser"),
  bodyParser = require("body-parser"),
  crypto = require("crypto"),
  path = require("path"),
  app = express();

var users = {};

// Parse application/x-www-form-urlencoded
app = express().use(bodyParser.json());



app.get('/api', function (req, res) {
    console.log("Get called")
    console.log(req.body);
    
    // Parse the query params
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === "subscribe" && token === "helloworld") {
        // Respond with the challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
        } else {
        // Respond with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
        }
    }
})

app.post('/api', function (req, res) {
    console.log("Post called")
    console.dir(req.body);

    if(req.body.object == "comments") {
        console.log("In comments");
    }

    res.status(200).send("EVENT_RECEIVED");
})

app.get('/test', function (req, res) {
    console.log("Get called")
    console.log(req.body);
    
	res.status(200).json({msg: `It's a Get request.`});
})


const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));