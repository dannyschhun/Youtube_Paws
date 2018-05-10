import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ViewSettings } from '../../models/ViewSettings';
import { ViewService } from '../../services/view.service';
=======
import { timer } from 'rxjs/observable/timer';
import { take, map } from 'rxjs/operators';
>>>>>>> refs/remotes/origin/AlexiaD

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
  

  constructor(private userService: UserService, private router: Router, private viewService: ViewService) {
    this.userService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  viewSetting: ViewSettings = this.viewService.getViewSetting();
  minStr: string = this.viewSetting.lengthMin.toString();
  maxStr: string = this.viewSetting.lengthMax.toString();
  min: number;
  max: number;
  minDate: string = this.viewSetting.uploadTimeMin.split("T")[0];
  maxDate: string = this.viewSetting.uploadTimeMax.split("T")[0];
  

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
    this.viewService.setViewSetting(this.min, this.max, this.minDate, this.maxDate);
  }
}         
