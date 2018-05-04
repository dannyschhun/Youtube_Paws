import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
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

  subscribers: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>((localStorage.getItem('user') !== null) ? true : false);

  constructor(private http: HttpClient) {
    const u = localStorage.getItem('user');
    if (u !== '{}' && u !== 'undefined') {this.subscribers.next(JSON.parse(u)); }
  }

  public loginUser(user: User) {
    console.log(`Attempting to login user: ${user.username}`);
    const json = JSON.stringify(user);
    return this.http.post<User>(API_URL + 'login', json, HTTP_OPTIONS);
  }

  public registerUser(user: User) {
    console.log(`Attempting to register user: ${user.username}`);
    const json = JSON.stringify(user);
    return this.http.post<User>(API_URL + 'register', json, HTTP_OPTIONS);
  }

  public getLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
