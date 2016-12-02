import { Component } from '@angular/core';
import {TaskService} from './services/task.service';

//import { HomeComponent } from './components/home/home.component';
//import { ProfileComponent } from './components/profile/profile.component';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [TaskService]
})
export class AppComponent { }

