import { Injectable } from '@angular/core';
import { ViewSetting } from '../models/ViewSetting';

@Injectable()
export class ViewService {

  viewSetting: ViewSetting = { viewSettingId: 1, lengthMax: 2, lengthMin: 1, subscriberCountMin: 1, subscriberCountMax:2, uploadTimeMax:"0", uploadTimeMin:"0", ratingMin:0, ratingMax:0,categoryId:0, tagId:0, excludeTagId:0};
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
 