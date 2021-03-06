import { Component } from '@angular/core';
import { Auth } from "../../services/auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'dmca',
  templateUrl: 'dmca.component.html'
})
export class DmcaComponent { 

     profile:any;
    account:any;
    show:any;
    
constructor(private auth:Auth){
    
   //Because the profile data was saved as a string into localStorage, we need to get it back into JSON
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
    
    //Store the corresponding database for this user
    var account: any;
    account = this.profile.user_id;
    
    if(account === 'facebook|1042070685939018'){
    this.show = true;
    }else{
        this.show = false;
    }
}
}
