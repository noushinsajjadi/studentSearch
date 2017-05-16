// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // TODO: this should come from your db.Student.find({})
  app.get('/api/students', function (req, res) {
    res.json([
      {
        first_name: 'Hello',
        last_name: 'World'
      }
    ])
  })
};

app.post("/api/students", function(req, res) {
    console.log(req.body);
    db.kcl6miep2uulocar.create(req.body).then(function(db) {
      res.json(dbkcl6miep2uulocar);
    });
  });
