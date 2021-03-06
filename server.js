var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars")

// Requiring our models for syncing
//var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./controllers/burgerControllers.js")(app);
var routes = require("./controllers/burgerControllers");
app.use(routes)

// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
