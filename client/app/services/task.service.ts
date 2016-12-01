//task.service.ts

import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';  // The Http module lets us make request to our api. Headers lets us manipulte the headers
import 'rxjs/add/operator/map'; // rxjs means reactive extensions for javascript. This is for importing observables. Get requests and send them as observables.

@Injectable() // to use the injectble we need a decorator
export class TaskService{ // create the class TaskService
    constructor(private http:Http){ //Because we are using the Http module we have the inject it into the contrusctor
        console.log('Task Service Initialized...');
    }
    //These functions are listening in on the webpage
    
    //create a function call get tasks
    getTasts(){
        return this.http.get('/api/tasks')
        //Return as an observable
        .map(res => res.json()); // return as type json
    }
    
    addTask(newTask){ //take in the newTask object from task.components.ts
        console.log(newTask);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json') // we want the content-type to be application/json. I assume json type.
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers}) // turn the newTask object into a string. The second paramter is the newTask object.
            //Time to map the request
               .map(res => res.json()); //This reads: "Map res to res.json
    }
    
    deleteTask(id){
        //issue a delete request
        return this.http.delete('http://localhost:3000/api/task/'+id) // concantenate the id
            .map(res => res.json()); 
    }
    
    updateStatus(task){
       console.log(task);
        //very similar to addTask, except change post to put
        var headers = new Headers();
        headers.append('Content-Type', 'application/json') // we want the content-type to be application/json. I assume json type.
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers}) // turn the newTask object into a string. The second paramter is the newTask object.
            //Time to map the request
               .map(res => res.json()); //This reads: "Map res to res.json
        
    }
}

