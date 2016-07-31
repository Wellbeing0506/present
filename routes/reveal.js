var express = require('express');
var reveal = express.Router();

/* GET home page. */
reveal.get('/week/:id', function(req, res, next) {
  res.render('reveal/week/'+req.params.id, { title: 'Weekly-' + req.params.id});
});

reveal.get('/beacon/:id', function(req, res, next) {
  res.send(req.params);
});

reveal.get('/other/:id', function(req, res, next) {
  res.send(req.params);
});

module.exports = reveal;
