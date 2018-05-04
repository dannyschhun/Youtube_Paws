import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  isValid = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.userService.registerUser(this.user).subscribe(users => {
      if (users == null) {
        this.isValid = !this.isValid;
      } else {
        this.userService.subscribers.next(users);
        console.log(`User, ${this.user.username}, successfully registered!`);
        this.router.navigate(['login']);
      }
    });
  }

}
