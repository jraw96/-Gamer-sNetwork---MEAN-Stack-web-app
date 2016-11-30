//tasks.component.ts

import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`
})
export class TasksComponent { 
    constructor(private taskService:TaskService){
        this.taskService.getTasts() //'this' usually means global object (window in the browser)
            .subscribe(tasks =>{
                    console.log(tasks);
                });
             // because this is an observable, we need to subcribe to it
    }
} // This is the class name: TasksComponent

