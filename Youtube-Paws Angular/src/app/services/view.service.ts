import { Injectable } from '@angular/core';
import { ViewSettings } from '../models/ViewSettings';
import { Tags } from '../models/Tags'

@Injectable()
export class ViewService {

  tag: Tags = { id: 0, name: "null" }
  timeString: string = "T19:00:01.000Z";
  viewSetting: ViewSettings

  constructor() {
  this.viewSetting = { id: 1, viewSettingsName: "", lengthMax: 50, lengthMin: 25, subscriberCountMin: 1, subscriberCountMax:2, uploadTimeMax:"2007-05-12T19:00:01.000Z", uploadTimeMin:"2018-05-08T19:00:01.000Z", ratingMin:0, ratingMax:0,categories: {id:1, name:"null"}[0], settingTags: {id: 1, name: "null"}[0], excludeTags: {id: 1, name: "null"}[0]};

  }

  setViewSetting(min: number, max: number, minDate: string, maxDate: string) {
    this.viewSetting.uploadTimeMin = minDate + this.timeString;
    this.viewSetting.uploadTimeMax = maxDate + this.timeString;
    this.viewSetting.lengthMin = min;
    this.viewSetting.lengthMax = max;
  }

  getViewSetting() {
      return this.viewSetting;
  }
}