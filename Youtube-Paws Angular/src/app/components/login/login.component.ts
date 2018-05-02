import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser = localStorage.getItem('user');
  isValid = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // if (this.loggedUser != null) {
    //   this.userService.subscribers.next(JSON.parse(localStorage.getItem('user')));
    //   // localStorage.setItem('user', JSON.stringify(this.user));
    //   this.router.navigate(['dashboard']);
    // }
  }

  // login() {
  //   this.userService.loginUser(this.user).subscribe(users => {
  //     if (users == null) {
  //       this.isValid = !this.isValid;
  //     } else {
  //       this.userService.subscribers.next(users);
  //       this.userService.loggedIn.next(true);
  //       localStorage.setItem('user', JSON.stringify(users));
  //       console.log(`User, ${this.user.ersUsername}, successfully logged in!`);
  //       console.log(localStorage.getItem('user'));
  //       this.router.navigate(['dashboard']);
  //     }
  //   });
  // }
}

