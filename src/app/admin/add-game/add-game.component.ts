import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  link="./admin/second-add-game";
  constructor(
    private _route: ActivatedRoute,
     private _router:Router,
  ) { this.link="./admin/second-add-game";
}
clickMethod(){
 this._router.navigate(['./admin/second-add-game'])
}
 
  ngOnInit(): void {
  }

}
