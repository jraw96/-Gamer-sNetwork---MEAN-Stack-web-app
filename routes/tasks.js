// This page constitutes a back end code and RESTful api. 
// A RESTful api is an application program interface that uses HTTP requests to manage data


var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router
var mongojs = require('mongojs'); // bring in mongojs

var db = mongojs('mongodb://jraw:metroidprime44@ds139567.mlab.com:39567/jakedb', ['tasks']); // This is a driver that lets us connect to the online mongodb: mlab
                                                                                              // The second parameter is an array of the collections we want. We only have tasks

//Note: req means request, res means responst, next means carry on once finished.


//This gets all tasks
router.get('/tasks', function(req, res, next){ // connect to the home page, which is a simple '/'
    db.tasks.find(function(err,tasks){ // function takes an err and tasks
        if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //if no error, return the json content
        res.json(tasks);
    });
});


// Get single tasks
router.get('/tasks/:id', function(req, res, next){ // id is a place holder, it will be different everytime
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,task){ // The object id is stored in the database. Task is changed to singular to only grab 1 object.
        if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //if no error, return the json content
        res.json(task);
    });
});


//Save tasks
router.post('/task', function(req, res, next){
   var task = req.body; 
   if(!task.title || !(task.isDone +'')){
       res.status(400);
       res.json({
           "error" : "Bad data"
       });
       
    } else {
        db.tasks.save(task, function(err, task){
                if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //if no error, return the json content
        res.json(task);
        });
    }
    
});


// Delete task. Althought the url is the same as get a single task, it is actually different because it is a delete request
router.delete('/task/:id', function(req, res, next){ // id is a place holder, it will be different everytime
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err,task){ // The object id is stored in the database. Task is changed to singular to only grab 1 object.
        if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //if no error, return the json content
        res.json(task);
    });
});



// Update task. Using the put request pertains to data that is already on the server
router.put('/task/:id', function(req, res, next){ // id is a place holder, it will be different everytime
        var task = req.body;
        var updTask = {}; // this represents the updated task. Currently an empty obejct
        
        //validation below
        if(task.isDone){
            updTask.isDone = task.isDone;
        }
        
        if(task.title){
            updTask.title = task.title;
        }
        
        //Check for actual object
        if(!updTask){
            res.status(400);
            res.json({
                "error" : "Bad data, no object"
            });
        } else {
            
     //Use udpate request here. The third paramter is an empty object
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err,task){ // The object id is stored in the database. Task is changed to singular to only grab 1 object.
        if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //Return the task in jason format
        res.json(task);
    });
    
        }
});



module.exports = router; // this means we access this page from other files
                         // we want the router