// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var React = require("react");
var ReactDOM = require("react-dom");
var path = require("path");

// Require Address schema
var Article = require("./models/Article");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//setting static folder
app.use(express.static('./public'));
// -------------------------------------------------

// MongoDB configuration for dev
//mongoose.connect("mongodb://localhost/nytreact");
//MongoDB for heroku
mongoose.connect("mongodb://heroku_601t64wg:33c0abc9sq4vmh4ncrflh8uqvg@ds121222.mlab.com:21222/heroku_601t64wg");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

//routes
// * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
app.get("/api/saved", function(req, res) {
    Article.find({}).exec(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
        	console.log("results from db" + doc)
            res.json(doc);
        }
    });
});
//  * `/api/saved` (post) - your components will use this to save an article to the database
app.post("/api/saved", function(req, res) {
    var entry = new Article(req.body);
    // Now, save that entry to the db
    entry.save(function(err, doc) {
        // Log any errors
        if (err) {
            console.log(err);
        }
        // Or log the doc
        else {
            console.log(doc);
        }
    });
});
//  * `/api/saved` (delete) - your components will use this to delete a saved article in the database
app.delete("/api/saved", function(req, res) {

});
// (get) - will load your single HTML page (with ReactJS) in public/index.html. 
//Make sure you put this after all other GET routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
