import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/Users';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {

  subscribers: BehaviorSubject<Users> = new BehaviorSubject<Users>(null);
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>((localStorage.getItem('user') !== null) ? true : false);

  constructor(private http: HttpClient) {
    const u = localStorage.getItem('user');
    if (u !== '{}' && u !== 'undefined') {this.subscribers.next(JSON.parse(u)); }
  }

  public loginUser(user: Users) {
    console.log(`Attempting to login user: ${user}`);
    const json = JSON.stringify(user);
    console.log(json);
    return this.http.post<Users>(API_URL + 'users/login', json, HTTP_OPTIONS);
  }

  public registerUser(user: Users) {
    console.log(`Attempting to register user: ${user}`);
    const json = JSON.stringify(user);
    return this.http.post<Users>(API_URL + 'users/new', json, HTTP_OPTIONS);
  }

  public getLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
