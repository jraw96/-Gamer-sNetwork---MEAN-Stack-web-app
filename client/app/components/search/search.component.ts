import { Component } from '@angular/core';
import {TaskService} from '../../services/tasks/task.service';
import { Auth } from "../../services/auth/auth.service";

import {Task} from '../../../Task'; 

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent { 


    tasks: Task[]; // To let this file recognize the Task[] object, make sure to import the Task class from the client folder.
    title: string;
    accountID: string;
    profile: any;
    account: any;
    game: string;
    nickName: string;
    description: string;
    searchWord: string;
    results: [{}];
    
    
   //var resultArray = new Array();
    
    
    constructor(private taskService:TaskService ){ }
        
    
        
        
        //Only function is to search for tasks
        searchTasks(event){
            event.preventDefault();
            
            var word ={ searchWord: this.searchWord }
            
            var searchedWord = word.searchWord;
            
            console.log('Search word object: ' + searchedWord);
            
             this.taskService.searchTasks(searchedWord) // here addTask belongs to taskService, which is in task.Service.js, which is in the services folder
                .subscribe(data => {
                    console.log('Data');
                    console.log(data);
                    console.log('Test beneath for nickname');
                    console.log(data[1].nickName);
                    console.log('Array size recieved: '+ data.length);
                    //Data is the array of objects from the found games
                    
                    this.results = data;
                    //this.tasks.push(this.results);
                    
                    //this.tasks.push(data);
                    //clear the form:
                   
                   
        })
            
       }
}

