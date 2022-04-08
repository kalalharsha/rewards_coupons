import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
selector: 'app-layout',
templateUrl: './layout.component.html',
styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
constructor(private router:Router) {
}
public logout(): void {
localStorage.clear();
this.router.navigateByUrl("/");
}
}
