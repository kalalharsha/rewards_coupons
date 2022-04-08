import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  
  link="./src/app/admin/add-game";



  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.link="./src/app/admin/add-game";
   }
   clickMethod()
   {
    this._router.navigate(['/admin/add-game'])
  }
  }


