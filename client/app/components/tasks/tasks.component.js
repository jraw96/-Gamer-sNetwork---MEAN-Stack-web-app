//tasks.component.ts
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
//Import from other places in the directory
var task_service_1 = require('../../services/task.service');
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTasts() //'this' usually means global object (window in the browser)
            .subscribe(function (tasks) {
            //console.log(tasks); // displays tasks inside the console
            _this.tasks = tasks; // set our tasks equal to the task coming in from the observable. Now we have access to them inside our html file
            //***************************************deleteed a '.' at the start of the line above
        });
        // because this is an observable, we need to subcribe to it
    }
    TasksComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        //console.log(this.title) //this display in the browser console what was submitted in form-grop div in the html file
        var newTask = {
            title: this.title,
            isDone: false
        };
        //To push to the brower and have it displayed temporarily:
        //this.tasks.push(newTask);
        this.taskService.addTask(newTask) // here addTask belongs to taskService, which is in task.Service.js, which is in the services folder
            .subscribe(function (task) {
            _this.tasks.push(task);
            //clear the form:
            _this.title = '';
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks; // take in a tasks and set it to the current tasks
        this.taskService.deleteTask(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TasksComponent.prototype.updateStatus = function (task) {
        //create a new object to update with:
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        //Call a service function
        this.taskService.updateStatus(_task).subscribe(function (data) {
            task.isDone = !task.isDone; // update the boolean value of task. 
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks',
            templateUrl: "tasks.component.html"
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent; // This is the class name: TasksComponent
//# sourceMappingURL=tasks.component.js.map