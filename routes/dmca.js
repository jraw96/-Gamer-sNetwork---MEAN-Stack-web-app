var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router

router.get('/dmca', function(req, res, next){ 
   
    //Go to the directory that will hold the profile.component.html
    res.render('../client/app/components/DMCA/DMCA.component.html');
});

module.exports = router; // this means we access this page from other files
                         // we want the router

