import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ViewSettings } from '../../models/ViewSettings';
import { ViewService } from '../../services/view.service';
import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
import { Users } from '../../models/Users';
import { Tags } from '../../models/Tags';
import { Category } from '../../models/Category';

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
  loggedUser: Users = JSON.parse(localStorage.getItem('user'));
  tag: Tags = {id: 1, name: "none"};
  category: Category = {categoryId: 1, categoryName: "none"};
  viewSettingsTemp: ViewSettings = { id: null, viewSettingsName: "Playlist", lengthMax: 12, lengthMin: 6, subscriberCountMin: 1, subscriberCountMax:2, uploadTimeMax:"2007-05-12T19:00:01.000Z", uploadTimeMin:"2018-05-08T19:00:01.000Z", ratingMin:0, ratingMax:0,categories: [this.category] , settingTags: [this.tag], excludeTags: [this.tag] };
  

  constructor(private userService: UserService, private router: Router, private viewService: ViewService) {
    this.userService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      console.log(this.loggedUser)
      if(this.loggedUser.userViewSettings.length == 0) {
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
    });
    console.log(this.loggedUser);
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
  //update view settings
  viewUpdate() {
    this.max = parseInt(this.maxStr);
    this.min = parseInt(this.minStr);
    this.viewSettingsTemp.lengthMax = this.max;
    this.viewSettingsTemp.lengthMin = this.min;
    this.viewSettingsTemp.uploadTimeMin = this.minDate;
    this.viewSettingsTemp.uploadTimeMax = this.maxDate;
    console.log(this.viewSettingsTemp);
    this.viewService.updateViewSetting(this.viewSettingsTemp);

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
      })
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(this.loggedUser))
    });
  }
}         
