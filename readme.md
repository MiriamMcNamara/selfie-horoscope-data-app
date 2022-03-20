# Data Selfie App

This code was created during a code-along with the Coding Train videos on YouTube. I completed this project in a few hours to review basic Node.js server setup and learn a bit of P5.js.

Based on the project by Joey Lee!

# Intial steps to setup Node server

- npm init

- npm install express

- npm install nodemon (to get live server reload; call this in terminal by saying `nodemon index.js`)

In index.js:

- require express
- app = express();
- app.listen(port, function)
- app.use static files, **_express.json to parse data!_**

# Rest of Basic Project:

- Use navigator.geolocation on the client side to get location of the browser and display on the DOM
- Send that info to the server using fetch() POST method
- install nebd to create a database file; insert data in the post route
- create a submit button, event listener to submit the data onclick
- create /logs and create a GET route to get info from the database and display on the DOM
- add P5.js and code to access webcam and capture images
- **_add an input for mood using plain HTML and add it to the database and /logs display page_**

# ADDING EXTERNAL API - Weather Here

- find a free weather API - I'm using openweathermap.org - sign up and acquire an API key
- find the API documentation for getting the weather (you need to send latitude, longitude, and your API key in a particular format)
- in the already-constructed on-click for submitting lat/lon to database, send that info as params to the server
- construct a GET route that makes a call to the external API (in this case, I installed node-fetch and required it so that I could use fetch in the server - practice with axios next?)
- install dotenv and require in index.js!
  -put API in a .env file, put .env in the gitignore
  - remember to send the response back to the client! res.send/res.json
  - **_currently my API key isn't working yet but it said it could take a few hours, so To Be Continued_**
  - **_after we get the data back, display it on the DOM please! (in /logs)_**
