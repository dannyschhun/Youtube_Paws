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
  userCheck: User = new User();
  isValid = true;
  isMatch = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    // Check for matching passwords
    if (this.user.password !== this.userCheck.password) {
      this.isMatch = !this.isMatch;
    } else {
      // Go to user services register users
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

}
