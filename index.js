const { response } = require("express");
const express = require("express"); //require express
const fetch = require("node-fetch");
const app = express(); //create the app that uses it
const Datastore = require("nedb"); //require nebd to create database
require("dotenv").config(); //needed to use .env variables!
const axios = require("axios");

// console.log(process.env);

app.listen(3000, () => console.log("listening at 3000")); //listen on port
app.use(express.static("public")); //serve static files first of all!
app.use(express.json({ limit: "1mb" })); //need something to parse data into JSON

const database = new Datastore("database.db"); //create database
database.loadDatabase(); //load it up

//POST route using fetch on client side
app.post("/api", (req, res) => {
  console.log("request:", req.body);
  const data = req.body;
  const timestamp = Date.now();
  data.timestamp = timestamp; //add to data object; fun!
  database.insert(data); //insert data into database
  res.sendStatus(200);
});

//GET route using fetch on client side
app.get("/api", (req, res) => {
  database.find({}, (err, data) => {
    //database.find for nebd database, this selects all entries
    if (err) {
      res.sendStatus(500);
    }
    res.json(data);
  });
});

//GET for weather, external API
app.get("/weather/:lat/:lon", async (req, res) => {
  console.log("weather hit:", req.params);
  const lat = req.params.lat;
  const lon = req.params.lon;
  const api_key = process.env.API_KEY;
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.send(json);
});

//GET for horoscope!
app.get("/api/horoscope/:sign", async (req, res) => {
  console.log("horoscope hit!");
  console.log("req.params:", req.params);
  let horoscopeSign = req.params.sign;
  var options = {
    method: "POST",
    url: process.env.API_URL,
    params: { sign: `${horoscopeSign}`, day: "today" },
    headers: {
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
