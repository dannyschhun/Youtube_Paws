import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  countDown;
  isOpen = false;
  viewOpen = false;
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;
  timed = false;
  showFiller = false;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  path: any = 'assets/mytubepaws.png';

  ngOnInit() {
  }

countdown() {
  let count = JSON.parse(localStorage.getItem('time'));
  count = count * 60;
  this.timed = true;
  this.countDown = timer(0, 1000).pipe(
    take(count),
    map(() => --count)
 );
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
    localStorage.removeItem('user');
    localStorage.removeItem('time');
    this.userService.loggedIn.next(false);
    this.timed = false;
    this.router.navigate(['login']);
  }

}
