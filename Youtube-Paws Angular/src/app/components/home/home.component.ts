import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;

  search: String = '';
  query: String = '';

  constructor(private router: Router) {
    if (!this.loggedIn) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {

  }

  searched() {
    this.router.navigate(['aftermath/' + this.search]);
  }
}
