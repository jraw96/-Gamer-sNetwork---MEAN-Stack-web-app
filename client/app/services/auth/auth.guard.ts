//Injectables so we can inject as a dependency
import {Injectable} from '@angular/core'
//Router things
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';

//Get Auth from the auth class we created in the auth folder
import { Auth } from './auth.service';

@Injectable()
    //Create a class called AuthGuard
    export class AuthGuard implements CanActivate{
        //Initialize an object of type Auth
        constructor(private auth: Auth, private router: Router){}
        
        canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ){
        //If authenticated, proceed as normal
            if(this.auth.authenticated()){
                console.log('Auth guard has passed');
                return true;
            }else{
                console.log('Cant see profile, not logged in');
                this.router.navigate(['/']); // Redirect to the home screen
                return false;
            }
        }        
}

