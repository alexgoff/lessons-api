const functions = require('firebase-functions');
const express = require('express'); // call up express
const cors = require('cors');
const app = express(); // define app as express
const bodyParser = require('body-parser'); // bring in body parse
const channelJson = require('./api/data/channel.json'); //import our JSON 

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set up a simple route for calling the lessons
app.get('/lessons', (req, res) => 
    res.json(channelJson)
);

exports.app = functions.https.onRequest(app);
