import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public loginValid = true;
public firstname = '';
public lastname = '';
public address = '';
public email = '';
public mobilenumber = '';
public LocalStorage: any;
private readonly returnUrl: string;
loggedin:any;
constructor(
private _route: ActivatedRoute,
private _router: Router,


) {
this.returnUrl = this._route.snapshot.queryParams['returnUrl']
|| '/home';
}
public onSubmit(): void {
this.loginValid = true;
let firstname = "";
let lastname = "";
let address = "";
let email = "";
let mobilenumber = "";
if (this.firstname == firstname  && this.lastname == lastname) {
localStorage.setItem('is_loggedin', "yes");
this._router.navigateByUrl(this.returnUrl);
} else {
console.log("invalid username password");
}
}
}