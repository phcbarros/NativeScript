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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var router_2 = require('nativescript-angular/router');
var login_component_1 = require('./pages/login/login.component');
var list_component_1 = require('./pages/list/list.component');
var http_1 = require("angular2/http");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_2.NS_ROUTER_DIRECTIVES],
            providers: [router_2.NS_ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS],
            template: '<page-router-outlet></page-router-outlet>'
        }),
        router_1.RouteConfig([
            { path: '/Login', component: login_component_1.LoginPage, name: 'Login', useAsDefault: true },
            { path: '/List', component: list_component_1.ListPage, name: 'List' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBNEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM5Qyx1QkFBMEQsNkJBQTZCLENBQUMsQ0FBQTtBQUN4RixnQ0FBMEIsK0JBQStCLENBQUMsQ0FBQTtBQUMxRCwrQkFBeUIsNkJBQTZCLENBQUMsQ0FBQTtBQUN2RCxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFZN0M7SUFBQTtJQUEyQixDQUFDO0lBVjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLDZCQUFvQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUFtQixFQUFFLHFCQUFjLENBQUM7WUFDaEQsUUFBUSxFQUFFLDJDQUEyQztTQUN0RCxDQUFDO1FBQ0Qsb0JBQVcsQ0FBQztZQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMkJBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7WUFDM0UsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx5QkFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7U0FDcEQsQ0FBQzs7b0JBQUE7SUFDeUIsbUJBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsb0JBQVksZUFBRyxDQUFBIn0=