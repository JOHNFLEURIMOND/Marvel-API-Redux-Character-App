//server.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const PORT = process.env.PORT || 8080;
const app = express();
const moment = require('moment'); // require
const md5 = require("js-md5");
const uid2 = require("uid2");
require('dotenv').config()

var Now = moment().format("MMMM Do YYYY, h:mm:ss a");
const apikeyPublic = "[REMOVED_MARVEL_API_CREDENTIAL]";
const apikeyPrivate = "[REMOVED_MARVEL_API_CREDENTIAL]";

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(express.json());
app.use(express.static('/build'));

app.get('/backend/api', async (req, res) => {
  console.log('api/test called!')
  let timeStamp = uid2(8);
  let hash = md5(timeStamp + apikeyPrivate + apikeyPublic);
  const page = req.query.page;
  const limit = 100;
  const offset = limit * (page - 1);
  const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apikeyPublic}&hash=${hash}&orderBy=name&limit=${limit}&offset=${offset}`;
  const fetchResponse = await fetch(apiUrl)
  const json = await fetchResponse.json();
  res.json(json)
});

app.use(bodyParser.json()); // get information from html forms
// Listen to whatever port above.
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});



