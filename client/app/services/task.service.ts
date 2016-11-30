//task.service.ts

import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';  // The Http module lets us make request to our api. Headers lets us manipulte the headers
import 'rxjs/add/operator/map'; // rxjs means reactive extensions for javascript. This is for importing observables. Get requests and send them as observables.

@Injectable() // to use the injectble we need a decorator
export class TaskService{ // create the class TaskService
    constructor(private http:Http){ //Because we are using the Http module we have the inject it into the contrusctor
        console.log('Task Service Initialized...');
    }
    
    
    //create a function call get tasks
    getTasts(){
        return this.http.get('http://localhost:3000/api/tasks')
        //Return as an observable
        .map(res => res.json()); // return as type json
    }
    
}

