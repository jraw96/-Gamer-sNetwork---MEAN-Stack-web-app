//app.routing.ts

import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component.js';
import { ProfileComponent } from './components/profile/profile.component.js';
import { DmcaComponent } from './components/DMCA/dmca.component.js';

const appRoutes: Routes= [ //set appRoutes to an array. Inside the array we will define our routes
  {
      path: '', // this will be the home page, and will have a blank route.
      component: HomeComponent
  },
  
  //Create a path for our profile
  {
      path: 'profile',
      component: ProfileComponent
  },  
  
  //DMCA path:
  {
      path: 'dmca',
      component: DmcaComponent
      
  }

];

export const appRoutingProviders: any[] = []; // set to any array and set it to an empty array
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

//This file needs to be imported into app.module.ts