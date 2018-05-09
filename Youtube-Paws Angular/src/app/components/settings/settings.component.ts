import { Component, OnInit } from '@angular/core';
import { PageLayout } from '../../models/PageLayout';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  layout: PageLayout;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
