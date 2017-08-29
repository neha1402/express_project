var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Neha : Need to add this section of code
//when your app.js controller comes to index.js
//it will look to post when the button gets CLICKED
//it needs to go to the page1 - thats needs to be told here
// and then to the next page2 and return back to index page

router.post('/page1', function(req, res){
	res.redirect('/page1');
});

//Neha : need this for the click button on Page 1 to go to Page 2
router.post('/page2', function(req, res){
	res.redirect('/page2');
});

/*Neha : if you want to return to the main page */

router.post('/', function(req, res){
	res.redirect('/');
});

module.exports = router;
