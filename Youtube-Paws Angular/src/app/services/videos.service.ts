import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Users } from '../models/Users';


const YOUTUBE_API = environment.youtubeUrl;
const key = "&key=AIzaSyCct6ZTzzep_67WRs7tw5V29YJVs2ny6_8";
@Injectable()
export class VideosService {

  constructor(
    private http: HttpClient
  ) { }

  VideoDescription(query: string) {
    return this.http.get(YOUTUBE_API + query + key)
  }

  

  Search(query: String) {
    return this.http.get(YOUTUBE_API + query);
  }
}
