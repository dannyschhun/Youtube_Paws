import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;

  search: String = '';
  query: String = '';

  index: number;

  constructor(private router: Router, private viewService: ViewService) {
       if (!this.loggedIn) {
      this.router.navigate(['login']);
       }
      this.viewService.index.subscribe(index =>{
        this.index = index;
      }); 
  }

  ngOnInit() {
    
  }

  searched() {
    this.router.navigate(['aftermath/' + this.search]);
  }
}
