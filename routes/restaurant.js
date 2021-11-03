var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('restarunt', { title: 'restarunt Search Results' });
});

module.exports = router;