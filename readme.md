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

# Rest of Project:

- Use navigator.geolocation on the client side to get location of the browser and display on the DOM
- Send that info to the server using fetch() POST method
- install nebd to create a database file; insert data in the post route
- create a submit button, event listener to submit the data onclick
- create /logs and create a GET route to get info from the database and display on the DOM
- add P5.js and code to access webcam and capture images
