//Server Dependencies
import express from("express");
import bodyParser from("body-parser");
import logger from("morgan");
import mongoose from("mongoose");

// Import Articles Schema
import Articles from("./models/articles");

// Create Instance of Express
const app = express();
const PORT = process.env.PORT || 3000;

//Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("localhost", "nytreact");
const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


//API Routes

// This is the route we will send GET requests to retrieve our most recent search data.
app.get("/api/saved", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Articles.find({}).sort([
    ["date", "descending"]
  ]).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api/saved", function(req, res) {
//   console.log("BODY: " + req.body.location);
  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Articles.create({
      //replace below with JSON info via API call req.body.etc....
    title: NYTData.response.docs[i].headline_main,
    date: NYTData.response.docs[i].pub_date,
    url: NYTData.response.docs[i].web_url
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Articles");
    }
  });
});

app.delete("api/saved", function(req, res) {
    Articles.destroy({}).exec(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
