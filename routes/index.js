var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = require("../data/custobovDB")
  res.render('index', { title: 'Jefferson gostoso' });
});

module.exports = router;
