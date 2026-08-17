// server.js
import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import moment from 'moment';
import md5 from 'js-md5';
import uid2 from 'uid2';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

const apikeyPublic = process.env.MARVEL_PUBLIC_KEY;
const apikeyPrivate = process.env.MARVEL_PRIVATE_KEY;

if (!apikeyPublic || !apikeyPrivate) {
  throw new Error('Missing required Marvel API configuration.');
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build'))); // Ensure the correct static path

app.get('/backend/api', async (req, res) => {
  console.log('api/test called!');

  const timeStamp = uid2(8);
  const hash = md5(timeStamp + apikeyPrivate + apikeyPublic);

  const page = Number(req.query.page) || 1;
  const characters =
    typeof req.query.characters === 'string'
      ? req.query.characters.trim()
      : '';

  const limit = 100;
  const offset = limit * (page - 1);

  const characterFilter = characters
    ? `&nameStartsWith=${encodeURIComponent(characters)}`
    : '';

  const apiUrl =
    `https://gateway.marvel.com/v1/public/characters` +
    `?ts=${timeStamp}` +
    `&apikey=${apikeyPublic}` +
    `&hash=${hash}` +
    `&orderBy=name` +
    `&limit=${limit}` +
    `&offset=${offset}` +
    characterFilter;

  try {
    const fetchResponse = await fetch(apiUrl);

    if (!fetchResponse.ok) {
      throw new Error('Marvel API request failed');
    }

    const json = await fetchResponse.json();
    res.json(json);
  } catch (error) {
    console.error('Marvel API request failed');
    res.status(500).json({
      error: 'Failed to fetch Marvel data'
    });
  }
});