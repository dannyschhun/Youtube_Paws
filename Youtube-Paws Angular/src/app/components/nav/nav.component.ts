import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ViewSettings } from '../../models/ViewSettings';
import { ViewService } from '../../services/view.service';

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
  //update view settings
  viewUpdate() {
    this.max = parseInt(this.maxStr);
    this.min = parseInt(this.minStr);
    this.viewService.setViewSetting(this.min, this.max, this.minDate, this.maxDate);
  }
}         
