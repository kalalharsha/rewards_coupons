import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedin:any;


  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) {

   }

  ngOnInit(): void {
    this.isLoggedin=
    localStorage.getItem("is_loggedin")?.toString();
    if(this.isLoggedin!="yes"){
      this._router.navigateByUrl('/login');
    }
  }

}

