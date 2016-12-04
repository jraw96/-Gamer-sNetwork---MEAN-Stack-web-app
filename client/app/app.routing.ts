//app.routing.ts

import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component.js';
import { ProfileComponent } from './components/profile/profile.component.js';
import { DmcaComponent } from './components/DMCA/dmca.component.js';
import { SearchComponent } from './components/search/search.component';

//Import authguard
import {AuthGuard } from './services/auth/auth.guard.js';

const appRoutes: Routes= [ //set appRoutes to an array. Inside the array we will define our routes
  {
      path: '', // this will be the home page, and will have a blank route.
      component: HomeComponent
  },
  
  //Create a path for our profile
  {
      path: 'profile',
      component: ProfileComponent,
      //Because this page can be blocked if not signed in, use AuthGuard
      canActivate: [AuthGuard]
  },  
  
  //DMCA path:
  {
      path: 'dmca',
      component: DmcaComponent
      
  },
  
  {
      path: 'search',
      component: SearchComponent
  }

];

export const appRoutingProviders: any[] = []; // set to any array and set it to an empty array
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

//This file needs to be imported into app.module.ts