//tasks.component.ts
//Changing certain tasks to tasks2

import { Component,Input } from '@angular/core';

//Import from other places in the directory
import {TaskService} from '../../services/tasks/task.service';
import { Auth } from "../../services/auth/auth.service";

import {Task} from '../../../Task'; 


@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`,
})
export class TasksComponent { 
    
    public edit = false;
    //Add the tasks as a property in the component
    
    tasks: Task[]; // To let this file recognize the Task[] object, make sure to import the Task class from the client folder.
    title: string;
    accountID: string;
    profile: any;
    account: any;
    game: string;
    nickName: string;
    description: string;
    array: [null]
   
    
    
    constructor(private taskService:TaskService, private auth:Auth){
        
        //Copied from profile.components
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
        var account = this.profile.user_id;
       
        
        this.taskService.getTasks(account) //'this' usually means global object (window in the browser)
            .subscribe(tasks =>{
                    console.log('Inside the getTasks():' + tasks); // displays tasks inside the console
                    this.tasks = tasks; // set our tasks equal to the task coming in from the observable. Now we have access to them inside our html file
                    
                    //***************************************deleteed a '.' at the start of the line above
                });
             // because this is an observable, we need to subcribe to it
    }
    addTask(event){
        event.preventDefault();
        this.profile = JSON.parse(localStorage.getItem('profile'));
        //console.log(this.title) //this display in the browser console what was submitted in form-grop div in the html file
        var account = this.profile.user_id;
        var nickName = this.profile.nickname;
        
        console.log('account value in client: ' + account + ' with nickname: ' + nickName);
        var newTask = {
            title: this.title, // this.title is equal to whatever is typed in for title
            description: this.description,
            accountID: account,
            nickName: nickName,
            isDone: false,
            editMode: false
           
        }   
        
        //To push to the brower and have it displayed temporarily:
        //this.tasks.push(newTask);
        this.taskService.addTask(newTask) // here addTask belongs to taskService, which is in task.Service.js, which is in the services folder
            .subscribe(data => {
                console.log('Checking an addTask data: ');
                console.log(data);
                this.tasks.push(data);
                //clear the form:
                this.title = '';
        })
    }
    
    /*
    searchTasks(event){
        
       
        var gameObj = { game : this.game};
        var gameName = gameObj.game; // get a string of the title of the game
        
        console.log('Attempting to use searchTask');
        this.taskService.searchTasks(gameName);
            .subscribe(data => {
                this.tasks.push(data);
                //Clear the form somehow
            })
       
    }
    */
    
    deleteTask(id){
        var tasks = this.tasks; // take in a tasks and set it to the current tasks
        //Copied from profile.components
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
        var account = this.profile.user_id;
        
        this.taskService.deleteTask(id, account)
            .subscribe(data =>{ // The function for deleteTask will be found inside the file task.server.ts. Becuse this is an observable, we have to subscribe
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
            isDone: !task.isDone,
            accountID: task.accountID,
            editMode: !task.editMode,
            nickName: task.niceName
        };
        //Call a service function to send the new data
        this.taskService.updateStatus(_task)
            .subscribe(data =>{ // pass in the object paramters
                task.isDone = !task.isDone; // update the boolean value of task. 
                task.editMode = !task.editMode; // update boolean of the edit mode button
        })
    }
    
    clicked(){
        this.edit = !this.edit;
    }
    
   
} // This is the class name: TasksComponent

