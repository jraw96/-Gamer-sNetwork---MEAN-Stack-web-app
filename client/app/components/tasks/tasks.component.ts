//tasks.component.ts

import { Component } from '@angular/core';

//Import from other places in the directory
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task'; 

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`
})
export class TasksComponent { 
    
    //Add the tasks as a property in the component
    tasks: Task[]; // To let this file recognize the Task[] object, make sure to import the Task class from the client folder.
    title: string;
    
    constructor(private taskService:TaskService){
        this.taskService.getTasts() //'this' usually means global object (window in the browser)
            .subscribe(tasks =>{
                    //console.log(tasks); // displays tasks inside the console
                    .this.tasks = tasks; // set our tasks equal to the task coming in from the observable. Now we have access to them inside our html file
                    
                });
             // because this is an observable, we need to subcribe to it
    }
    addTask(event){
        event.preventDefault();
        //console.log(this.title) //this display in the browser console what was submitted in form-grop div in the html file
        var newTask = {
            title: this.title, // this.title is equal to whatever is typed in
            isDone: false
        }   
        
        //To push to the brower and have it displayed temporarily:
        //this.tasks.push(newTask);
        this.taskService.addTask(newTask) // here addTask belongs to taskService, which is in task.Service.js, which is in the services folder
            .subscribe(task => {
                this.tasks.push(task);
                //clear the form:
                this.title = '';
        })
    }
    
    deleteTask(id){
        var tasks = this.tasks; // take in a tasks and set it to the current tasks
        
        this.taskService.deleteTask(id).subscribe(data =>{ // The function for deleteTask will be found inside the file task.server.ts. Becuse this is an observable, we have to subscribe
            if(data.n == 1){ //Loop through the task to find the one with the id we are looking for
                for (var i = 0; i< tasks.length; i++){
                    if(tasks[i]._id == id){ // if the _id on the tasks matches the id past in
                        tasks.splice(i,1);
                    }
                }
            }
        });
    }
    
    updateStatus(task){
        //create a new object to update with:
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        //Call a service function
        this.taskService.updateStatus(_task).subscribe(data =>{ // pass in the object paramters
            task.isDone = !task.isDone; // update the boolean value of task. 
        })
    }
    
} // This is the class name: TasksComponent

