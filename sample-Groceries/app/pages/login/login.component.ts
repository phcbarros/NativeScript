import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
import { topmost } from 'ui/frame';
import { Page } from 'ui/page';
import { Color } from 'color';
import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

@Component({
  selector: 'my-loggin',
  templateUrl: 'pages/login/login.html',
  styleUrls: ['pages/login/login-common.css', 'pages/login/login.css'],
  providers: [UserService]
})
export class LoginPage implements OnInit {
  user: User;
  isLoggingIn: boolean = true;
  page: Page;

  ngOnInit() {
    this.page = <Page>topmost().currentPage;
    this.page.actionBarHidden = true;
    this.page.backgroundImage = this.page.ios ? 'res://bg_login.jpg' : 'res://bg_login';
  }

  constructor(private _router: Router, private _userService: UserService) {
    this.user = new User();
    this.user.email = 'user@nativescript.org';//'paulohcbarros@outlook.com';
    this.user.password = 'password'; //'teste';
  }

  public submit(): void {
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
  }

  public login() {
    this._userService.login(this.user)
      .subscribe(
      () => this._router.navigate(['List']),
      (error) => alert('Unfortunately we could not find your account.'));
  }

  public signUp() {
    this._userService.register(this.user)
      .subscribe(
      () => {
        alert('Your account was successfully created.');
        this.toggleDisplay();
      },
      () => alert('Unfortunately we were unable to create your account.'));
  }

  public toggleDisplay(): void {
    this.isLoggingIn = !this.isLoggingIn;
    this.setTextFieldColors();
    let backgroundColor: Color = this.isLoggingIn ? new Color('white') : new Color('#301217');

    this.page.getViewById('container').animate({
      backgroundColor: backgroundColor,
      duration: 200
    });
  }

  setTextFieldColors() {
    var email = <TextField>this.page.getViewById("email");
    var password = <TextField>this.page.getViewById("password");

    var mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    email.color = mainTextColor;
    password.color = mainTextColor;

    var hintColor = new Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
    setHintColor({ view: email, color: hintColor });
    setHintColor({ view: password, color: hintColor });
  }
}