//Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const Articles = require("./models/articles");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

// Allow cross origin between client + server
app.use(cors());

//Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://heroku_lrgjpdz0:72360jhisaje1fecnrjglb2r8t@ds129024.mlab.com:29024/heroku_lrgjpdz0");
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Mongoose Error: ", err);
});

db.once("open",() => {
  console.log("Mongoose connection successful.");
});


//API Routes

// This is the route we will send GET requests to retrieve our most recent search data.
app.get("https://localhost:3001/api/saved", (req, res) => {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Articles.find({}).sort([
    ["date", "descending"]
  ]).exec((err, doc) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("https://localhost:3001/api/saved", (req, res) => {
//   console.log("BODY: " + req.body.location);
  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Articles.create({
      //replace below with JSON info via API call req.body.etc....
    title: res.body.title,
    date: res.body.date,
    url: res.body.url
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Articles");
    }
  });
});

app.delete("api/saved", (req, res) => {
    Articles.destroy({}).exec((err, doc) => {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", (req, res) => {
    res.sendFile(__dirname + "public");
  });


// Listener
app.listen(PORT, () =>  {
  console.log("App listening on PORT: " + PORT);
});
