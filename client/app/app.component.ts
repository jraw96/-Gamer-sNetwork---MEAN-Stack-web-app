import { Component } from '@angular/core';

import {TaskService} from './services/tasks/task.service';
import { Auth } from './services/auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [TaskService]
})
export class AppComponent {
    
    
    profile:any;
    show:any;
    
    constructor(private auth:Auth){
        
 //Because the profile data was saved as a string into localStorage, we need to get it back into JSON
    /*
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
    
    //Store the corresponding database for this user
    var account = this.profile.user_id;
    
    
    if(account === 'facebook|1042070685939018'){
    this.show = true;
    }else{
        this.show = false;
    }
    
  }
  */

    }
}