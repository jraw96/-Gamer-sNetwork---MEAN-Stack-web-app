//task.service.ts
// Functions declared here go to the service route
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http'); // The Http module lets us make request to our api. Headers lets us manipulte the headers
require('rxjs/add/operator/map'); // rxjs means reactive extensions for javascript. This is for importing observables. Get requests and send them as observables.
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        console.log('Task service reached');
    }
    //These functions are listening in on the webpage
    //create a function call get tasks
    TaskService.prototype.getTasks = function (account) {
        var params = new http_1.URLSearchParams; //Send the account ID as a paramter in the get request
        params.set('param1', account);
        return this.http.get('/api/tasks', { search: params })
            .map(function (res) { return res.json(); }); // return as type json
    };
    /*
    searchTasks(gameName){
        console.log('Inside injectable');
        let params = new URLSearchParams;
        params.set('param1', gameName);
       
        
        return this.http.get('./api/search')
        
        //Return as observable
        .map(res => res.json());
    }
    */
    TaskService.prototype.addTask = function (newTask) {
        console.log('This is being sent to server: ' + newTask);
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json'); // we want the content-type to be application/json. I assume json type.
        return this.http.post('/api/task', JSON.stringify(newTask), { headers: headers }) // turn the newTask object into a string. The second paramter is the newTask object.
            .map(function (res) { return res.json(); }); //This reads: "Map res to res.json
    };
    TaskService.prototype.deleteTask = function (id, account) {
        //issue a delete request
        var params = new http_1.URLSearchParams; //Send the account ID as a paramter in the get request
        params.set('param1', account);
        return this.http.delete('http://localhost:3000/api/task/' + id, { search: params }) // concantenate the id
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateStatus = function (task) {
        console.log(task);
        //very similar to addTask, except change post to put
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json'); // we want the content-type to be application/json. I assume json type.
        return this.http.put('/api/task/' + task._id, JSON.stringify(task), { headers: headers }) // turn the newTask object into a string. The second paramter is the newTask object.
            .map(function (res) { return res.json(); }); //This reads: "Map res to res.json
    };
    TaskService = __decorate([
        // rxjs means reactive extensions for javascript. This is for importing observables. Get requests and send them as observables.
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_2.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map