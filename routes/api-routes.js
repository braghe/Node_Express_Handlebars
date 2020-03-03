var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burger", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Burger.findAll({}).then(function (result) {
      res.json(result);
    });

  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/burger", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Burgers.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(results) {
      res.json(results);
    });

  });
}