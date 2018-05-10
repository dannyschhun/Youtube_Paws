import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/Users';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PageLayout } from '../models/PageLayout';


const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {

  subscribers: BehaviorSubject<Users> = new BehaviorSubject<Users>(null);
  plSubscribers: BehaviorSubject<PageLayout> = new BehaviorSubject<PageLayout>(null);
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>((localStorage.getItem('user') !== null) ? true : false);

  constructor(private http: HttpClient) {
    const u = localStorage.getItem('user');
    if (u !== '{}' && u !== 'undefined') {this.subscribers.next(JSON.parse(u)); }
  }

  public loginUser(user: Users) {
    console.log(`Attempting to login user: ${user.username}`);
    const json = JSON.stringify(user);
    console.log(json);
    return this.http.post<Users>(API_URL + 'users/login', json, HTTP_OPTIONS);
  }

  public registerUser(user: Users) {
    console.log(`Attempting to register user: ${user.username}`);
    const json = JSON.stringify(user);
    return this.http.post<Users>(API_URL + 'users/new', json, HTTP_OPTIONS);
  }

  public updateUser(user: Users) {
    console.log(`Attempting to update user: ${user}`);
    const json = JSON.stringify(user);
    console.log(json);
    return this.http.put<Users>(API_URL + 'users/update', json, HTTP_OPTIONS);
  }

  public addPageLayout(pl: PageLayout) {
    console.log(`Attempting to add layout: ${pl.layoutName}`);
    const json = JSON.stringify(pl);
    return this.http.post<PageLayout>(API_URL + 'pagelayout/new', json, HTTP_OPTIONS);
  }

  public getPageLayout(user: Users, name: string) {
    console.log(`Attempting to add layout: ${name}`);
    const json = JSON.stringify(name);
    return this.http.get<PageLayout>(API_URL + `pagelayout/${name}`, HTTP_OPTIONS);
  }

  public getLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
