//task.service.ts
// Functions declared here go to the service route

import { Injectable } from '@angular/core';
import {URLSearchParams} from '@angular/http';

import {Http, Headers } from '@angular/http';  // The Http module lets us make request to our api. Headers lets us manipulte the headers
import 'rxjs/add/operator/map'; // rxjs means reactive extensions for javascript. This is for importing observables. Get requests and send them as observables.





@Injectable() // to use the injectble we need a decorator
export class TaskService{ // create the class TaskService
    constructor(private http:Http ){ //Because we are using the Http module we have the inject it into the contrusctor
        console.log('Task service reached');
    }
    //These functions are listening in on the webpage
    
    //create a function call get tasks
    getTasks(account){
        let params = new URLSearchParams; //Send the account ID as a paramter in the get request
        params.set('param1',account);
   
        
        return this.http.get('/api/tasks', {search : params})
        
        //Return as an observable
        .map(res => res.json()); // return as type json
    }
    
    
    searchTasks(searchedWord){
        
        console.log('Inside searchTasks client, searchWord: ' + searchedWord);
        
        let params = new URLSearchParams;
        params.set('param1', searchedWord);
       
        
        return this.http.get('/api/search', {search : params})
        
        //Return as observable
        .map(res => res.json());
    }
    
    
    addTask(newTask){ //take in the newTask object from task.components.ts
        console.log('This is being sent to server: ' + newTask);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json') // we want the content-type to be application/json. I assume json type.
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers}) // turn the newTask object into a string. The second paramter is the newTask object.
            //Time to map the request
               .map(res => res.json()); //This reads: "Map res to res.json
    }
    
    deleteTask(id, account){
        //issue a delete request
        let params = new URLSearchParams; //Send the account ID as a paramter in the get request
        params.set('param1',account);
        
        return this.http.delete('/api/task/'+id, {search : params}) // concantenate the id
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

