// This page constitutes a back end code and RESTful api. 
// A RESTful api is an application program interface that uses HTTP requests to manage data



var express = require('express'); // bring in express
var router = express.Router(); // brings in the express router
var mongojs = require('mongojs'); // bring in mongojs

//Deleted this from the second paramter: ['tasks2']



var db = mongojs('mongodb://jraw:metroidprime44@ds139567.mlab.com:39567/jakedb'); // This is a driver that lets us connect to the online mongodb: mlab
                                                                                              // The second parameter is an array of the collections we want. We only have tasks



//Note: req means request, res means responst, next means carry on once finished.

//This gets all tasks
router.get('/tasks', function(req, res, next){ // connect to the home page, which is a simple '/'
 
   var boko = req.query.param1; // param1 = auth0 id
   
   
   console.log('Get section: ' + boko);
   
    db[boko].find(function(err,tasks){ // function takes an err and tasks
        if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //if no error, return the json content
        res.json(tasks);
    });
});


//Search for a game title in the database
router.get('/search', function(req, res, next){
    
    var game = req.query.param1; // Save the game search that was included the get paramter as a string
     console.log('Searched game: ' + game);

     var array = new Array();
     var counter = 0;
     var total = 0;

          db.userList.find({}).forEach(function(err, item){
         //console.log(item.authID);

        try{
 
        if(item === null) throw "Total number of users in database found. Now searching if they play the searched game.";
         var temp = item.authID;
         console.log(temp);
         array.push(temp); // add each authID form the userList to an array
         counter = counter + 1;
         console.log('counter total: ' + counter);
         console.log('Array value: '+ array[counter - 1]);
         
        }
             
        catch(err){ // This is so bad writing the rest of the code here
   
          console.log('Value of counter: ' + counter);
          console.log(err);  
          console.log(' ');
          
          try{
          //Find the account names that have the selected games, then send all the users with their names, games and descriptions to a new collection called SearchQueue. This will display all the account data  
        
                      
                      
                      
       var jsonArray = new Array();
        
    
        var secondsToWait = 1000;
        setTimeout(function() {         
                
        var key = 1;
        
        var counter2 = 0;
        
        for( var i = 0; i <= counter - 1; i++){ // PROBLEM STARTS HERE
        db[array[i]].findOne({"title" : game}, function(err,item){

         
        if(item === null){
            console.log('NULL CASE WOO');
            counter2 = counter2 + 1;
            key = 0;
        }
        if (key === 1){
        
         var boko = item.accountID;
         var goko = item.title;
         console.log('boko: ' + boko);
         console.log('goko: ' + goko);   
         console.log('Inside first condition');
         console.log(item);
         console.log('Before assign item data');
        //if(i === counter) throw "No more users with this game";      
         db.searchQueue.save({"title" : boko}, {"game" : goko });   
         console.log('Tried to save: ' + goko);
         console.log('waited 1 sec');// Whatever you want to do after the wait
        
         var entry = 'User: ' + boko + ' Game: ' + goko;
        
         console.log('Entry value: ' + entry);
         jsonArray.push(item);
         counter2 = counter2 + 1;
         
         
         
         console.log('Value of counter at this moment under counter2' + counter);
         console.log('');

        //After the final interationof the for loop
    
        } // end of key
        
        console.log(' Important value of counter2:' + counter2);
        console.log('Important value of counter' + counter);
        
        if(counter2 === counter){
            res.json(jsonArray);
        }
        
        key = 1; //lock the key again
        console.log('--------------------------------------------');
          }); // End of item scope
          
        } // end of for loop -- FOR LOOP ENDS HERE
         
        
          console.log('Finished for loop');
 
          }, secondsToWait);
          
   
          
         } catch(err){
             console.log(err);
             console.log('Done inserting into the userQueue');
        }
       } // END OF FIRST CATCH
        
       // console.log('Value of counter: ' + counter);
     });
   console.log('Sweet spot?');
   
});




// Get single tasks
router.get('/tasks/:id', function(req, res, next){ // id is a place holder, it will be different everytime
    var boko = req.body;
    
    db[boko.acountID].findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,task){ // The object id is stored in the database. Task is changed to singular to only grab 1 object.
        if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //if no error, return the json content
        res.json(task);
    });
});


//Save tasks
router.post('/task', function(req, res, next){
    
    
   var boko = req.body;
   
   console.log('In the post section account ID:' + boko.accountID);
   console.log('Associated nick name of above ID:' + boko.nickName);
   
   
   //db.userList.save({"authID": boko.accountID});
    
   db.userList.findOne({'authID' : boko.accountID}, function(err,item){
      
       if(err){
           res.send(err);
       }
       
       
       if(item === null){ //If the user id has never enterd their data before, create a new document
           db.userList.save({"authID": boko.accountID}, {"nickName": boko.nickName}, {"description":boko.description});
       }  else if(item.authID !== boko.accountID){ // if the current user id is not in the userlist, add it to the list
           db.userList.save({"authID": boko.accountID}, {"nickName": boko.nickname}, {"description": boko.description});
           console.log('New user added to userList!');
       } else {
           console.log('Returning user.');
       }
       
   });

  
  console.log('Passing anyway');



   var task = req.body; 
   if(!task.title || !(task.isDone +'')){
       res.status(400);
       res.json({
           "error" : "Bad data"
       });
       
    } else {
        
        db[boko.accountID].save(task, function(err, task){
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
    var boko = req.query.param1;
    
    console.log('delete section: ' + boko);
    db[boko].remove({_id: mongojs.ObjectId(req.params.id)}, function(err,task){ // The object id is stored in the database. Task is changed to singular to only grab 1 object.
        if(err){ // check for an error
            res.send(err); //send the error if there is one.
        }
        
        //if no error, return the json content
        res.json(task);
    });
});



// Update task. Using the put request pertains to data that is already on the server
router.put('/task/:id', function(req, res, next){ // id is a place holder, it will be different everytime
    
        var boko = req.body;
        console.log('Put section: '+ boko);
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
    db[boko.accountID].update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err,task){ // The object id is stored in the database. Task is changed to singular to only grab 1 object.
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