import { Injectable, EventEmitter, Output } from '@angular/core';
import { ViewSettings } from '../models/ViewSettings';
import { Tags } from '../models/Tags'
import { environment } from '../../environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ViewService {

  tag: Tags = { id: 0, name: "null" }
  timeString: string = "T19:00:01.000Z";

  subscribers: BehaviorSubject<ViewSettings> = new BehaviorSubject<ViewSettings>(null);
  @Output() index: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor(private http: HttpClient) {

  }

  updateViewSetting(updateView: ViewSettings) {
    console.log(updateView);
    const json = JSON.stringify(updateView);
    return this.http.put<ViewSettings>(API_URL + 'viewSettings/update', json, HTTP_OPTIONS);
  }

  changeViewSetting(index: number) {
      this.index.next(index);
  }

  
  newViewSetting(newView: ViewSettings) {
    console.log("This is newView: " + newView);
    const json = JSON.stringify(newView);
    console.log(json);
    return this.http.post<ViewSettings>(API_URL + 'viewSettings/new', json, HTTP_OPTIONS);
  }
}