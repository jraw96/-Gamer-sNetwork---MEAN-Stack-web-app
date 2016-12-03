import { Component } from '@angular/core';
import { Auth } from "../../services/auth/auth.service";

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
constructor(private auth:Auth){}
 }