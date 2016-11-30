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
var task_service_1 = require('../../services/task.service');
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.taskService.getTasts() //'this' usually means global object (window in the browser)
            .subscribe(function (tasks) {
            console.log(tasks);
        });
        // because this is an observable, we need to subcribe to it
    }
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