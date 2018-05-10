import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  isOpen: boolean = false;
  viewOpen: boolean = false;
  loggedIn: boolean = true;
  showFiller = false;
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

  openView() {
    this.viewOpen = true;
  }

  closeView() {
    this.viewOpen = false;
  }

}
