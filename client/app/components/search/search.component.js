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
var task_service_1 = require('../../services/tasks/task.service');
var SearchComponent = (function () {
    //var resultArray = new Array();
    function SearchComponent(taskService) {
        this.taskService = taskService;
    }
    //Only function is to search for tasks
    SearchComponent.prototype.searchTasks = function (event) {
        var _this = this;
        event.preventDefault();
        var word = { searchWord: this.searchWord };
        var searchedWord = word.searchWord;
        console.log('Search word object: ' + searchedWord);
        this.taskService.searchTasks(searchedWord) // here addTask belongs to taskService, which is in task.Service.js, which is in the services folder
            .subscribe(function (data) {
            console.log('Data');
            console.log(data);
            console.log('Test beneath for nickname');
            console.log(data[1].nickName);
            console.log('Array size recieved: ' + data.length);
            //Data is the array of objects from the found games
            _this.results = data;
            //this.tasks.push(this.results);
            //this.tasks.push(data);
            //clear the form:
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map