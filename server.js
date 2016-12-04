/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');  // brings in express from the node module
var path = require('path'); // helps with file system paths
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
//For Authentication, require home and routes to each have their own page

var profile = require('./routes/profile');
var home = require('./routes/home');
var dmca = require('./routes/dmca');


var port = 3000; 

var app = express();

var userCollection; //Hopefully this works


//View Engine
//app.set('client', path.join(__dirname,'client'));
app.set('views', path.join(__dirname,'views')); // this tells the system our views will be in the fiews folder


app.set('view engine','ejs'); // specifies which engine we are using. We are using ejs
app.engine('html',require('ejs').renderFile); // sets up view engine completely

//TIme to make a static folder to put all the angular stuff
app.use(express.static(path.join(__dirname,'client'))); // This means put all the angular 2 stuff in the client folder


//Body Parser middleware
app.use(bodyParser.json()); // lets us parse json
app.use(bodyParser.urlencoded({extended: false})); // standed documentation

// Everything up to this line is standard opening documentation -------------------------------





app.use('/',index, profile, home, dmca); // the slash in the first paramters means just the homepage, which is now associated with the index route file
app.use('/api', tasks); // this is for using the api



app.listen(port, function(){ // function() is a callback function that does soemthing when we connect
    console.log('Server started on port' + port);

}); // for turning on the server. 
