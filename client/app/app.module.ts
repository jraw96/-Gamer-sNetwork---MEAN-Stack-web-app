//This file kind of acts like a meeting file for all the components


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Importing from other directories
import { AppComponent }  from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

