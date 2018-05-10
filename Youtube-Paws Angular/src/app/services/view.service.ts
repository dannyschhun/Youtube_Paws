import { Injectable } from '@angular/core';
import { ViewSettings } from '../models/ViewSettings';
import { Tags } from '../models/Tags'

@Injectable()
export class ViewService {

  tag: Tags = { id: 0, name: "null" }
  viewSetting: ViewSettings = { id: 1, viewSettingsName: "", lengthMax: 2, lengthMin: 1, subscriberCountMin: 1, subscriberCountMax:2, uploadTimeMax:"0", uploadTimeMin:"0", ratingMin:0, ratingMax:0,categories: {id:1, name:"null"}[0], settingTags: {id: 1, name: "null"}[0], excludeTags: {id: 1, name: "null"}[0]};
  timeString: string = "T19:00:01.000Z";

  constructor() {

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