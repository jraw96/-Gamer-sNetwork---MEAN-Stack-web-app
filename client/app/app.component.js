"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('./services/tasks/task.service');
var auth_service_1 = require('./services/auth/auth.service');
var AppComponent = (function () {
    function AppComponent(auth) {
        //Because the profile data was saved as a string into localStorage, we need to get it back into JSON
        /*
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
        
        //Store the corresponding database for this user
        var account = this.profile.user_id;
        
        
        if(account === 'facebook|1042070685939018'){
        this.show = true;
        }else{
            this.show = false;
        }
        
      }
      */
        this.auth = auth;
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: "app.component.html",
            providers: [task_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map