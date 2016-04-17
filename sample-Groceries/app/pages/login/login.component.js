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
var user_1 = require('../../shared/user/user');
var user_service_1 = require('../../shared/user/user.service');
var frame_1 = require('ui/frame');
var color_1 = require('color');
var hint_util_1 = require("../../utils/hint-util");
var LoginPage = (function () {
    function LoginPage(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = 'user@nativescript.org'; //'paulohcbarros@outlook.com';
        this.user.password = 'password'; //'teste';
    }
    LoginPage.prototype.ngOnInit = function () {
        this.page = frame_1.topmost().currentPage;
        this.page.actionBarHidden = true;
        this.page.backgroundImage = this.page.ios ? 'res://bg_login.jpg' : 'res://bg_login';
    };
    LoginPage.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert('Enter a valide email address.');
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function () { return _this._router.navigate(['List']); }, function (error) { return alert('Unfortunately we could not find your account.'); });
    };
    LoginPage.prototype.signUp = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            alert('Your account was successfully created.');
            _this.toggleDisplay();
        }, function () { return alert('Unfortunately we were unable to create your account.'); });
    };
    LoginPage.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var backgroundColor = this.isLoggingIn ? new color_1.Color('white') : new color_1.Color('#301217');
        this.page.getViewById('container').animate({
            backgroundColor: backgroundColor,
            duration: 200
        });
    };
    LoginPage.prototype.setTextFieldColors = function () {
        var email = this.page.getViewById("email");
        var password = this.page.getViewById("password");
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        email.color = mainTextColor;
        password.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: email, color: hintColor });
        hint_util_1.setHintColor({ view: password, color: hintColor });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'my-loggin',
            templateUrl: 'pages/login/login.html',
            styleUrls: ['pages/login/login-common.css', 'pages/login/login.css'],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMscUJBQXFCLHdCQUF3QixDQUFDLENBQUE7QUFDOUMsNkJBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0Qsc0JBQXdCLFVBQVUsQ0FBQyxDQUFBO0FBRW5DLHNCQUFzQixPQUFPLENBQUMsQ0FBQTtBQUM5QiwwQkFBNkIsdUJBQXVCLENBQUMsQ0FBQTtBQVNyRDtJQVdFLG1CQUFvQixPQUFlLEVBQVUsWUFBeUI7UUFBbEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBVHRFLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBVTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyx1QkFBdUIsQ0FBQyxDQUFBLDhCQUE4QjtRQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxVQUFVO0lBQzdDLENBQUM7SUFWRCw0QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBUyxlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFvQixHQUFHLGdCQUFnQixDQUFDO0lBQ3RGLENBQUM7SUFRTSwwQkFBTSxHQUFiO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFD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