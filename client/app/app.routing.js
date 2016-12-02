//app.routing.ts
"use strict";
var router_1 = require('@angular/router');
var home_component_js_1 = require('./components/home/home.component.js');
var profile_component_js_1 = require('./components/profile/profile.component.js');
var appRoutes = [
    {
        path: '',
        component: home_component_js_1.HomeComponent
    },
    //Create a path for our profile
    {
        path: 'profile',
        component: profile_component_js_1.ProfileComponent
    }
];
exports.appRoutingProviders = []; // set to any array and set it to an empty array
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//This file needs to be imported into app.module.ts 
//# sourceMappingURL=app.routing.js.map