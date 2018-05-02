import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>((localStorage.getItem('user') !== null) ? true : false);

  // constructor(private http: HttpClient) {
  //   const u = localStorage.getItem('user');
  //   if (u !== '{}' && u !== 'undefined') {this.subscribers.next(JSON.parse(u)); }
  // }

  // public loginUser(user: ErsUsers) {
  //   console.log(`Attempting to login user: ${user.ersUsername}`);
  //   const json = JSON.stringify(user);
  //   return this.http.post<ErsUsers>(API_URL + 'login', json, HTTP_OPTIONS);
  // }

  // public registerUser(user: ErsUsers) {
  //   console.log(`Attempting to register user: ${user.ersUsername}`);
  //   const json = JSON.stringify(user);
  //   return this.http.post<ErsUsers>(API_URL + 'register', json, HTTP_OPTIONS);
  // }

  public getLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
