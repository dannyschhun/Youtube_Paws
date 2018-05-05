import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  isOpen: boolean = false;
  loggedIn: boolean = true;
  constructor() { }
  path: any = 'assets/mytubepaws.png';
  ngOnInit() {
  }


  openNav() {
    this.isOpen = true;
  }

  closeNav() {
    this.isOpen = false;
  }

}
