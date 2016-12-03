//This file kind of acts like a meeting file for all the components. Component HUB.

//Using angular things
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Auth0 thing
import { AUTH_PROVIDERS } from 'angular2-jwt';

//App component
import { AppComponent }  from './app.component';


//Importing Services
import { TasksComponent } from './components/tasks/tasks.component';
import {Auth} from './services/auth/auth.service';
import {AuthGuard} from './services/auth/auth.guard';


//Importing component directories
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { DmcaComponent } from './components/DMCA/dmca.component';



//Importing routing directories
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ], // In the imports, routing was made in app.routing.ts as RouterModule object
  declarations: [ AppComponent, TasksComponent, HomeComponent, ProfileComponent, DmcaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ appRoutingProviders, AUTH_PROVIDERS, Auth, AuthGuard ]
})
export class AppModule { }

