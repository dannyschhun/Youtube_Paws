import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ViewSettings } from '../../models/ViewSettings';
import { ViewService } from '../../services/view.service';
import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Users } from '../../models/Users';
import { Tags } from '../../models/Tags';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  countDown: Observable<number> = null;
  count;
  isOpen = false;
  viewOpen = false;
  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;
  timed = false;
  showFiller = false;
  loggedUser: Users = JSON.parse(localStorage.getItem('user'));
  tag: Tags = {id: 1, name: "none"};
  category: Category = {categoryId: 1, categoryName: "none"};
  viewSettingsTemp: ViewSettings = { id: null, viewSettingsName: "Playlist", lengthMax: 12, lengthMin: 6, subscriberCountMin: 1, subscriberCountMax:2, uploadTimeMax:"2007-05-12T19:00:01.000Z", uploadTimeMin:"2018-05-08T19:00:01.000Z", ratingMin:0, ratingMax:0,categories: [null] , settingTags: [null], excludeTags: [null] };
  viewIndex: number;

  constructor(private userService: UserService, private router: Router, private viewService: ViewService) {
    this.userService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (loggedIn) {
        this.countdown();
        this.countDown.subscribe(zero => {
          if (this.count === 0) {
            this.logout();
          }
        });

        
        this.loggedUser = JSON.parse(localStorage.getItem('user'));
        console.log(this.loggedUser);
        if (this.loggedUser.userViewSettings.length === 0) {
          this.minStr = "6";
          this.maxStr = "12";
          this.minDate = "2007-05-12";
          this.maxDate = "2018-05-08";
        } else {
          this.minStr = this.loggedUser.userViewSettings[0].lengthMin.toString();
          this.maxStr = this.loggedUser.userViewSettings[0].lengthMax.toString();
          this.minDate = this.loggedUser.userViewSettings[0].uploadTimeMin.split("T")[0];
          this.maxDate = this.loggedUser.userViewSettings[0].uploadTimeMax.split("T")[0];
        }
      }
      });

    }

    minStr: string;
  maxStr: string;
  min: number;
  max: number;
  minDate: string;
  maxDate: string;
  viewName: string;


  path: any = 'assets/mytubepaws.png';

  ngOnInit() {
  }

countdown() {
  this.count = JSON.parse(localStorage.getItem('time'));
  this.count = this.count * 60;
  this.timed = true;
  this.countDown = timer(0, 1000).pipe(
    take(this.count),
    map(() => --this.count)
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

  // update view settings
  viewUpdate() {
    console.log("View index is: " + this.viewIndex);
    this.max = parseInt(this.maxStr);
    this.min = parseInt(this.minStr);
    this.loggedUser.userViewSettings[this.viewIndex].lengthMax = this.max;
    this.loggedUser.userViewSettings[this.viewIndex].lengthMin = this.min;
    this.loggedUser.userViewSettings[this.viewIndex].uploadTimeMin = this.minDate;
    this.loggedUser.userViewSettings[this.viewIndex].uploadTimeMax = this.maxDate;
    console.log(this.viewSettingsTemp);
    console.log(this.loggedUser.userViewSettings[this.viewIndex]);
    this.viewService.updateViewSetting(this.loggedUser.userViewSettings[this.viewIndex]).subscribe(updateView => {
      console.log(updateView);
      this.userService.updateUser(this.loggedUser).subscribe(user => {
        console.log(user);
      })
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(this.loggedUser));
    });

  }

  newPlaylist() {
    this.max = parseInt(this.maxStr);
    this.min = parseInt(this.minStr);
    this.viewSettingsTemp.lengthMax = this.max;
    this.viewSettingsTemp.lengthMin = this.min;
    this.viewSettingsTemp.uploadTimeMin = this.minDate;
    this.viewSettingsTemp.uploadTimeMax = this.maxDate;
    this.viewSettingsTemp.viewSettingsName = this.viewName;
    console.log(this.viewSettingsTemp);
    this.viewService.newViewSetting(this.viewSettingsTemp).subscribe(newView => {
      console.log(newView);
      this.loggedUser.userViewSettings.push(newView);
      this.userService.updateUser(this.loggedUser).subscribe(users => {
        console.log(users);
      });
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(this.loggedUser));
    });
  }

  changeSet(index: number) {
    this.maxStr = this.loggedUser.userViewSettings[index].lengthMax.toString();
    this.minStr = this.loggedUser.userViewSettings[index].lengthMin.toString();
    this.loggedUser.userViewSettings[index].uploadTimeMin = this.minDate;
    this.loggedUser.userViewSettings[index].uploadTimeMax = this.maxDate;
    this.viewService.changeViewSetting(index);
  }
}
