import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../models/Users';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nav: NavComponent;
  count: number;
  user: Users = new Users();
  loggedUser = localStorage.getItem('user');
  isValid = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.loggedUser != null) {
      this.userService.subscribers.next(JSON.parse(localStorage.getItem('user')));
      this.router.navigate(['home']);
    }
  }

  login() {
    this.userService.loginUser(this.user).subscribe(users => {
      if (users == null) {
        this.isValid = !this.isValid;
      } else {
        this.userService.subscribers.next(users);
        localStorage.setItem('time', JSON.stringify(this.count));
        localStorage.setItem('user', JSON.stringify(users));
        this.userService.loggedIn.next(true);
        console.log(`User, ${this.user.username}, successfully logged in!`);
        this.router.navigate(['home']);
      }
    });
  }
}

