var express = require('express');
var router = express.Router();

/* GET  page2. */
router.get('/', function(req, res, next) {
  res.render('page2', { title2: 'Hello Neha :)' });
});

module.exports = router;
