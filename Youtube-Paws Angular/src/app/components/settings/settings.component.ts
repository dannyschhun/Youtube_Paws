import { Component, OnInit } from '@angular/core';
import { PageLayout } from '../../models/PageLayout'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  layout: PageLayout;

  constructor() { }

  ngOnInit() {
  }

}
