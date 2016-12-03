//This page is documentation from Auth0.com

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('pSR4qKP1S8WD843b2BfIYWQPB62ih15e', 'jraw.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult:any) => {
        
        //Save data about logged in profile. Pull the auth result object declared above into the paramtes below
        // Also included in the paramters below is a callback function
        this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
            if(error){
                throw new Error(error);
            }
            //Localstorage can only store strings
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile));
        });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  };
}
