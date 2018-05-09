import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isOpen = false;
  viewOpen = false;
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;
  showFiller = false;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

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

  logout() {
    localStorage.clear();
    this.userService.loggedIn.next(false);
    this.router.navigate(['login']);
  }

}
