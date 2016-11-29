var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router

router.get('/', function(req, res, next){ // connect to the home page, which is a simple '/'
    //res.send('INDEX PAGE'); // displays INDEX PAGE in web brower
    //For displaying the html page
    res.render('index.html');
});

module.exports = router; // this means we access this page from other files
                         // we want the router