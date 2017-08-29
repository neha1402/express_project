var express = require('express');
var router = express.Router();

/* GET page1. */
router.get('/', function(req, res, next) {
  res.render('page1', { title1: 'Menu:' });
});

//Neha : need this for the click button on Page 1 to go to Page 2
router.post('/page2', function(req, res){
	res.redirect('/page2');
});

module.exports = router;
