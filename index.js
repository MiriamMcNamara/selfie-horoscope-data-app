const express = require("express"); //require express
const app = express(); //create the app that uses it
const Datastore = require("nedb"); //require nebd to create database

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
