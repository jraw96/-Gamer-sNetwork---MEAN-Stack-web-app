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
    constructor(private auth:Auth){}
  }

