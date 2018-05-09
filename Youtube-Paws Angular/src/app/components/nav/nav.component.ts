import { Component, OnInit } from '@angular/core';
import { ViewSetting } from '../../models/ViewSetting';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  isOpen: boolean = false;
  viewOpen: boolean = false;
  loggedIn: boolean = true;
  showFiller = false;
  minStr: string;
  maxStr: string;
  min: number;
  max: number;
  minDate: string;
  maxDate: string;
  

  constructor(
    private viewService: ViewService
  ) { }
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

  //update view settings
  viewUpdate() {
    this.max = parseInt(this.maxStr);
    this.min = parseInt(this.minStr);
    this.viewService.setViewSetting(this.min, this.max, this.minDate, this.maxDate);
  }
}
