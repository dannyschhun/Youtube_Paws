import { Component, OnInit } from '@angular/core';
import { PageLayout } from '../../models/PageLayout';
import { UserService } from '../../services/user.service';
import { Users } from '../../models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public layout = new PageLayout();
  user = new Users;
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  ngOnInit() {
  }

  chooseLayout() {
    let i = 0;


    if (this.loggedIn) {
      this.user = JSON.parse(localStorage.getItem('user'));
    for (i; i < this.user.userPageLayout.length; i++) {
      }
      this.user.userPageLayout[i] = new PageLayout();
      this.user.userPageLayout[i].layoutName = this.layout.layoutName;
      this.user.userPageLayout[i].searchBarLoc = this.layout.searchBarLoc;
      this.user.userPageLayout[i].video1Loc = this.layout.video1Loc;
      this.user.userPageLayout[i].video2Loc = this.layout.video2Loc;

      this.userService.addPageLayout(this.user.userPageLayout[i]).subscribe(layout => {
          console.log(layout);
          this.user.userPageLayout[i].id = layout.id;
          console.log(this.user.userPageLayout[i]);
          this.userService.updateUser(this.user).subscribe(users => {
            console.log(users);
          });
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(this.user));
      });
    }
    }
  }
